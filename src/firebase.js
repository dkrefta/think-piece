import firebase from "firebase";
import "firebase/firestore";

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

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
