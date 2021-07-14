import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD4yVT10jkMN3uBQ74PYvV0gWRorNh6PTU",
  authDomain: "ecommerce-villordo.firebaseapp.com",
  projectId: "ecommerce-villordo",
  storageBucket: "ecommerce-villordo.appspot.com",
  messagingSenderId: "1016061296974",
  appId: "1:1016061296974:web:f84425ae25f6107b485e1f",
};
// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = firebase.firestore(app).collection("items");
