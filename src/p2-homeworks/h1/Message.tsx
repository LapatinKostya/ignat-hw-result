import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.messageWrapper}>
            <img src={props.avatar} className={classes.avatar} alt={'avatar'}/>
            <div className={classes.triangle}></div>
            <div className={classes.cloud}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
