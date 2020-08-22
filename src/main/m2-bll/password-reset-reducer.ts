import {Dispatch} from "redux";
import {authAPI} from "../m3-dal/auth-api";

const initialState: InitialStateType = {
    loading: false
}

export const passwordResetReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: action.loading}
        default:
            return {...state}
    }
}
export const setLoadingAC = (loading: boolean) => ({type: 'LOADING', loading} as const)

export const resetPasswordTC = (email: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingAC(true))
    let data = {
        email: email,
        from: "test-front-admin",
        message: `<div style = "background-color: lime; padding: 15px">
            password recovery link:
    <a href='http://localhost:3000/study-cards#/password-generation/$token$'>link</a>
    </div>`
    }
    authAPI.forgot(data).then((res: any) => {
        if (res.status === 200) {
           dispatch( setLoadingAC(false))
            alert("Mail was send!")
        }
    }).catch(reason => alert(reason))
}


export type ActionCreatorActionType = ReturnType<typeof setLoadingAC>
export type InitialStateType = any
type ActionsType =
    | ActionCreatorActionType