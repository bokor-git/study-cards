import axios from "axios"


const settings = {
    withCredentials: true
}
const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    ...settings
})

// api


export const TableApi = {
    getPacks() {
        const promise = instance.get('cards/pack?&pageCount=100' );
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
    }
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