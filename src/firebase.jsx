import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuCHaL6I6Q_ep8vNXfccSKXrjIMN9miqE",
  authDomain: "fir-login-b1219.firebaseapp.com",
  projectId: "fir-login-b1219",
  storageBucket: "fir-login-b1219.appspot.com",
  messagingSenderId: "836146114314",
  appId: "1:836146114314:web:c550af16c96b2a1b1ad4f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();
export {auth, app};