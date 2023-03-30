import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBascrqxoF9xm7ZrvvQ3vPFXo3J212ngSA",
  authDomain: "semicolon-5f685.firebaseapp.com",
  projectId: "semicolon-5f685",
  storageBucket: "semicolon-5f685.appspot.com",
  messagingSenderId: "144278965417",
  appId: "1:144278965417:web:dabb912487d9ee1dafadb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth}