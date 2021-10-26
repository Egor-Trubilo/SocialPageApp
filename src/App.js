import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Users/Users";




const App = () => {
    return (
        <div>
            <div className="app-wrapper">
                <Header/>

                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile'
                           render={ () => < Profile />}/>
                    <Route path='/users'
                           render={ () => < Users />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                </div>
            </div>


        </div>

    )
}

export default App;