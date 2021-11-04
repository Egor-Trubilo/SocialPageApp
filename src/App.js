import React from "react";
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";




const App = () => {
    return (
        <div>
            <div className="app-wrapper">
                <HeaderContainer/>

                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile:userId'
                           render={ () => < ProfileContainer />}/>
                    <Route path='/users'
                           render={ () => < UsersContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                </div>
            </div>


        </div>

    )
}

export default App;