// assets/firebase.js
// Firebase config + shared instances for RiseUpWichita

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔐 REPLACE THIS WITH YOUR REAL CONFIG FROM FIREBASE
const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME.firebaseapp.com",
  projectId: "riseupwichita-prod",
  storageBucket: "riseupwichita-prod.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Shared instances
export const db = getFirestore(app);
export const auth = getAuth(app);

window._ruwFirebase = { app, db, auth };
