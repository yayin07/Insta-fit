// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGyK61nZy3vrCaWUJCBvJ7I0SFn0IEGPI",
  authDomain: "instafit-2494d.firebaseapp.com",
  projectId: "instafit-2494d",
  storageBucket: "instafit-2494d.appspot.com",
  messagingSenderId: "946417986352",
  appId: "1:946417986352:web:2e3ee0b6ba4e22fdd2f6f5",
  measurementId: "G-JSLLVF1HZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
