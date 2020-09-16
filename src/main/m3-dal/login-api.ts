import axios from 'axios'

const settings = {
    withCredentials: true
}
const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    ...settings
})

// api
export const authAPI = {
    login(data: LoginParamsType) {
        const promise = instance.post('auth/login', data);
        return promise;
    },
    logout() {
        const promise = instance.delete('auth/me');
        return promise;
    },
    authMe() {
        return instance.post('auth/me', {});
    },
    updateProfile(data:profileUpdateData) {
        return instance.put('auth/me', data);
    }
}

// types
export type LoginParamsType = {
    password: string
    rememberMe: boolean
    email: string;
}
export type profileUpdateData = {
    name:string,
    avatar:string|File
}


