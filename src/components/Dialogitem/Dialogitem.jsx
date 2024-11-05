import React from "react";
import s from './../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {
    let path = '/dialogs/'  + props.name + '/'  +props.id ;
    return <div className={s.dialog+' '+s.active}>
    <NavLink to={path}>{props.name}</NavLink>   
   </div>
}

export default Dialogitem;