import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLtBLnpUFMdTBnR3w8fhTxxCQ8iZBcGcE",
  authDomain: "todo-list-e3c32.firebaseapp.com",
  projectId: "todo-list-e3c32",
  storageBucket: "todo-list-e3c32.appspot.com",
  messagingSenderId: "842977619861",
  appId: "1:842977619861:web:5c7407e6af478cd607109c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
