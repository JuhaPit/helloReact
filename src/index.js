import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Count from './Count';
import './index.css';

let modals = ( 
    <div>
        <App />
        <Count />
    </div>
);

ReactDOM.render(
  modals,
  document.getElementById('root')
);