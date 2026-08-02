// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkQQWTv_tdaAxDB-zvbyj6wg5DwRLtRbo",
  authDomain: "carpentry-app-c5af6.firebaseapp.com",
  projectId: "carpentry-app-c5af6",
  storageBucket: "carpentry-app-c5af6.firebasestorage.app",
  messagingSenderId: "209711728061",
  appId: "1:209711728061:web:57ff6a740dcdd316373ed4",
  measurementId: "G-6EHHKLF0EF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
