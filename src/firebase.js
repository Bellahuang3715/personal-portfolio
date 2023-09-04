// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwLSJ8Ggzgp8Ndga8GhJjByx6WKv-qjpo",
  authDomain: "personal-portfolio-d8d1a.firebaseapp.com",
  projectId: "personal-portfolio-d8d1a",
  storageBucket: "personal-portfolio-d8d1a.appspot.com",
  messagingSenderId: "480306662896",
  appId: "1:480306662896:web:9091535dfc6e8931326135",
  measurementId: "G-R63N8DR883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);