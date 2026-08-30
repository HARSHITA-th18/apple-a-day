import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Beverages",
    price: "",
    available: true,
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "menu"),
      (snapshot) => {
        const items = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setMenuItems(items);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching menu items: ", err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleToggleStock = async (itemId, currentAvailability) => {
    try {
      const itemRef = doc(db, "menu", itemId);
      await updateDoc(itemRef, { available: !currentAvailability });
    } catch (err) {
      console.error("Error toggling stock status: ", err);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;

    try {
      await addDoc(collection(db, "menu"), {
        name: newItem.name,
        category: newItem.category,
        price: Number(newItem.price),
        available: newItem.available,
      });
      setNewItem({ name: "", category: "Beverages", price: "", available: true });
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error adding item: ", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto bg-[#fbf9f5] min-h-screen">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-bold text-stone-900">Menu & Stock Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#1a382b] text-white rounded-lg text-sm font-semibold hover:bg-[#274c3b] shadow-sm transition-colors"
        >
          + Add New Item
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-500 font-medium">Loading menu...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#e6e1d7] rounded-xl p-4 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-lg">{item.name}</h3>
                  <span className="text-xs font-semibold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-stone-700 font-medium text-sm">₹{item.price}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                    item.available !== false
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {item.available !== false ? "In Stock" : "Out of Stock"}
                </span>

                <button
                  type="button"
                  onClick={() => handleToggleStock(item.id, item.available !== false)}
                  className="px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 border border-stone-300 rounded-lg hover:bg-stone-200 transition-colors"
                >
                  Toggle Stock
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={handleAddItem}
            className="bg-white p-6 rounded-xl border border-stone-200 shadow-xl max-w-sm w-full space-y-4"
          >
            <h2 className="text-lg font-bold text-stone-900">Add Menu Item</h2>
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg text-sm bg-stone-50 focus:outline-none"
              required
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg text-sm bg-stone-50 focus:outline-none"
              required
            />
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg text-sm bg-stone-50 focus:outline-none"
            >
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Meals">Meals</option>
              <option value="Desserts">Desserts</option>
            </select>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 bg-stone-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1a382b] rounded-lg"
              >
                Save Item
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}