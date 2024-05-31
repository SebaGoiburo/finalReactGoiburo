import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt4cpMlaPZBCiUDYeaPVd0M0gBFHE92Ns",
  authDomain: "react-finalgoiburo.firebaseapp.com",
  projectId: "react-finalgoiburo",
  storageBucket: "react-finalgoiburo.appspot.com",
  messagingSenderId: "1016880761249",
  appId: "1:1016880761249:web:0ada8c796104d6c55363e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
