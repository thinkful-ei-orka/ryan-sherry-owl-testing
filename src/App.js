import React from 'react';
import Participant from './Participant'
import Stage from './Stage';
import Chat from './chat';
import Logs from './Logs';

function App(props) {
  console.log(props.participants.find(p => p.id === 3))
  function participantStatus(p1, p2) {
    if (p1.inSession === true) {
      return -1
    }
    if (p2.inSession === true) {
      return 1
    }
    else {
      return 0
    }
  }
  return (
    <main className="App">
      <ul className="participants-list">
      {props.participants.sort(participantStatus).map(participant => (<li key={participant.id}><Participant name={participant.name} avatar={participant.avatar} sessionStatus={participant.inSession}/></li>))}
      </ul>
      <div className="stage-container">
        <ul className="stage-list">
        {props.participants.filter(participant => participant.onStage === true).map(participant => (<li key={participant.id}><Stage name={participant.name} avatar={participant.avatar}/></li>))}
        </ul>
      </div>
      <div className="chat-bar">
        <ul className="chat-contents">
        {Chat.map(event => (<li key={event.participantId}><Logs participant={props.participants.find(p => p.id === event.participantId)} type={event.type} message={event.message} time={event.time} timestamp={event.timestamp}/></li>))}
        </ul>
      </div>
    </main>
  );
}

export default App; 