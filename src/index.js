import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDY5umPZkyk58TFamon3HD7og3cWlMkbCw",
  authDomain: "members-only-eaf21.firebaseapp.com",
  projectId: "members-only-eaf21",
  storageBucket: "members-only-eaf21.appspot.com",
  messagingSenderId: "298715523393",
  appId: "1:298715523393:web:c525b6e05e2b1909e419c0",
  measurementId: "G-00K6V86XX9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
