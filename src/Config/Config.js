
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {



  apiKey: "AIzaSyBk3ICAd7T64wo0B3SqX133tksin5xssMQ",
  authDomain: "story2021-689a6.firebaseapp.com",
  projectId: "story2021-689a6",
  storageBucket: "story2021-689a6.appspot.com",
  messagingSenderId: "296290175896",
  appId: "1:296290175896:web:794a12e4e10141ebe279ed"
};








firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }