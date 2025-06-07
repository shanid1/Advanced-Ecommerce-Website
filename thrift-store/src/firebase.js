import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI-WQw8DZQXm-9GEWxEL3om6kd_ri5d0s",
  authDomain: "ecommerce-6b927.firebaseapp.com",
  databaseURL: "https://ecommerce-6b927-default-rtdb.firebaseio.com",
  projectId: "ecommerce-6b927",
  storageBucket: "ecommerce-6b927.firebasestorage.app",
  messagingSenderId: "1014287282849",
  appId: "1:1014287282849:web:a2e026fcff82ac6c5236e0",
  measurementId: "G-M24SNJ85TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);