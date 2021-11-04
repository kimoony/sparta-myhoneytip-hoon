// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyCDkJF2GA3sC12VMWBIRUlNTb4426qnT5M",
  authDomain: "sparta-myhoneytip-hooni.firebaseapp.com",
  databaseURL: 'https://sparta-myhoneytip-hooni-default-rtdb.firebaseio.com/',
  projectId: "sparta-myhoneytip-hooni",
  storageBucket: "sparta-myhoneytip-hooni.appspot.com",
  messagingSenderId: "893204591588",
  appId: "1:893204591588:web:16e99a2ac8ee8538054df1",
  measurementId: "G-B58J2GZZQF"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()