import { Navigate, Route, Routes } from "react-router-dom"

import AdminLayout from "../layouts/AdminLayout"

import Dashboard from "../adminPages/Dashboard"
import Orders from "../adminPages/Orders"
import Queue from "../adminPages/Queue"
import MenuManagement from "../adminPages/MenuManagement"
import CafeRoom from "../adminPages/CafeRoom"
import Announcements from "../adminPages/Announcements"
import Reviews from "../adminPages/Reviews"
import Analytics from "../adminPages/Analytics"
import AdminLogin from "../adminPages/AdminLogin"

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route
          path="orders"
          element={<Orders />}
        />

        <Route
          path="queue"
          element={<Queue />}
        />

        <Route
          path="menu"
          element={<MenuManagement />}
        />

        <Route
          path="cafe-room"
          element={<CafeRoom />}
        />

        <Route
          path="announcements"
          element={<Announcements />}
        />

        <Route
          path="reviews"
          element={<Reviews />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />
      </Route>

      {/* Redirect all unknown paths directly to login for demo start */}
      <Route
        path="*"
        element={
          <Navigate
            to="/admin/login"
            replace
          />
        }
      />

    </Routes>
  )
}

export default AppRoutes;