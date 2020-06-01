import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //it assumes that this is a js file
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />                  
  </React.StrictMode>,
  document.getElementById('root')
);

//Here App is a functional component
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
