import axios from 'axios'

const settings = {
    withCredentials: true
}
const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    ...settings
})

// api
export const authAPI = {
    login(data: LoginParamsType) {
        const promise = instance.post('auth/login', data);
        return promise;
    },
    logout(){
        const promise = instance.delete('auth/me');
        return promise;
    },authMe() {
        return instance.post('auth/me',{});
    }
}

// types
export type LoginParamsType = {

    rememberMe: boolean
    _id?: string;
    email: string;
    name?: string;
    avatar?: string;
    publicCardPacksCount?: number; // количество колод

    created?: Date;
    updated?: Date;
    isAdmin?: boolean;
    verified: boolean; // подтвердил ли почту
    error?: string;
}







