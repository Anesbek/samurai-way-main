import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png" alt=""/>
            </div>
            <div>
                ava+dic
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>

                        <div className={s.item}>Post 1</div>
                        <div className={s.item}>Post 2</div>
                    </div>
                </div>
            </div>


    );
}