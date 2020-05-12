import React from 'react'

export default function Participant(props) {
    console.log(props)
    return (<div className="participant-structure">
    <div className="participant-name">{props.name}</div>
    <img className="participant-avatar" src={props.avatar} alt={`${props.name}'s avatar'`}></img>
    <div className="participant-status">{props.inSession}</div>
    </div>)
}

