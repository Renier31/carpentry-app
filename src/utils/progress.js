import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// Save quiz result to Firestore
export async function saveProgress(userId, moduleId, score, total) {
  const ref = doc(db, 'progress', `${userId}_module_${moduleId}`);
  await setDoc(ref, {
    userId,
    moduleId,
    score,
    total,
    percent: Math.round((score / total) * 100),
    date: new Date().toISOString()
  });
}

// Get progress for one user across all modules
export async function getUserProgress(userId) {
  const results = {};
  for (let i = 1; i <= 4; i++) {
    const ref = doc(db, 'progress', `${userId}_module_${i}`);
    const snap = await getDoc(ref);
    if (snap.exists()) results[i] = snap.data();
  }
  return results;
}

// Get all users' progress (for instructor dashboard)
export async function getAllProgress() {
  const snap = await getDocs(collection(db, 'progress'));
  return snap.docs.map((d) => d.data());
}

// Get all feedback submissions
export async function getAllFeedback() {
  const snap = await getDocs(collection(db, 'feedback'));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Save feedback to Firestore
export async function saveFeedback(userId, name, email, subject, message) {
  const ref = doc(collection(db, 'feedback'));
  await setDoc(ref, { userId, name, email, subject, message, date: new Date().toISOString() });
}
