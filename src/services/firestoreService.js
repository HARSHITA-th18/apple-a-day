// import {
//   getFirestore,
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore"

// import app from "../firebase/firebaseConfig"

// const db = getFirestore(app)

// export const getCollection = async (collectionName) => {
//   const snapshot = await getDocs(
//     collection(db, collectionName)
//   )

//   return snapshot.docs.map((item) => ({
//     id: item.id,
//     ...item.data(),
//   }))
// }

// export const addItem = async (
//   collectionName,
//   data
// ) => {
//   const reference = await addDoc(
//     collection(db, collectionName),
//     data
//   )

//   return reference.id
// }

// export const updateItem = async (
//   collectionName,
//   id,
//   data
// ) => {
//   await updateDoc(
//     doc(db, collectionName, id),
//     data
//   )
// }

// export const deleteItem = async (
//   collectionName,
//   id
// ) => {
//   await deleteDoc(
//     doc(db, collectionName, id)
//   )
// };