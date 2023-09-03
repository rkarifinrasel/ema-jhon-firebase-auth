// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJTqdMaRuOO5c-IKrRmbfQXhp1mOrRSkY",
  authDomain: "ema-jhon-firebase-auth-e7edc.firebaseapp.com",
  projectId: "ema-jhon-firebase-auth-e7edc",
  storageBucket: "ema-jhon-firebase-auth-e7edc.appspot.com",
  messagingSenderId: "230021027605",
  appId: "1:230021027605:web:98f38def4950bfd1ad3b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;