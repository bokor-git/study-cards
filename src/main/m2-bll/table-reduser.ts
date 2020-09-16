import {Dispatch} from "redux";
import {
    AddCardDataType,
    AddPackDataType, DeleteCardDataType,
    GetCardsDataType, GradeCardDataType,
    TableApi,
    UpdateCardDataType,
    UpdatePackDataType
} from "../m3-dal/tableApi";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";
import {handleServerNetworkError} from "../m1-ui/utils/error-utils";

export type PaginatorType = {
    packsCount: number
    startPage: number
    endPage:number
    currentPage: number
}
type StateType = {
    // cards: Array<CardType> | null
    // packs: Array<PackType> | null
    cards: any
    packs:any
    isLoading: boolean
    paginator:PaginatorType
}

const initialState: StateType = {
    packs: null,
    cards: null,
    isLoading: false,
    paginator:{
        currentPage: 1,
        packsCount: 1,
        startPage: 1,
        endPage:5,
    }

}

export const tableReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-PACKS':
            return {...state, packs: action.packs}
        case 'SET-IS-LOADING':
            return {...state, isLoading: action.value}
        case 'SET-CARDS':
            return {...state, cards: action.cards}
        case 'SET-COUNT':{
            let CopyState = {...state,...state.paginator}
            CopyState.paginator.packsCount = action.count
            return CopyState}
        case 'SET-START-VALUE-PR':{
            let CopyState = {...state,...state.paginator}
            CopyState.paginator.startPage = action.value
            return CopyState}
        case 'SET-END-VALUE-PR':{
            let CopyState = {...state,...state.paginator}
            CopyState.paginator.endPage = action.value
            return CopyState}
        case 'SET-CURRENT-PAGE':{
            let CopyState = {...state,...state.paginator}
            CopyState.paginator.currentPage = action.value
            return CopyState}
        default:
            return {...state}
    }
}


// thunks

type ThunkDispatch = Dispatch<ActionType | SetAppStatusActionType | SetAppErrorActionType>

export const getPacksTC = (currentPage:number) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.getPacks(currentPage).then(res => {
        dispatch(setPacksAC(res.data.cardPacks))
        dispatch(setPacksTotalCountAC(res.data.cardPacksTotalCount))
        dispatch(setIsLoadingAC(false))
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const addPackTC = (data: AddPackDataType,currentPage:number) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.addPack(data).then(res => {
        TableApi.getPacks(currentPage).then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const deletePackTC = (data: string,currentPage:number) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.deletePack(data).then(res => {
        TableApi.getPacks(currentPage).then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setIsLoadingAC(false))
        }).catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
    }).catch((error) => {
        handleServerNetworkError(error, dispatch)
    })
}
export const updatePackTC = (data: UpdatePackDataType,currentPage:number) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.updatePack(data).then(res => {
        debugger
        TableApi.getPacks(currentPage).then(res => {
            debugger
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
export const deleteCardTC = (data: DeleteCardDataType) => (dispatch: ThunkDispatch) => {
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

export const gradeCardTC = (data: GradeCardDataType) => (dispatch: ThunkDispatch) => {
    setIsLoadingAC(true)
    TableApi.gradeСard(data).then(res => {
        console.log(res)
        TableApi.getCards({cardsPack_id: res.data.updatedGrade.cardsPack_id}).then(res => {
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
export const setPacksTotalCountAC = (count: number) => ({type: 'SET-COUNT', count} as const)
export const setStartPagePaginatorAC = (value: number) => ({type: 'SET-START-VALUE-PR', value} as const)
export const setEndPagePaginatorAC = (value: number) => ({type: 'SET-END-VALUE-PR', value} as const)
export const setCurrentPagerAC = (value: number) => ({type: 'SET-CURRENT-PAGE', value} as const)


type setCardsActionType = ReturnType<typeof setCardsAC>
type setPacksActionType = ReturnType<typeof setPacksAC>
type setLoadingActionType = ReturnType<typeof setIsLoadingAC>
type setPacksTotalCountActionType = ReturnType<typeof setPacksTotalCountAC>
export type setStartPagePaginatorActionType = ReturnType<typeof setStartPagePaginatorAC>
type setEndPagePaginatorActionType = ReturnType<typeof setEndPagePaginatorAC>
type setCurrentPagerActionType = ReturnType<typeof setCurrentPagerAC>

type ActionType = setLoadingActionType | setPacksActionType | setCardsActionType | setPacksTotalCountActionType |
    setStartPagePaginatorActionType | setEndPagePaginatorActionType | setCurrentPagerActionType


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
