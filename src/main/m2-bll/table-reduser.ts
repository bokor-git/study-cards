import {Dispatch} from "redux";
import {
    AddCardDataType,
    AddPackDataType,
    DeleteCardDataType,
    GetCardsDataType,
    TableApi,
    UpdateCardDataType,
    UpdatePackDataType
} from "../m3-dal/tableApi";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";

type ThunkDispatchActionType =
    setLoadingActionType | setPacksActionType |
    setCardsActionType | SetAppStatusActionType |
    SetAppErrorActionType

type ThunkDispatch = Dispatch<ThunkDispatchActionType>

type StateType = {
    cards: any
    packs: any
    isLoading: boolean
}
const initialState: StateType = {
    packs: null,
    cards: null,
    isLoading: false

}

export const tableReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, packs: action.packs}
        case 'SET-IS-LOADING':
            return {...state, isLoading: action.value}
        case 'SET-CARDS':
            return {...state, cards: action.cards}

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
        handleServerNetworkError(error, dispatch)
    })
}
export const addPackTC = (data: AddPackDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.addPack(data).then(res => {
        TableApi.getPacks().then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const deletePackTC = (data: string) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.deletePack(data).then(res => {
        TableApi.getPacks().then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const updatePackTC = (data: UpdatePackDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.updatePack(data).then(res => {
        TableApi.getPacks().then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}


export const getCardsTC = (data: GetCardsDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.getCards(data)
        .then(res => {
            dispatch(setIsLoadingAC(false))
            dispatch(setCardsAC(res.data.cards))
        }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const deleteCardTC = (data: any) => (dispatch: ThunkDispatch) => {
    debugger
    setIsLoadingAC(true)
    TableApi.deleteСard(data.cardId).then(res => {
        TableApi.getCards({cardsPack_id: data.packId}).then(res => {
            dispatch(setIsLoadingAC(false))
            dispatch(setCardsAC(res.data.cards))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    })
}
export const updateCardTC = (data: UpdateCardDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.updateСard(data).then(res => {
        TableApi.getCards({cardsPack_id: data.packId}).then(res => {
            dispatch(setIsLoadingAC(false))
            dispatch(setCardsAC(res.data.cards))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    })
}
export const addCardTC = (data: AddCardDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.addCard(data).then(res => {
        TableApi.getCards({cardsPack_id: data.card.cardsPack_id}).then(res => {
            dispatch(setIsLoadingAC(false))
            dispatch(setCardsAC(res.data.cards))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    })
}


// Action Creators
export const setPacksAC = (packs: PackType) => ({type: 'SET-PACKS', packs} as const)
export const setIsLoadingAC = (value: boolean) => ({type: 'SET-IS-LOADING', value} as const)
export const setCardsAC = (cards: CardsType) => ({type: 'SET-CARDS', cards} as const)

type setCardsActionType = ReturnType<typeof setCardsAC>
type setPacksActionType = ReturnType<typeof setPacksAC>
type setLoadingActionType = ReturnType<typeof setIsLoadingAC>
type ActionType = setLoadingActionType | setPacksActionType | setCardsActionType


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
export type CardsType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
}
export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    created: string
    updated: string
    __v: number
    _id: string
}