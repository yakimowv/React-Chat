import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJajF1a_jivYrt4FvXZv4byJ6n15AqkQ0",
    authDomain: "react-chat-8ca23.firebaseapp.com",
    projectId: "react-chat-8ca23",
    storageBucket: "react-chat-8ca23.appspot.com",
    messagingSenderId: "30125649137",
    appId: "1:30125649137:web:00e837ac6011070a498d50"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
