import { doc, getDoc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// Check if a user is an admin
export async function isAdmin(uid) {
  if (!uid) return false;
  const ref = doc(db, 'admins', uid);
  const snap = await getDoc(ref);
  return snap.exists();
}

// Add a new admin by UID
export async function addAdmin(uid, addedBy, label) {
  const ref = doc(db, 'admins', uid);
  await setDoc(ref, {
    uid,
    label: label || 'Admin',
    addedBy,
    addedAt: new Date().toISOString()
  });
}

// Remove an admin by UID
export async function removeAdmin(uid) {
  const ref = doc(db, 'admins', uid);
  await deleteDoc(ref);
}

// Get all admins
export async function getAllAdmins() {
  const snap = await getDocs(collection(db, 'admins'));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
