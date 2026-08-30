import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const liveOrders = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        }));
        setOrders(liveOrders);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching live orders: ", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: newStatus });
    } catch (err) {
      console.error("Failed to update status: ", err);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "PLACED":
      case "Pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            ⏳ Placed
          </span>
        );
      case "ACCEPTED":
      case "Preparing":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-sky-50 text-sky-800 border border-sky-200">
            👨‍🍳 Preparing
          </span>
        );
      case "READY":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            ✅ Ready
          </span>
        );
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700 border border-stone-200">
            🏁 Completed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700">
            {status}
          </span>
        );
    }
  };

  const filteredOrders = orders.filter((order) => {
    const customer = order.customerName || order.userId || "";
    const matchesSearch =
      customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.token && order.token.includes(searchTerm)) ||
      order.id.includes(searchTerm);
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto bg-[#fbf9f5] min-h-screen">
      <div className="text-center py-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Live Order Management
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#e6e1d7] shadow-sm">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search by customer or token..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#f4efe6] border border-[#e6e1d7] rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1a382b]"
          />
          <span className="absolute left-3 top-2 text-stone-400 text-base">🔍</span>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
            Filter Status:
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2 bg-sky-50 border border-sky-200 text-sky-950 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer shadow-sm"
          >
            <option value="All">All Orders</option>
            <option value="PLACED">Placed</option>
            <option value="ACCEPTED">Preparing</option>
            <option value="READY">Ready</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-500 font-medium">
          Loading live orders from database...
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-12 text-stone-500 font-medium">
          No orders found.
        </div>
      ) : (
        <div className="space-y-5">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-[#e6e1d7] rounded-xl p-4 sm:p-5 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#1a382b] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {(order.customerName || "U").charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-base flex items-center gap-2">
                      {order.customerName || "Customer"}
                      <span className="text-xs font-normal text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {order.token || `#${order.id.slice(0, 5)}`}
                      </span>
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Type: <strong className="capitalize">{order.orderType || "Pickup"}</strong>
                    </p>
                  </div>
                </div>
                <div>{getStatusBadge(order.status)}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#fcfbfa] p-3.5 rounded-lg border border-[#f0ece1]">
                <div className="md:col-span-8 space-y-1.5">
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Ordered Items
                  </p>
                  {order.items && order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm text-stone-800 bg-white px-3 py-1.5 rounded border border-stone-100"
                    >
                      <span className="font-medium flex items-center gap-2">
                        🔹 {item.name}
                      </span>
                      <span className="text-xs text-stone-500 font-mono">
                        {item.quantity || item.qty || 1}x • ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-4 flex md:flex-col items-end justify-between md:justify-center gap-2 border-t md:border-t-0 md:border-l border-stone-200 pt-2 md:pt-0 md:pl-4">
                  <span className="text-xs text-stone-500">Total Amount</span>
                  <span className="text-lg font-bold text-stone-900">
                    ₹{order.total || order.totalAmount || 0}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <div className="text-xs text-stone-600 font-medium">
                  📍 Location: {order.deliveryLocation || "Campus Counter"}
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  {order.status === "PLACED" && (
                    <button
                      type="button"
                      onClick={() => handleUpdateStatus(order.id, "ACCEPTED")}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#1a382b] rounded-lg hover:bg-[#274c3b] transition-colors"
                    >
                      👨‍🍳 Accept & Prepare
                    </button>
                  )}
                  {order.status === "ACCEPTED" && (
                    <button
                      type="button"
                      onClick={() => handleUpdateStatus(order.id, "READY")}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                    >
                      ✅ Mark Ready
                    </button>
                  )}
                  {order.status === "READY" && (
                    <button
                      type="button"
                      onClick={() => handleUpdateStatus(order.id, "COMPLETED")}
                      className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-200 rounded-lg hover:bg-stone-300 transition-colors"
                    >
                      🏁 Mark Completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}