// Import the functions you need from the SDKs you need
import {getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSCiO-i8N8T00PGcBB6elXqTzA1pBsdHE",
    authDomain: "receuilztfawards.firebaseapp.com",
    projectId: "receuilztfawards",
    storageBucket: "receuilztfawards.firebasestorage.app",
    messagingSenderId: "903148873436",
    appId: "1:903148873436:web:1764e5778dc5cd17faf619",
    measurementId: "G-992S0PWNH9"
};

// Initialize Firebase
if (!getApps().length) {
    initializeApp(firebaseConfig)
}
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
export const db = getFirestore();