// Run this once to seed yourself as the first admin
// This is called automatically on first login if no admins exist
import { doc, getDoc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const OWNER_UID = 'VTWCSTakXoMiiGz6srAq3kCxKan2';

export async function seedOwnerAdmin() {
  // Check if any admins exist
  const snap = await getDocs(collection(db, 'admins'));
  if (snap.empty) {
    // No admins yet — seed the owner
    await setDoc(doc(db, 'admins', OWNER_UID), {
      uid: OWNER_UID,
      label: 'Owner / Head Instructor',
      addedBy: 'system',
      addedAt: new Date().toISOString()
    });
  }
}
