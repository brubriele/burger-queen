import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAy6EXo1Oi9mPU84EP5ciFKAt-QewXPxU4",
  authDomain: "burger-queen-373cb.firebaseapp.com",
  databaseURL: "https://burger-queen-373cb.firebaseio.com",
  projectId: "burger-queen-373cb",
  storageBucket: "burger-queen-373cb.appspot.com",
  messagingSenderId: "828402851688",
  appId: "1:828402851688:web:3cfbc91a0acb6a75"
};
  
const database = firebase.initializeApp(firebaseConfig);

export default firebase;