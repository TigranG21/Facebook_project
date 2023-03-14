import React from "react";
import classes from "./Aside.module.css"
import {User} from "../Header/Header"
import {NavLink} from "react-router-dom";
import state from "../../redux/state";

let {asidePage} = state
export function Aside(props) {
    return (
        <div className={classes.asideBar}>
            <User myImg={props.myImg} userName={props.userName} userDouble={classes.userDouble}/>
            {asidePage.map(item => {
                return <AsideItems key={item.id} img={item.img} itemName={item.itemName} href={item.href}/>
            })}
        </div>
    )
}

export function AsideItems(props) {
    return (
        <div className={classes.asideItems}>
            <NavLink to={props.href} activeclassname={props.activeClassName}>
                <img src={props.img} alt={"img"}/>
                <p>{props.itemName}</p>
            </NavLink>
        </div>
    )
}