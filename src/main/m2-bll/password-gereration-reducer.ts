import {Dispatch} from "redux";
import {authAPI, newPasswordDataType} from "../m3-dal/auth-api";


const initialState: InitialStateType = null

export const passwordGenerationReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return {...state}
    }
}
export const setNewPasswordTC = (newPasswordData: newPasswordDataType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.setNewPassword(newPasswordData).then((res: any) => {
        if (res.status === 200) {
            alert("Password was change!")
        }
    }).catch(reason => alert(reason))
}
export const ActionCreator = () => ({type: ''} as const)
export type ActionCreatorActionType = ReturnType<typeof ActionCreator>
export type InitialStateType = any
type ActionsType =
    | ActionCreatorActionType