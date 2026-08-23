import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateOrderStatus } from "../redux/orderSlice"

function Orders() {
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch()
  const [filter, setFilter] = useState("ALL")
  const [search, setSearch] = useState("")

  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      filter === "ALL" || order.status === filter

    const searchText = search.toLowerCase()

    const matchesSearch =
      order.id.toLowerCase().includes(searchText) ||
      order.customer.name.toLowerCase().includes(searchText) ||
      order.customer.phone.includes(searchText)

    return matchesFilter && matchesSearch
  })

    const updateStatus = (orderId, newStatus) => {
    dispatch(
        updateOrderStatus({
        id: orderId,
        status: newStatus,
        })
    )
    }

  const getStatusStyle = (status) => {
    if (status === "COMPLETED") {
      return "bg-green-100 text-green-700"
    }

    if (status === "PREPARING") {
      return "bg-blue-100 text-blue-700"
    }

    if (status === "READY") {
      return "bg-purple-100 text-purple-700"
    }

    if (status === "ACCEPTED") {
      return "bg-blue-100 text-blue-700"
    }

    if (status === "CANCELLED") {
      return "bg-red-100 text-red-700"
    }

    return "bg-yellow-100 text-yellow-700"
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Header */}

      <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">
        <p className="text-sm text-stone-500">
          Order Management
        </p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Incoming Orders
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          View and manage customer orders.
        </p>
      </header>


      <main className="p-6 lg:p-8">

        {/* Search and filter */}

        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 md:flex-row">

          <input
            type="text"
            placeholder="Search order, customer or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-stone-500"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm outline-none"
          >
            <option value="ALL">All Orders</option>
            <option value="PLACED">Placed</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="PREPARING">Preparing</option>
            <option value="READY">Ready</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

        </div>


        {/* Orders */}

        <div className="space-y-4">

          {filteredOrders.length === 0 ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center">
              <p className="font-semibold text-stone-900">
                No orders found
              </p>

              <p className="mt-1 text-sm text-stone-500">
                Try changing your search or filter.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => (

              <div
                key={order.id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >

                {/* Order top */}

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-sm font-bold text-white">
                      {order.token}
                    </div>

                    <div>
                      <h2 className="font-semibold text-stone-900">
                        {order.id}
                      </h2>

                      <p className="text-sm text-stone-500">
                        {order.customer.name}
                      </p>
                    </div>

                  </div>


                  <div className="flex items-center gap-3">

                    <span className="text-lg font-bold text-stone-900">
                      ₹{order.total}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                  </div>

                </div>


                {/* Customer */}

                <div className="mt-5 grid gap-3 border-t border-stone-100 pt-5 md:grid-cols-3">

                  <div>
                    <p className="text-xs text-stone-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-stone-700">
                      {order.customer.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-stone-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-stone-700">
                      {order.customer.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-stone-400">
                      Order Type
                    </p>

                    <p className="mt-1 text-sm text-stone-700">
                      {order.fulfilment}
                    </p>
                  </div>

                </div>


                {/* Items */}

                <div className="mt-5 border-t border-stone-100 pt-5">

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Items
                  </p>

                  <div className="space-y-2">

                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-stone-600">
                          {item.name} × {item.quantity}
                        </span>

                        <span className="font-medium text-stone-900">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>


                {/* Actions */}

                <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-100 pt-5">

                  {order.status === "PLACED" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "ACCEPTED")
                      }
                      className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-700"
                    >
                      Accept Order
                    </button>
                  )}

                  {order.status === "ACCEPTED" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "PREPARING")
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                    >
                      Start Preparing
                    </button>
                  )}

                  {order.status === "PREPARING" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "READY")
                      }
                      className="rounded-lg bg-purple-600 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-500"
                    >
                      Mark Ready
                    </button>
                  )}

                  {order.status === "READY" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "COMPLETED")
                      }
                      className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-500"
                    >
                      Complete Order
                    </button>
                  )}

                  {order.status !== "COMPLETED" &&
                    order.status !== "CANCELLED" && (
                      <button
                        onClick={() =>
                          updateStatus(order.id, "CANCELLED")
                        }
                        className="rounded-lg border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                      >
                        Cancel
                      </button>
                    )}

                </div>

              </div>

            ))
          )}

        </div>

      </main>
    </div>
  )
}

export default Orders