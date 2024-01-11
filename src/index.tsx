import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id:1,  message: 'Hi,how are you?', likesCount: 12  },
    {id:2,  message: 'First post?',  likesCount: 2},
    {id:3,  message: 'First post?',  likesCount: 3},
    {id:4,  message: 'First post?',  likesCount: 2},
]

let dialogs = [
    {id: 1, name: 'Ali'},
    {id: 2, name: 'Anes'},
    {id: 3, name: 'Kin'},
    {id: 4, name: 'Son'},
    {id: 5, name: 'Mn'},
    {id: 5, name: 'Moo'},
]
let messeges = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How r you'},
    {id: 3, message: 'Yooo'},
    {id: 4, message: 'Yooo'},
    {id: 5, message: 'Yooo'},
]


ReactDOM.render
    (<App posts={posts} dialogs={dialogs} messeges={messeges} />, document.getElementById('root')
);