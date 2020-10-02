import axios from "axios"


const settings = {
    withCredentials: true
}
const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    ...settings
})

// api


export const TableApi = {
    getPacks(page?:string | number,id?:string,pageCount?:number) {
        const promise = instance.get(`cards/pack?&page=${page?page:""}&pageCount=${pageCount?pageCount:"25"}&user_id=${ id ? id : ""}` );
        return promise;
    },
    addPack(data:AddPackDataType) {
        const promise = instance.post('cards/pack',data);
        return promise;
    },
    deletePack(data:string) {
        const promise = instance.delete(`cards/pack?id=${data}`);
        return promise;
    },
    updatePack(data:UpdatePackDataType) {
        const promise = instance.put('cards/pack',data );
        return promise;
    },
    getCards(data:GetCardsDataType) {
        const promise = instance.get(`cards/card?&cardsPack_id=${data.cardsPack_id}&pageCount=100` );
        return promise;
    },
    addCard(data:AddCardDataType) {
        const promise = instance.post('cards/card',data);
        return promise;
    },
    deleteСard(data:string) {
        const promise = instance.delete(`cards/card?id=${data}`);
        return promise;
    },
    updateСard(data:UpdateCardDataType) {
        const promise = instance.put(`cards/card`,data);
        return promise;
    },
    gradeСard(data:GradeCardDataType) {
        const promise = instance.put(`cards/grade`,data);
        return promise;
    },
}
export type AddPackDataType = {
    cardsPack: {
        name?:string
        path?:string
        grade?:number
        shots?:number
        rating?:number
        deckCover?:string
        private?:false
        type?:string
    }
}
export type UpdatePackDataType = {
    cardsPack: {
        _id:string
        name?:string
        path?:string
        grade?:number
        shots?:number
        rating?:number
        deckCover?:string
        private?:false
        type?:string
    }
}
export type GetCardsDataType = {
    cardsPack_id: string
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}
export type AddCardDataType = {
    card: {
        cardsPack_id: string
        question?: string
        answer?: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type?: string
    }
}
export type UpdateCardDataType = {
    card: {
        _id: string
        question?: string
        comments?: string
    }
    packId:string

}
export type DeleteCardDataType = {
    cardId: string
    packId: string
}

export type GradeCardDataType = {
    grade:number
    card_id:string
}