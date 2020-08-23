import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer'
import {loginReducer} from "./login-reducer";
import {registrationReducer} from "./registration-reducer";
import {passwordResetReducer} from "./password-reset-reducer";
import {passwordGenerationReducer} from "./password-gereration-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "../m1-ui/Login/login-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    app: appReducer,
    loginPage: loginReducer,
    registrationPage: registrationReducer,
    passwordResetPage: passwordResetReducer,
    passwordGenerationPage: passwordGenerationReducer,
    profilePage: profileReducer,
    auth:authReducer

})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
