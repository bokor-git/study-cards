import {Dispatch} from "redux";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {authAPI, LoginParamsType, profileUpdateData} from "../m3-dal/login-api";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";


export type userDate = {
    email : string
    name : string
    avatar: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    __v:number
    _id: string
    success:boolean

}

type InitialStateType = {
    isLoginIn: boolean,
    UserData: userDate
}
const initialState: InitialStateType = {
    isLoginIn: false,
    UserData: {
        avatar:"",
        email : "",
        name : "",
        isAdmin: false,
        rememberMe: false,
        token: "",
        tokenDeathTime: 0,
        __v: 0,
        _id: "",
        success: false,
    }
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'SET-IS-LOGIN-IN':
            return {...state, isLoginIn: action.value}
        case 'SET-IS-LOGOUT-IN':
            return {...state, isLoginIn: action.value}
        case 'SET-USER-DATA-IN':
            return {...state, UserData: action.Userdata}

        default:
            return state
    }
}

// actions

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'SET-IS-LOGIN-IN', value} as const)
export const setUsersDataAC = (Userdata: userDate) =>
    ({type: 'SET-USER-DATA-IN', Userdata} as const)
export const setIsLogoutInAC = (value: boolean) =>
    ({type: 'SET-IS-LOGOUT-IN', value} as const)
export const setTokenAC = (token: string) =>
    ({type: 'SET-IS-LOGIN-IN', token} as const)


// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setUsersDataAC(res.data))
        }).catch((error) => {
        handleServerNetworkError(error, dispatch);
    })
}

export const logoutTC = () => (dispatch: ThunkDispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
        }).catch((error) => {
        handleServerNetworkError(error, dispatch);
    })
}

// types


type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUsersDataAC>
    | ReturnType<typeof setIsLogoutInAC>




type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>