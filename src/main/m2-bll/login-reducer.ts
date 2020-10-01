import {Dispatch} from "redux";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {authAPI, LoginParamsType} from "../m3-dal/login-api";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";


export type userDate = {
    avatar: string ,
    created:  string | null,
    email:  string | null,
    isAdmin: boolean | null
    name:  string ,
    publicCardPacksCount: string | null,
    rememberMe: boolean | null
    token:  string | null,
    tokenDeathTime:  string | null,
    updated:  string | null,
    verified: boolean | null
    __v:  string | null,
    _id:  string ,

}

type InitialStateType = {
    isLoginIn: boolean,
    UserData: userDate
}
const initialState: InitialStateType = {
    isLoginIn: false,
    UserData: {
        avatar: "",
        created: null,
        email: null,
        isAdmin: false,
        name: "",
        publicCardPacksCount:null,
        rememberMe: false,
        token: null,
        tokenDeathTime: null,
        updated: null,
        verified: false,
        __v: null,
        _id: "",
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
            dispatch(setUsersDataAC(res.data))
            dispatch(setIsLoggedInAC(true))
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