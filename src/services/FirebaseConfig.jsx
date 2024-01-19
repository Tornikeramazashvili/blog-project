// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAML7ZjpreuTS7fcz0rM5Qnz6EjtkVLqb4",
  authDomain: "blogproject-3ed5a.firebaseapp.com",
  projectId: "blogproject-3ed5a",
  storageBucket: "blogproject-3ed5a.appspot.com",
  messagingSenderId: "1065321112399",
  appId: "1:1065321112399:web:e74223e70b1e1924659b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
