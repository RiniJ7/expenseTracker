// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.EXPENSE_TRACKER_API_KEY}`,
  authDomain: `${process.env.EXPENSE_TRACKER_AUTH_DOMAIN}`,
  projectId: "expense-tracker-698bd",
  storageBucket: "expense-tracker-698bd.appspot.com",
  messagingSenderId: "438444580284",
  appId: "1:438444580284:web:1dc63ce821d0faec59dfb9",
  measurementId: "G-PDGWR43DPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
