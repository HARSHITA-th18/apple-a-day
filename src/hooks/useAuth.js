// import { useEffect, useState } from "react"
// import {
//   getAuth,
//   onAuthStateChanged,
// } from "firebase/auth"

// import app from "../firebase/firebaseConfig"

// function useAuth() {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const auth = getAuth(app)

//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (currentUser) => {
//         setUser(currentUser)
//         setLoading(false)
//       }
//     )

//     return () => unsubscribe()
//   }, [])

//   return {
//     user,
//     loading,
//   }
// }

// export default useAuth;