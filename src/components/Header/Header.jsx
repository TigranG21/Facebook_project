import React from "react";
import facIcon from '../../img/facIcon.png'
import headSearch from '../../img/headSearch.png'
import friendsImg from '../../img/friendsImg.png'
import messages from '../../img/messages.png'
import language from '../../img/language.png'
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";


export function Header(props) {
    return (
        <header className={classes.header}>
            <div className={classes.headLogoBox}>
                <img src={facIcon} alt=""/>
            </div>
            <div className={classes.searchBox}>
                <input type="text" placeholder="search facebook"/>
                <button>
                    <img src={headSearch} alt=""/>
                </button>
            </div>
            <User myImg={props.myImg} userName={props.userName}/>
            <div className={classes.headerMenu}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Find Friends</a></li>
                    <li><a><img src={friendsImg}/></a></li>
                    <li><a><img src={messages}/></a></li>
                    <li><a><img src={language}/></a></li>
                </ul>
            </div>
        </header>
    )
}

export function User(props) {
    return (
        <div className={`${classes.headPersonBox} ${props.userDouble} `}>
            <NavLink to={"/profile"}>
                <div className={classes.userImg}>
                    <img src={props.myImg}/>
                </div>
                <div className={classes.userName}>
                    <p>{props.userName}</p>
                </div>
            </NavLink>

        </div>
    )
}

