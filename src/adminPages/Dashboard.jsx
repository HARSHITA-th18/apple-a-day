import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeOrders: 0,
    completedOrders: 0,
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
      let revenue = 0;
      let active = 0;
      let completed = 0;

      snapshot.docs.forEach((docItem) => {
        const data = docItem.data();
        const amt = Number(data.total || data.totalAmount || 0);
        revenue += amt;

        if (data.status === "COMPLETED") {
          completed += 1;
        } else {
          active += 1;
        }
      });

      setStats({
        totalRevenue: revenue,
        activeOrders: active,
        completedOrders: completed,
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto bg-[#fbf9f5] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">Café Analytics & Metrics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-[#e6e1d7] rounded-xl p-5 shadow-sm space-y-1">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Total Revenue</p>
          <p className="text-2xl font-bold text-emerald-800">₹{stats.totalRevenue}</p>
        </div>

        <div className="bg-white border border-[#e6e1d7] rounded-xl p-5 shadow-sm space-y-1">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Active Orders</p>
          <p className="text-2xl font-bold text-sky-800">{stats.activeOrders}</p>
        </div>

        <div className="bg-white border border-[#e6e1d7] rounded-xl p-5 shadow-sm space-y-1">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Completed Orders</p>
          <p className="text-2xl font-bold text-stone-800">{stats.completedOrders}</p>
        </div>
      </div>
    </div>
  );
}