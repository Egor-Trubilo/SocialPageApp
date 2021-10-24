import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




const App = (props) => {
    debugger;
    return (

        <div>

            <div className="app-wrapper">
                <Header/>


                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer
                            store={props.store}
                        />}/>
                    <Route path='/profile' render={() =>
                        <Profile
                            store = {props.store}
                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>


        </div>

    )
}

export default App;