import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";
import classes from "./Affair.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
    priorityClass: AffairPriorityType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={classes.affairWrapper}>
            <button onClick={deleteCallback} className={classes.button}>X</button>
            <div className={classes.name}>{props.affair.name}</div>
            <div className={classes.priority}>{props.affair.priority}</div>
        </div>
    )
}

export default Affair
