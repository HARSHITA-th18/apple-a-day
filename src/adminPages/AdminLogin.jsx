import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    // QUICK DEMO BYPASS: Route straight to admin panel without calling Firebase
    navigate("/admin")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">
          Apple A Day
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Admin Login
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin;