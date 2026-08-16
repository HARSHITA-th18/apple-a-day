import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../firebase/auth";
import { clearUser } from "../../redux/slices/authSlice";

export default function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(clearUser());
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        Admin Panel (placeholder)
      </h1>

      <button
        onClick={handleLogout}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}