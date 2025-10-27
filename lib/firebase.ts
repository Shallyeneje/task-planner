// // lib/firebase.ts

// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// // Do not import `firebase/analytics` at module scope (it may touch browser APIs).

// const firebaseConfig = {
//   apiKey: "AIzaSyDEGGK6hHy-_i6Fv7jGrvmsZbKKOcSd99I",
//   authDomain: "task-planner-9c0c0.firebaseapp.com",
//   projectId: "task-planner-9c0c0",
//   storageBucket: "task-planner-9c0c0.firebasestorage.app",
//   messagingSenderId: "1093604228763",
//   appId: "1:1093604228763:web:ad835e7466025a1bc1103e",
//   measurementId: "G-GSET1RHYEV",
// };

// // Prevent re-initialization on hot reloads in dev
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// export const db = getFirestore(app);
// export const auth = getAuth(app);

// // Analytics (only works in browser)
// // Export a promise that resolves to analytics or null, but do NOT call
// // browser-only APIs during server-side rendering. Only initialize in the
// // browser runtime.
// export const analytics = (async () => {
//   if (typeof window === "undefined") return null;
//   try {
//     const { isSupported, getAnalytics } = await import("firebase/analytics");
//     return (await isSupported()) ? getAnalytics(app) : null;
//   } catch (err) {
//     // If dynamic import fails for any reason, return null and continue.
//     return null;
//   }
// })();


// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);