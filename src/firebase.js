import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKGzpq7F3bd7NYjWr36Ft2PgHhH5JCO4U",
  authDomain: "think-piece-2c5f3.firebaseapp.com",
  databaseURL: "https://think-piece-2c5f3.firebaseio.com",
  projectId: "think-piece-2c5f3",
  storageBucket: "think-piece-2c5f3.appspot.com",
  messagingSenderId: "980877769218"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOutWithGoogle = () => auth.signOut()

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
