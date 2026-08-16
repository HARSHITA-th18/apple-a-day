import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { observeAuthState } from "./firebase/auth";
import { getUserProfile } from "./firebase/firestore";
import { setUser, clearUser, setLoading } from "./redux/slices/authSlice";
import Home from "./pages/user/Home";
import Unauthorized from "./pages/auth/Unauthorized";
import { Navigate } from "react-router-dom";

import Admin from "./pages/admin/Admin";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      if (user) {
        const profile = await getUserProfile(user.uid);

        if (profile) {
          dispatch(
            setUser({
              uid: user.uid,
              ...profile,
            })
          );
        }
      } else {
        dispatch(clearUser());
      }

      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Home />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;