import React from 'react';
import './App.css';
import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import Headere from "./components/header/Header";


const App = () => {
    return (
        <div className="app-wpapper">
            <Headere/>
            <Navbar/>
            <Profile/>


        </div>

    );
}


export default App;
