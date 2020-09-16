import {Dispatch} from "redux";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {authAPI, profileUpdateData} from "../m3-dal/login-api";
import {setIsLoggedInAC, setUsersDataAC} from "./login-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";


const initialState: InitialStateType = {
    isInitialized: false
}

export const ProfileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case'SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

// actions

export const setInitializedAC = (isInitialized: boolean) =>
    ({type: 'SET-INITIALIZED', isInitialized} as const)


// thunks
export const isInitializedTC = () => (dispatch: ThunkDispatch) => {
    authAPI.authMe().then(res => {
        dispatch(setIsLoggedInAC(true))
        dispatch(setInitializedAC(true))
        dispatch(setUsersDataAC(res.data))
    })
        .catch(error => console.log(error))
}

export const changeUserDataTC = (data:profileUpdateData) => (dispatch: ThunkDispatch) => {
    authAPI.updateProfile(data)
        .then(res => {
            dispatch(setUsersDataAC(res.data.updatedUser))
        }).catch((error) => {
        handleServerNetworkError(error, dispatch);
    })
}

// types


type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setUsersDataAC>
type InitialStateType = {
    isInitialized: boolean,

}


type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
