import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import app from "./config";

const db = getFirestore(app);

// Create user profile
export const createUserProfile = async (uid, userData) => {
  await setDoc(doc(db, "users", uid), userData);
};

// Get user profile
export const getUserProfile = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (userDoc.exists()) {
    return userDoc.data();
  }

  return null;
};

export default db;