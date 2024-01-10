import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: any) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props: any) => {

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

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messegesElemeents = messeges
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messeges}>
                {messegesElemeents}
            </div>
        </div>
    );
};

export default Dialogs;