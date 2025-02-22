import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBygbbboRTszF8OvSpB9V8geZt5zReUc74",
  authDomain: "pepinos-shop.firebaseapp.com",
  projectId: "pepinos-shop",
  storageBucket: "pepinos-shop.firebasestorage.app",
  messagingSenderId: "670988936013",
  appId: "1:670988936013:web:33d57eb2a1274e4961cd04",
  measurementId: "G-W4BYLNJKNS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
