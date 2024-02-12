// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArI0qCoLjbC8d5sa1bjCYyykN59_mR7EY",
  authDomain: "netflix-gpt-f1b35.firebaseapp.com",
  projectId: "netflix-gpt-f1b35",
  storageBucket: "netflix-gpt-f1b35.appspot.com",
  messagingSenderId: "175295934953",
  appId: "1:175295934953:web:b8bc5350776301d2a21b78",
  measurementId: "G-GY0HFMB7EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
