import React from "react";
import clases from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <a href="">Profile</a>
            </div>
            <div className={clases.item}>
                <a href="">Message</a>
            </div>
            <div className={clases.item}>
                <a href="">News</a>
            </div>
            <div className={clases.item}>
                <a href="">Music</a>
            </div>
            <div className={clases.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}