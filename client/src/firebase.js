// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-57935.firebaseapp.com",
  projectId: "real-estate-app-57935",
  storageBucket: "real-estate-app-57935.firebasestorage.app",
  messagingSenderId: "53416508304",
  appId: "1:53416508304:web:c5d8218f833d6ca0499115",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
