// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQk0yRzmhTuJOTyqDCNf-Fa-8SsJrU5HE",
    authDomain: "eleazar-profile.firebaseapp.com",
    projectId: "eleazar-profile",
    storageBucket: "eleazar-profile.appspot.com",
    messagingSenderId: "790603638071",
    appId: "1:790603638071:web:7b976abd19c062e5b426b2",
    measurementId: "G-WEBM5GS7VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };