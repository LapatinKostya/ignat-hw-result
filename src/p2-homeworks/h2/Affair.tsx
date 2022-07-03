import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";
import classes from "./Affair.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
    let priorityClass = ''
    if (props.priorityClass === 'high') {
        priorityClass = classes.high
    }
    if (props.priorityClass === 'middle') {
        priorityClass = classes.middle
    }
    if (props.priorityClass === 'low') {
        priorityClass = classes.low
    }
    return (
        <div className={classes.affairWrapper}>
            <div>
                <SuperButton onClick={deleteCallback} red>X</SuperButton>
            </div>
            <div className={classes.name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
        </div>
    )
}

export default Affair
