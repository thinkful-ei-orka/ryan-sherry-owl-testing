import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participants from './participants'
import './index.css';
console.log('test');
ReactDOM.render(<App participants={participants}/>, document.getElementById('root'));