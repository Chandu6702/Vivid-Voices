// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vivid-voices-d5893.firebaseapp.com",
  projectId: "vivid-voices-d5893",
  storageBucket: "vivid-voices-d5893.appspot.com",
  messagingSenderId: "308749479894",
  appId: "1:308749479894:web:3f2662f8af875ebaa1fe77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
