import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWD9Vtj01Hxtiw5pU8GNOdtXoXm-RkqEY",
  authDomain: "coder-ton-mobles.firebaseapp.com",
  projectId: "coder-ton-mobles",
  storageBucket: "coder-ton-mobles.firebasestorage.app",
  messagingSenderId: "511510089417",
  appId: "1:511510089417:web:a1c3e9f2154a1c22338718",
  measurementId: "G-DBBRMRXJX5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);