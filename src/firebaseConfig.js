import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBisPVWfiCqzN6YyhHXgJzgCD1qOmkya38",
  authDomain: "linkedin-clone-6b5ca.firebaseapp.com",
  projectId: "linkedin-clone-6b5ca",
  storageBucket: "linkedin-clone-6b5ca.appspot.com",
  messagingSenderId: "1094634823178",
  appId: "1:1094634823178:web:6ce0a538bb6d3952b649f3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
