// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, browserLocalPersistence, GoogleAuthProvider, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA83MQr9gM4KjVfqtwcCGYLhHIBe7DVihM",
  authDomain: "screw-6bc73.firebaseapp.com",
  projectId: "screw-6bc73",
  storageBucket: "screw-6bc73.firebasestorage.app",
  messagingSenderId: "1021685996062",
  appId: "1:1021685996062:web:a08f604953aed43db0ac0f",
  measurementId: "G-NJVDKGWJMT"
};

// Ensure single app instance
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Register auth explicitly to avoid "Component auth has not been registered" issues in some bundlers
export const auth = typeof window !== 'undefined'
  ? (getApps().length && getAuth(app)) || initializeAuth(app, { persistence: browserLocalPersistence })
  : getAuth(app);

// Ensure local persistence (covers both getAuth and initializeAuth cases)
if (typeof window !== 'undefined') {
  setPersistence(auth, browserLocalPersistence).catch(() => {});
}

export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const googleProvider = new GoogleAuthProvider();