// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEGGK6hHy-_i6Fv7jGrvmsZbKKOcSd99I",
  authDomain: "task-planner-9c0c0.firebaseapp.com",
  projectId: "task-planner-9c0c0",
  storageBucket: "task-planner-9c0c0.firebasestorage.app",
  messagingSenderId: "1093604228763",
  appId: "1:1093604228763:web:ad835e7466025a1bc1103e",
  measurementId: "G-GSET1RHYEV",
};

// Prevent re-initialization on hot reloads in dev
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics (only works in browser)
export const analytics = (async () =>
  (await isSupported()) ? getAnalytics(app) : null)();


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);