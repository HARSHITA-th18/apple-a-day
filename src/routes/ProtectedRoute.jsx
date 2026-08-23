// import { Navigate } from "react-router-dom"
// import useAuth from "../hooks/useAuth"

// function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth()

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-stone-50">
//         <p className="text-sm text-stone-500">
//           Loading...
//         </p>
//       </div>
//     )
//   }

//   if (!user) {
//     return (
//       <Navigate
//         to="/admin/login"
//         replace
//       />
//     )
//   }

//   return children
// }

// export default ProtectedRoute;