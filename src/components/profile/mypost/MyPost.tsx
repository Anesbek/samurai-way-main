import React from "react";
import {Post} from "./post/Post";
import s from './MyPost.module.css';

export const MyPost = (props:any) => {

    let posts = [
        {id:1,  message: 'Hi,how are you?', likesCount: 12  },
        {id:2,  message: 'First post?',  likesCount: 2},
    ]
    let postsElements = posts
        .map(p =><Post  message = {p.message} likesCount = {p.likesCount}/> )

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
                {postsElements}
            </div>
        </div>


    );
}