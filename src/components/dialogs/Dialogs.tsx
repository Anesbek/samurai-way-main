import React from 'react';
import s from  './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props:any) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

    const Message = (props:any)=> {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs} >

           <div className={s.dialogsItems}>

               <DialogItem name='Ali' id={'1'}/>
               <DialogItem name='Anes' id={'2'}/>
               <DialogItem name='Kin' id={'3'}/>
               <DialogItem name='Son' id={'4'}/>
               <DialogItem name='Mn' id={'5'}/>
               <DialogItem name='Moo' id={'6'}/>

           </div>

            <div className={s.messeges}>
                <Message message = 'Hi'/>
                <Message message = 'How r you'/>
                <Message message = 'Yooo'/>
                <Message message = 'Yooo'/>
                <Message message = 'Yooo'/>

            </div>
        </div>
    );
};

export default Dialogs;