import { NavLink, Outlet, useNavigate } from "react-router-dom"

function AdminLayout() {
  const navigate = useNavigate()
  const handleLogout = () => navigate("/admin/login")
  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Smart Queue", path: "/admin/queue" },
    { name: "Menu Management", path: "/admin/menu" },
    { name: "Café Room", path: "/admin/cafe-room" },
    { name: "Announcements", path: "/admin/announcements" },
    { name: "Reviews", path: "/admin/reviews" },
    { name: "Analytics", path: "/admin/analytics" },
  ]
  const groups = [
    { label: "Overview", items: navItems.slice(0, 1) },
    { label: "Operations", items: navItems.slice(1, 5) },
    { label: "Engagement", items: navItems.slice(5) },
  ]

  return <div className="min-h-screen bg-[#fbf9f5] text-stone-800">
    <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-[#10291f] bg-[#1a382b] text-stone-200 lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#274c3b] text-2xl ring-1 ring-white/10">🍏</div><div><h1 className="text-xl font-extrabold text-white">Apple A Day</h1><span className="mt-1 inline-flex rounded-full border border-[#9bc49f]/30 bg-[#9bc49f]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#cde5cb]">Smart Campus Café</span></div></div></div>
      <nav className="flex-1 overflow-y-auto px-4 py-6">{groups.map((group) => <div key={group.label} className="mb-7"><p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b2c6b6]">{group.label}</p><div className="space-y-1">{group.items.map((item) => <NavLink key={item.path} to={item.path} end={item.path === "/admin"} className={({ isActive }) => `group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200 ease-in-out ${isActive ? "bg-[#274c3b] text-white" : "text-[#c4d0c6] hover:bg-white/5 hover:text-white"}`}>{({ isActive }) => <><span className={`absolute inset-y-1 left-0 w-[3px] ${isActive ? "bg-emerald-400" : "bg-transparent"}`} /><span className={isActive ? "text-[#cde5cb]" : "text-[#9eb3a3]"}>{iconFor(item.path)}</span><span>{item.name}</span></>}</NavLink>)}</div></div>)}</nav>
      <div className="border-t border-white/10 px-4 py-5"><button onClick={handleLogout} className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-[#d6e0d7] transition hover:bg-white/10 hover:text-white"><span>Logout</span><span>↗</span></button></div>
    </aside>
    <div className="flex min-h-screen flex-col lg:pl-72"><header className="sticky top-0 z-20 flex min-h-16 items-center justify-between gap-4 border-b border-[#e6e1d7] bg-[#faf8f5] px-5 py-3 lg:px-8"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a382b] text-xl text-white">🍏</span><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">Operations</p><h2 className="text-lg font-extrabold text-[#163a2a]">Apple A Day — Operations Hub</h2></div></div><div className="flex items-center gap-3"><span className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900 sm:inline-flex"><span className="h-2 w-2 rounded-full bg-emerald-500" />Open for Orders</span><div className="flex items-center gap-2 rounded-full border border-[#e6e1d7] bg-white py-1.5 pl-2 pr-3 shadow-sm"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a382b] text-xs font-bold text-white">A</div><div className="hidden leading-tight sm:block"><div className="text-sm font-bold text-stone-900">Welcome, Admin</div><span className="mt-1 inline-flex rounded-full bg-[#e8f1e5] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#286041]">Administrator</span></div></div></div></header><main className="flex-1"><Outlet /></main></div>
  </div>
}

function iconFor(path) {
  const common = "h-4 w-4"
  if (path === "/admin") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg>
  if (path === "/admin/orders") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M6 5h12v14H6zM9 9h6M9 13h6" /></svg>
  if (path === "/admin/queue") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M6 18h12M8 14V8M12 14V5M16 14v-4" /></svg>
  if (path === "/admin/menu") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M5 5h14v14H5zM8 9h8M8 13h5" /></svg>
  if (path === "/admin/cafe-room") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M4 19V6h16v13M8 10h2M8 14h8M4 19h16" /></svg>
  if (path === "/admin/announcements") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m4 12 14-6v12L4 12ZM4 12v5" /><path d="M18 10a3 3 0 0 1 0 4" /></svg>
  if (path === "/admin/reviews") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m12 4 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 4Z" /></svg>
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M5 19V9M12 19V5M19 19v-7M3 19h18" /></svg>
}

export default AdminLayout
