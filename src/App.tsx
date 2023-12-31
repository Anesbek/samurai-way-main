import React from 'react';
import './App.css';
import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import Headere from "./components/Header";


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
