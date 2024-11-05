import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";



function Nav (){
return(
    <nav className={s.nav}>
        <div className={s.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
    </div>
        <div className={s.item}>
        <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
       
        <br></br>
        <br></br>


<div className={s.item_sidebar}>
    <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item }> Friends</NavLink>
</div>


    <div className={s.users}>
        <div >
        
        <NavLink to="/dialogs/*1" className={ navUser => navUser.isActive ? s.click : s.user }>
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" 
        className={s.friendsLogo} />
        Alex
            </NavLink>
            </div>
            <div>
            <NavLink to="/dialogs/*2" className={ navUser => navUser.isActive ? s.click : s.user }>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" className={s.friendsLogo} />
            Milana</NavLink>
            </div>
            <div>
            <NavLink to="/dialogs/*3" className={ navUser => navUser.isActive ? s.click : s.user }>
        <img src="https://cdn-icons-png.flaticon.com/512/219/219989.png" alt="" className={s.friendsLogo} />
            Oksana</NavLink>
            </div>
    </div>
    
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </nav>
)
}

export default Nav;