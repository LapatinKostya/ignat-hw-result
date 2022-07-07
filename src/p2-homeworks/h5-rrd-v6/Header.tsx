import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import classes from "./Header.module.css"


function Header() {
    return (
        <div className={classes.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={classes.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={classes.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={classes.link}>junior-plus</NavLink>
            <div className={classes.menu}></div>
        </div>

    )
}

export default Header
