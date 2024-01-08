import React from 'react';
import s from  './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs} >
           <div className={s.dialogsItems}>
               <div className={s.dialog}>
                  Anes
               </div>
               <div className={s.dialog + ' ' + s.active}>
                  Ali
               </div>
               <div className={s.dialog}>
                  Ara
               </div>
               <div className={s.dialog}>
                  sAra
               </div>
               <div className={s.dialog}>
                  sArah
               </div>
               <div className={s.dialog}>
                  salah
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