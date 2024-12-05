// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn53vH_5AI657TcugWcvHYQ9kJ0SOqJUY",
  authDomain: "visa-navigator-e661b.firebaseapp.com",
  projectId: "visa-navigator-e661b",
  storageBucket: "visa-navigator-e661b.firebasestorage.app",
  messagingSenderId: "1044917696098",
  appId: "1:1044917696098:web:f529102f58454499ee833b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);