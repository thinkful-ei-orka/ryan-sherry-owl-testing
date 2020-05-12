import React from 'react';

export default function Logs(props) {
    console.log(props)
    return (<div className="log-structure">
    <div className="participant-name">{props.participant.name}</div>
    <img className="participant-avatar" src={props.participant.avatar} alt="{props.participant.name}'s avatar"></img>>
    <div className="log-type">{props.type}</div>
    <div className="log-message">{props.message}</div> 
    <div className="log-time">{props.time}</div>
    <div className="log-timestamp">{props.timestamp}</div>
    </div>)
}