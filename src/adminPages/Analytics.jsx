import { dummyDashboardStats } from "../data/adminDummyData"

function Analytics() {
  const stats = dummyDashboardStats

  return (
    <div className="min-h-screen bg-stone-50">

      <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">

        <p className="text-sm text-stone-500">
          Business Overview
        </p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Analytics
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Simple overview of café performance.
        </p>

      </header>


      <main className="p-6 lg:p-8">

        {/* Stats */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <Stat
            title="Total Orders"
            value={stats.totalOrders}
          />

          <Stat
            title="Today's Revenue"
            value={`₹${stats.todaysRevenue}`}
          />

          <Stat
            title="Pending Orders"
            value={stats.pendingOrders}
          />

          <Stat
            title="Completed Orders"
            value={stats.completedOrders}
          />

          <Stat
            title="Cancelled Orders"
            value={stats.cancelledOrders}
          />

          <Stat
            title="Café Room Bookings"
            value={stats.cafeRoomBookings}
          />

        </div>


        {/* Order Summary */}

        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

          <h2 className="font-semibold text-stone-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-5">

            <Progress
              label="Completed"
              value={stats.completedOrders}
              percent={70}
            />

            <Progress
              label="Preparing"
              value={stats.preparingOrders}
              percent={40}
            />

            <Progress
              label="Pending"
              value={stats.pendingOrders}
              percent={25}
            />

            <Progress
              label="Cancelled"
              value={stats.cancelledOrders}
              percent={10}
            />

          </div>

        </div>

      </main>

    </div>
  )
}


function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

      <p className="text-sm text-stone-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-stone-900">
        {value}
      </p>

    </div>
  )
}


function Progress({ label, value, percent }) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span className="text-stone-600">
          {label}
        </span>

        <span className="font-semibold text-stone-900">
          {value}
        </span>

      </div>

      <div className="h-3 rounded-full bg-stone-100">

        <div
          className="h-3 rounded-full bg-stone-800"
          style={{ width: `${percent}%` }}
        />

      </div>

    </div>
  )
}

export default Analytics