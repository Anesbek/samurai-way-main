import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./messege/Messege";

const Dialogs = (props: any) => {


    let dialogsElements = props.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)

    let messegesElemeents = props.message.map((m: { message: string; }) => <Message message={m.message}/>)

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