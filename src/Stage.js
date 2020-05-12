import React from 'react'
import Participant from './Participant'
import Participants from './Participants'

export default function Stage(props) {
    console.log(props)
    return (<div className="stage-structure">
    <div className="stage-name">{props.name}</div>
    <img className="stage-avatar" src={props.avatar} alt={`${props.name}'s avatar'`}></img>
    </div>)
}