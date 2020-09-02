import {Dispatch} from "redux";
import {AddPackDataType, TableApi, UpdatePackDataType} from "../m3-dal/tableApi";
import {setAppErrorAC, SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";


export type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
    deckCover: any
}


type ActionType =  setLoadingActionType & setPacksActionType


type ThunkDispatch = Dispatch<setLoadingActionType | setPacksActionType | SetAppStatusActionType | SetAppErrorActionType>

type StateType = {
    packs: any
    isLoading: boolean
}
const initialState: StateType = {
    packs: null,
    isLoading: false
}

export const tableReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, packs: action.packs}
        case 'SET-IS-LOADING':
            return {...state, isLoading: action.value}

        default:
            return {...state}
    }
}


// thunks
export const getPacksTC = () => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.getPacks().then(res => {
        dispatch(setPacksAC(res.data.cardPacks))
        dispatch(setIsLoadingAC(false))
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)})
}
export const addPackTC = (data:AddPackDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.addPack(data).then(res => {
        TableApi.getPacks().then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)})
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)})
}
export const deletePackTC = (data:string) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.deletePack(data).then(res => {
        TableApi.getPacks().then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)})
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)})
}
export const updatePackTC = (data:UpdatePackDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.updatePack(data).then(res => {
        dispatch(setIsLoadingAC(false))
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)})
}




// Action Creators
export const setPacksAC = (packs: any): setPacksActionType =>
    ({type: 'SET-PACKS', packs} as const)

export const addPacksAC = (pack: any): addPacksActionType =>
    ({type: 'ADD-PACK', pack} as const)


export const setIsLoadingAC = (value: boolean): setLoadingActionType =>
    ({type: 'SET-IS-LOADING', value} as const)

type setPacksActionType = {
    type: string
    packs: any
}
type addPacksActionType = {
    type: string
    pack: any
}
type setLoadingActionType = {
    type: string
    value: boolean
}