import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes/AppRoutes";
import { observeAuthState } from "./firebase/auth";
import { getUserProfile } from "./firebase/firestore";

import {
  setUser,
  clearUser,
  setLoading,
} from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      try {
        if (user) {
          const profile = await getUserProfile(user.uid);

          if (profile) {
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
                ...profile,
              })
            );
          } else {
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
              })
            );
          }
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        console.error("Authentication error:", error);
        dispatch(clearUser());
      } finally {
        dispatch(setLoading(false));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;