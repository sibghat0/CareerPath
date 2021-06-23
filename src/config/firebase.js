import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9lRKXiVZBxA0eS2tMrRgMHHp-ixn-7UI",
  authDomain: "career-path-9e643.firebaseapp.com",
  projectId: "career-path-9e643",
  storageBucket: "career-path-9e643.appspot.com",
  messagingSenderId: "426703031606",
  appId: "1:426703031606:web:f88cce2229e70b34317797",
  measurementId: "G-S9CNY8EMT3",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
