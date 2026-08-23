import { NavLink, Outlet, useNavigate } from "react-router-dom"
// import { logoutAdmin } from "../services/authService"

function AdminLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // QUICK DEMO BYPASS: Route straight back to login page
    navigate("/admin/login")
  }

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "⌂",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "▣",
    },
    {
      name: "Queue",
      path: "/admin/queue",
      icon: "☷",
    },
    {
      name: "Menu",
      path: "/admin/menu",
      icon: "☕",
    },
    {
      name: "Café Room",
      path: "/admin/cafe-room",
      icon: "⌂",
    },
    {
      name: "Announcements",
      path: "/admin/announcements",
      icon: "◉",
    },
    {
      name: "Reviews",
      path: "/admin/reviews",
      icon: "★",
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: "▥",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Sidebar */}

      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-stone-200 bg-white lg:block">

        {/* Logo */}

        <div className="flex h-20 items-center border-b border-stone-200 px-6">

          <div>
            <h1 className="text-lg font-bold text-stone-900">
              Apple A Day
            </h1>

            <p className="text-xs text-stone-400">
              Admin Panel
            </p>
          </div>

        </div>


        {/* Navigation */}

        <nav className="p-4">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
            Management
          </p>

          <div className="space-y-1">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-stone-900 text-white"
                      : "text-stone-600 hover:bg-stone-100"
                  }`
                }
              >

                <span className="w-5 text-center">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </NavLink>

            ))}

          </div>

        </nav>


        {/* Bottom */}

        <div className="absolute bottom-0 w-full border-t border-stone-200 p-4">

          <div className="flex items-center justify-between rounded-xl bg-stone-50 p-3">

            <div>
              <p className="text-xs text-stone-400">
                Logged in as
              </p>

              <p className="mt-1 text-sm font-semibold text-stone-800">
                Admin
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-lg px-2 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            >
              Logout
            </button>

          </div>

        </div>

      </aside>


      {/* Main area */}

      <div className="lg:pl-64">

        {/* Top Bar */}

        <div className="flex h-16 items-center justify-between border-b border-stone-200 bg-white px-6">

          <div>
            <p className="text-sm font-semibold text-stone-800">
              Admin Dashboard
            </p>

            <p className="hidden text-xs text-stone-400 sm:block">
              Manage your café
            </p>
          </div>


          <div className="flex items-center gap-4">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-stone-800">
                Administrator
              </p>

              <p className="text-xs text-stone-400">
                admin@appleaday.com
              </p>
            </div>


            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
              A
            </div>

            {/* Top Bar Logout Button */}
            <button
              onClick={handleLogout}
              className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition"
            >
              Logout
            </button>

          </div>

        </div>


        {/* Page */}

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default AdminLayout;