import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAw90ul-tfBTUWFTpYAY3w7nqcIn6tjI8I",
  authDomain: "fruits-ecommerce-app.firebaseapp.com",
  projectId: "fruits-ecommerce-app",
  storageBucket: "fruits-ecommerce-app.appspot.com",
  messagingSenderId: "623186376929",
  appId: "1:623186376929:web:4f0240f6079b164385dfa0",
  measurementId: "G-85ZBSD36GR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
