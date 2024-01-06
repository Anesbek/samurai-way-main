import React from 'react';
import './App.css';
// import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import Header from "./components/header/Header";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wpapper">
                <Header/>
                <Navbar/>
                <div className="app-wpapper-content">
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/musıc' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
