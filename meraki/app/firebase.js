// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSascLWNXcwW05aOxq8kxcMft0XWcxb0o",
  authDomain: "next-auth-firebase-f39c3.firebaseapp.com",
  projectId: "next-auth-firebase-f39c3",
  storageBucket: "next-auth-firebase-f39c3.appspot.com",
  messagingSenderId: "206201867514",
  appId: "1:206201867514:web:c6d78a493faadfa29a0d43"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }