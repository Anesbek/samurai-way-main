import React from "react";
import {Post} from "./post/Post";
import s from './MyPost.module.css';

export const MyPost = () => {
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
                <Post  message = 'Hi,how are you?' likesCount = '0'/>
                <Post message = 'First post?' likesCount = '23'/>

            </div>
        </div>


    );
}