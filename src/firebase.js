// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "shortlet-6c562.firebaseapp.com",
  projectId: "shortlet-6c562",
  storageBucket: "shortlet-6c562.firebasestorage.app",
  messagingSenderId: "532372296024",
  appId: "1:532372296024:web:ab94493f19d370f7d7152d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
