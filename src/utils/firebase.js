// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjs2cdztmUCIj-OhsrMlHypoZtNQaN0us",
  authDomain: "netflixgpt-8d0ca.firebaseapp.com",
  projectId: "netflixgpt-8d0ca",
  storageBucket: "netflixgpt-8d0ca.firebasestorage.app",
  messagingSenderId: "708773952719",
  appId: "1:708773952719:web:bd77c1a9d4775190a0cbba",
  measurementId: "G-XTWDMEB279",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
