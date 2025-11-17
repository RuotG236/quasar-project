// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4bx84Rllm1JZGZ5K0ATGQmVL53fJcOko",
  authDomain: "quasar-828eb.firebaseapp.com",
  projectId: "quasar-828eb",
  storageBucket: "quasar-828eb.firebasestorage.app",
  messagingSenderId: "67136765934",
  appId: "1:67136765934:web:9b1777f4feefecd2c6d8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
