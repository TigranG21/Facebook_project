import React from "react";
import classes from "./Massages.module.css";
import {NavLink} from "react-router-dom";

function PersonMassage(props) {
    let path = "/massages/" + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Dialogs(props) {
    return (
        <div>
            <p>{props.massage}</p>
        </div>
    )
}

export function Massages(props) {

    let personElements = props.massagesPage.personObjects.map(person => {
        return <PersonMassage name={person.name} id={person.id}/>
    })

    let massagesElements = props.massagesPage.massagesObjects.map(massage => {
        return (
            <Dialogs
                massage={massage.massage}
                newMassageText={props.massagesPage.newMassageText}
                updateNewMassageText={props.massagesPage.updateNewMassageText}
            />
        )
    })

    let newText = React.createRef()

    let sendMessages = () => {
        let text = newText.current.value;
        newText.current.value = ""
        props.addMessage(text)
    }

    let onMassageChange = () => {
        let text = newText.current.value;
        props.updateNewMassageText(text)
    }

    return (
        <div className={classes.MassagesCount}>
            <div className={classes.dialogsPersons}>
                {personElements}
            </div>
            <div className={classes.massagesBox}>
                <div className={classes.meetBox}>
                    {massagesElements}
                </div>
                <div className={classes.sendMassagesBox}>
                    <textarea ref={newText} onChange={onMassageChange} value={props.newMassageText}/>
                    <button onClick={sendMessages}>send</button>
                </div>
            </div>
        </div>
    )
}

