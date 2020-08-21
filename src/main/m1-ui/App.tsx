import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PasswordGenerationPage from "./pages/PasswordGenerationPage";
import ProfilePage from "./pages/ProfilePage";
import HeaderNavbar from "./header/HeaderNavbar";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <HeaderNavbar/>
                <>
                    <Switch>
                        <Route exact path={"/"} render={() => (<LoginPage/>)}/>
                        <Route path={"/login/"} render={() => (<LoginPage/>)}/>
                        <Route path="/registration" render={() => (<RegistrationPage/>)}/>
                        <Route path="/password-reset" render={() => (<PasswordResetPage/>)}/>}
                        <Route path="/password-generation" render={() => (<PasswordGenerationPage/>)}/>
                        <Route path="/profile" render={() => (<ProfilePage/>)}/>
                        <div>Hello</div>
                    </Switch>
                </>
            </div>
        </HashRouter>
    );
}

export default App;
