import React from "react";
import s from './Profile.module.css';
import {Post} from "./mypost/post/Post";
import {MyPost} from "./mypost/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>


    );
}