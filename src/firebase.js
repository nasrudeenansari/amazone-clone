// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDAdFOJmlT1s7RiO184OUy9lOkcLTdggnQ",
  authDomain: "e-clone-6466e.firebaseapp.com",
  projectId: "e-clone-6466e",
  storageBucket: "e-clone-6466e.appspot.com",
  messagingSenderId: "1028171799732",
  appId: "1:1028171799732:web:4b65b0157e5e336a0d4be1",
  measurementId: "G-972DC5J2XR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };