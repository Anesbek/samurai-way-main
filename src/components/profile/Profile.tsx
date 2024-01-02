import React from "react";
import s from './Profile.module.css';
import {Post} from "./mypost/post/Post";
import {MyPost} from "./mypost/MyPost";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png" alt=""/>
            </div>
            <div>
                ava+dic
            </div>
            <MyPost/>
        </div>


    );
}