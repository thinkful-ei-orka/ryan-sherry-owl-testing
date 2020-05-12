import React from 'react';
import Participants from './Participants';
import Participant from './Participant'

function App() {
  console.log(Participants)
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
    <main className='App'>
      <ul className='participants-list'>
      {Participants.sort(participantStatus).map(participant => (<li key={participant.id}><Participant name={participant.name} avatar={participant.avatar} sessionStatus={participant.inSession}/></li>))}
      </ul>
    </main>
  );
}

export default App;