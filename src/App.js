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




const App = (props) => {
    return (
        <BrowserRouter>
            <div>

                <div className="app-wrapper">
                    <Header/>


                    <div className='app-wrapper-content'>
                        <Navbar/>
                        <Route path='/dialogs' render={() =>
                            <Dialogs
                                // state={props.state.dialogsPage}
                                store={props.store}
                            />}/>
                        <Route path='/profile' render={() =>
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                            />}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>

                    </div>
                </div>


            </div>
        </BrowserRouter>

    )
}

export default App;