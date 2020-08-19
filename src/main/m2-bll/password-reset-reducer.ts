const initialState: InitialStateType = null

export const passwordResetReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return {...state}
    }
}
export const ActionCreator = () => ({type: ''} as const)

export type ActionCreatorActionType = ReturnType<typeof ActionCreator>
export type InitialStateType = any
type ActionsType =
    | ActionCreatorActionType