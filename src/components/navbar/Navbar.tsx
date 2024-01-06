import React from "react";
import clases from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={clases.item}>
                <a href="/dialogs">Message</a>
            </div>
            <div className={clases.item}>
                <a href="/news">News</a>
            </div>
            <div className={clases.item}>
                <a href="/musıc">Music</a>
            </div>
            <div className={clases.item}>
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    )
}