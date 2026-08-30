import { Navigate, Route, Routes } from "react-router-dom"

import ProtectedRoute from "../components/auth/ProtectedRoute"
import AdminLayout from "../layouts/AdminLayout"

import Dashboard from "../adminPages/Dashboard"
import Orders from "../adminPages/Orders"
import Queue from "../adminPages/Queue"
import MenuManagement from "../adminPages/MenuManagement"
import CafeRoom from "../adminPages/CafeRoom"
import Announcements from "../adminPages/Announcements"
import Reviews from "../adminPages/Reviews"
import Analytics from "../adminPages/Analytics"
import Delivery from "../adminPages/Delivery"

import AdminLogin from "../adminPages/AdminLogin"

import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Unauthorized from "../pages/auth/Unauthorized"
import Home from "../pages/user/Home"

function AppRoutes() {
  return (
    <Routes>

      {/* Student authentication */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />


      {/* Student */}
      <Route
        path="/home"
        element={
          <ProtectedRoute
            allowedRoles={["user", "admin", "deliveryAgent"]}
          >
            <Home />
          </ProtectedRoute>
        }
      />


      {/* Delivery */}
      <Route
        path="/delivery"
        element={
          <ProtectedRoute allowedRoles={["deliveryAgent"]}>
            <Delivery />
          </ProtectedRoute>
        }
      />


      {/* Admin login */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />


      {/* Admin panel */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRoles={["admin"]}
            fallbackPath="/admin/login"
          >
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

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


      {/* Unknown route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  )
}

export default AppRoutes