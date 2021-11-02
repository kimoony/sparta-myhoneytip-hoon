import * as firebase from 'firebase/app';
// import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyD6nDpVy5H4zGTwEUiGHj7WPhSfdNR5ZOY",
  authDomain: "sparta-myhoneytip-373da.firebaseapp.com",
  databaseURL: "https://sparta-myhoneytip-373da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sparta-myhoneytip-373da",
  storageBucket: "sparta-myhoneytip-373da.appspot.com",
  messagingSenderId: "871173077305",
  appId: "1:871173077305:web:7bedb42803d11881eb90e8",
  measurementId: "G-BCFFPQY2Q0"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()