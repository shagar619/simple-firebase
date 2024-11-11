// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5PteA1svCFrv_fN6VAV1SOPAvk5wT4rY",
  authDomain: "simple-firebase2-6ebd1.firebaseapp.com",
  projectId: "simple-firebase2-6ebd1",
  storageBucket: "simple-firebase2-6ebd1.firebasestorage.app",
  messagingSenderId: "791231987259",
  appId: "1:791231987259:web:ecd0e8e7eb6693506da61e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 