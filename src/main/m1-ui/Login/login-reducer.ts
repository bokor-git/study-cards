import {Dispatch} from "redux";
import {SetAppErrorActionType, SetAppStatusActionType} from "../../m2-bll/app-reducer";
import {authAPI, LoginParamsType} from "../api/login-api";
import {handleServerNetworkError} from "../utils/error-utils";


const initialState: InitialStateType = {
    isLoginIn: false,
    UserData: {
        _id: '0',
        email: '',
        name: '',
        publicCardPacksCount: 0, // количество колод
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: ''

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
export const setUsersDataAC = (Userdata: LoginParamsType) =>
    ({type: 'SET-USER-DATA-IN', Userdata} as const)
export const setIsLogoutInAC = (value: boolean) =>
    ({type: 'SET-IS-LOGOUT-IN', value} as const)


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
type InitialStateType = {
    isLoginIn: boolean,
    UserData: LoginParamsType
}


type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
