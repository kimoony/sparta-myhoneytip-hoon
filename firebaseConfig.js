// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6nDpVy5H4zGTwEUiGHj7WPhSfdNR5ZOY",
  authDomain: "sparta-myhoneytip-373da.firebaseapp.com",
  projectId: "sparta-myhoneytip-373da",
  storageBucket: "sparta-myhoneytip-373da.appspot.com",
  messagingSenderId: "871173077305",
  appId: "1:871173077305:web:7bedb42803d11881eb90e8",
  measurementId: "G-BCFFPQY2Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);