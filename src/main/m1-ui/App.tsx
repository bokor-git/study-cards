import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PasswordGenerationPage from "./pages/PasswordGenerationPage";
import ProfilePage from "./pages/ProfilePage";
import HeaderNavbar from "./header/HeaderNavbar";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <HeaderNavbar/>
                <>
                    <Switch>
                        <Route path={"/login"} render={() => (<LoginPage/>)}/>
                        <Route path="/registration" render={() => (<RegistrationPage/>)}/>
                        <Route path="/password-reset" render={() => (<PasswordResetPage/>)}/>}
                        <Route path="/password-generation/:id" render={() => (<PasswordGenerationPage/>)}/>
                        <Route path="/password-generation/"
                               render={() => (<h1>We send to your mail link for password change. Use it!</h1>)}/>
                        <Route path="/profile" render={() => (<ProfilePage/>)}/>
                    </Switch>
                </>
            </div>
        </HashRouter>
    );
}

export default App;