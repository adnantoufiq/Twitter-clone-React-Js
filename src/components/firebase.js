import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2iuqxXMRo1t1HNCHnMOVqbSXn9cB9Nck",
  authDomain: "twitter-clone-9d9b0.firebaseapp.com",
  projectId: "twitter-clone-9d9b0",
  storageBucket: "twitter-clone-9d9b0.appspot.com",
  messagingSenderId: "882071999427",
  appId: "1:882071999427:web:b41fdf38b3c9d4aa7d2376",
  measurementId: "G-SXEJHB7T2Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
