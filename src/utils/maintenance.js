import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Check if maintenance mode is ON from Firestore
export async function checkMaintenance() {
  try {
    const ref = doc(db, 'system', 'config');
    const snap = await getDoc(ref);
    if (snap.exists()) {
      return snap.data().maintenance === true;
    }
    return false;
  } catch {
    return false; // if can't reach Firestore, allow access
  }
}

// Set maintenance mode (call from admin tools if needed)
export async function setMaintenance(value) {
  const ref = doc(db, 'system', 'config');
  await setDoc(ref, { maintenance: value }, { merge: true });
}
