import React from "react";
import {Post} from "./post/Post";
import s from './MyPost.module.css';

export const MyPost = () => {
    return (

        <div>
            My Posts
            <div>
                New Post
            </div>
            <textarea name=""></textarea>
            <button>Add Post</button>

            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>


    );
}