import React from 'react';
import './App.css';
// import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import Header from "./components/header/Header";
import Dialogs from "./components/dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wpapper">
            <Header/>
            <Navbar/>
            <div className="app-wpapper-content">
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>

    );
}


export default App;
