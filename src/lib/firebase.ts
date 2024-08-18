// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2-lKaBCIFjOykyIUT8xsLibmlnv70tr0",
  authDomain: "haewol-cs-web.firebaseapp.com",
  projectId: "haewol-cs-web",
  storageBucket: "haewol-cs-web.appspot.com",
  messagingSenderId: "49827638466",
  appId: "1:49827638466:web:40a8ecb58fd25c4eb05f5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authService = getAuth(app);

export { authService };
