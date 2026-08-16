import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../firebase/auth";
import { getUserProfile } from "../../firebase/firestore";
import { setUser } from "../../redux/slices/authSlice";
import Logo from "../../components/common/Logo";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await loginUser(formData.email, formData.password);
      const authUser = userCredential.user;

      const profile = await getUserProfile(authUser.uid);

      if (!profile) {
        setError("No profile found for this account.");
        setLoading(false);
        return;
      }

      const fullUser = {
        uid: authUser.uid,
        email: authUser.email,
        name: profile.name,
        phone: profile.phone,
        role: profile.role,
      };

      dispatch(setUser(fullUser));

      if (profile.role === "admin") {
        navigate("/admin");
      } else if (profile.role === "deliveryAgent") {
        navigate("/delivery");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        setError("Incorrect email or password.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dcefdb] px-4">
      <div className="w-full max-w-sm bg-[#dcefdb] rounded-3xl p-8 shadow-lg">
        <Logo />
        <h1 className="text-3xl font-semibold text-center text-[#2d4a2d] mb-1">
          Login
        </h1>
        <p className="text-center text-[#5a7a5a] mb-6">
          Welcome back
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="username@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#93a98d] placeholder-[#f0f5ee] text-white rounded-full px-5 py-3 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-[#93a98d] placeholder-[#f0f5ee] text-white rounded-full px-5 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2e5339] text-white py-3 rounded-full font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-[#3d5c3d] mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}