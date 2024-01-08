import React from 'react';
import s from  './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs} >
           <div className={s.dialogsItems}>
               <div className={s.dialog}>
                 <NavLink to='/dialogs/1'> Anes</NavLink>
               </div>
               <div className={s.dialog + ' ' + s.active}>
                  <NavLink to='/dialogs/2'>Ali</NavLink>
               </div>
               <div className={s.dialog}>
                  <NavLink to='/dialogs/3'>Sarah</NavLink>
               </div>
               <div className={s.dialog}>
                  <NavLink to='/dialogs/4'>sAra</NavLink>
               </div>
               <div className={s.dialog}>
                 <NavLink to='/dialogs/5'>sArah</NavLink>
               </div>
               <div className={s.dialog}>
                  <NavLink to='/dialogs/6'>Moo</NavLink>
               </div>
           </div>
            <div className={s.messeges}>
                <div className={s.messeg}>Hai</div>
                <div className={s.messeg}>How are you</div>
                <div className={s.messeg}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;