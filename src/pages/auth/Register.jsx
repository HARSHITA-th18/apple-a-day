import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../../firebase/auth";
import { createUserProfile } from "../../firebase/firestore";
import Logo from "../../components/common/Logo";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await registerUser(
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await createUserProfile(user.uid, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: "user", // always "user" — admin/delivery are assigned manually
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Registration failed. Please try again.");
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
          Register
        </h1>
        <p className="text-center text-[#5a7a5a] mb-6">
          Create new account
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#93a98d] placeholder-[#f0f5ee] text-white rounded-full px-5 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="username@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#93a98d] placeholder-[#f0f5ee] text-white rounded-full px-5 py-3 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-[#93a98d] placeholder-[#f0f5ee] text-white rounded-full px-5 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2e5339] text-white py-3 rounded-full font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-[#3d5c3d] mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}