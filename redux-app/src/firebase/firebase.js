import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArEvZq4aiOfN253Cd10rRa8AMrC2N__OA",
    authDomain: "linked-in-by-rj.firebaseapp.com",
    projectId: "linked-in-by-rj",
    storageBucket: "linked-in-by-rj.appspot.com",
    messagingSenderId: "71083701299",
    appId: "1:71083701299:web:9cf2ed56815d8bf9531f46",
    measurementId: "G-XM7CVXRK15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };