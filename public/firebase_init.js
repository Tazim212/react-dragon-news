// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiJtVmYubExEZBIVQm1BhrYuCuysFEiDg",
  authDomain: "react-dragon-news-32e36.firebaseapp.com",
  projectId: "react-dragon-news-32e36",
  storageBucket: "react-dragon-news-32e36.firebasestorage.app",
  messagingSenderId: "324841017670",
  appId: "1:324841017670:web:e54e67899e031bc3775547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)