import { Link } from "react-router-dom"
import {
  dummyDashboardStats,
  dummyOrders,
} from "../data/adminDummyData"

import PageHeader from "../components/PageHeader"
import StatCard from "../components/StatCard"
import StatusBadge from "../components/StatusBadge"

function Dashboard() {
  const stats = dummyDashboardStats

  const recentOrders = dummyOrders.slice(0, 5)

  return (
    <div className="min-h-screen bg-stone-50">

      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Welcome back. Here's what's happening today."
      />


      <main className="p-6 lg:p-8">

        {/* Stats */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Orders"
            value={stats.totalOrders}
            description="Today's orders"
          />

          <StatCard
            title="Revenue"
            value={`₹${stats.todaysRevenue}`}
            description="Today's revenue"
          />

          <StatCard
            title="Pending"
            value={stats.pendingOrders}
            description="Orders waiting"
          />

          <StatCard
            title="Room Bookings"
            value={stats.cafeRoomBookings}
            description="Café room bookings"
          />

        </div>


        {/* Main grid */}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Recent Orders */}

          <div className="rounded-2xl border border-stone-200 bg-white shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between border-b border-stone-100 p-5">

              <div>
                <h2 className="font-semibold text-stone-900">
                  Recent Orders
                </h2>

                <p className="mt-1 text-xs text-stone-400">
                  Latest customer orders
                </p>
              </div>

              <Link
                to="/admin/orders"
                className="text-xs font-semibold text-stone-700 hover:underline"
              >
                View all
              </Link>

            </div>


            <div className="divide-y divide-stone-100">

              {recentOrders.map((order) => (

                <div
                  key={order.id}
                  className="flex items-center justify-between gap-4 p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-900 text-xs font-bold text-white">
                      {order.token}
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-stone-900">
                        {order.customer.name}
                      </p>

                      <p className="text-xs text-stone-400">
                        {order.id}
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <span className="hidden text-sm font-semibold text-stone-900 sm:block">
                      ₹{order.total}
                    </span>

                    <StatusBadge status={order.status} />

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Quick Actions */}

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <h2 className="font-semibold text-stone-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-xs text-stone-400">
              Frequently used sections
            </p>


            <div className="mt-5 space-y-2">

              <QuickAction
                title="Manage Orders"
                path="/admin/orders"
              />

              <QuickAction
                title="Update Menu"
                path="/admin/menu"
              />

              <QuickAction
                title="Check Café Room"
                path="/admin/cafe-room"
              />

              <QuickAction
                title="View Reviews"
                path="/admin/reviews"
              />

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}


function QuickAction({ title, path }) {
  return (
    <Link
      to={path}
      className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50"
    >
      <span>{title}</span>

      <span>→</span>
    </Link>
  )
}

export default Dashboard;