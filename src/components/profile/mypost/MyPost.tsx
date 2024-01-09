import React from "react";
import {Post} from "./post/Post";
import s from './MyPost.module.css';

export const MyPost = (props:any) => {

    let postData = [
        {id:1,  message: 'Hi,how are you?', likesCount: 12  },
        {id:2,  message: 'First post?',  likesCount: 2},

    ]

    return (

        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name=""></textarea>
                </div>
                    <div>
                        <button>Add Post</button>
                    </div>

            </div>


            <div className={s.posts}>
                <Post  message = {postData[0].message} likesCount = {postData[0].likesCount}/>
                <Post  message = {postData[1].message} likesCount = {postData[1].likesCount}/>


            </div>
        </div>


    );
}