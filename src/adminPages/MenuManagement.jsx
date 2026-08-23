import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addMenuItem,
  toggleMenuAvailability,
} from "../redux/menuSlice"
import PageHeader from "../components/PageHeader"

function MenuManagement() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.menu)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ALL")
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  })

  const categories = [
    "ALL",
    ...new Set(items.map((item) => item.category)),
  ]

  const filteredItems = items.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const categoryMatch =
      category === "ALL" || item.category === category

    return searchMatch && categoryMatch
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.category || !form.price || !form.stock) {
      alert("Please fill all fields")
      return
    }

    dispatch(
      addMenuItem({
        id: `MENU${Date.now()}`,
        name: form.name,
        description: "New menu item",
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        available: Number(form.stock) > 0,
        image: "",
      })
    )

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
    })

    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-stone-50">

      <PageHeader
        eyebrow="Café Management"
        title="Menu Management"
        description="Manage menu items and their availability."
      />

      <main className="p-6 lg:p-8">

        {/* Search */}
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 md:flex-row">

          <input
            placeholder="Search menu item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            + Add Item
          </button>

        </div>

        {/* Add Item Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-6 rounded-2xl border border-stone-200 bg-white p-5"
          >
            <h2 className="mb-4 font-semibold text-stone-900">
              Add New Menu Item
            </h2>

            <div className="grid gap-3 md:grid-cols-4">

              <input
                placeholder="Item name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
              />

              <input
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
              />

              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
                className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
              />

              <input
                type="number"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
                className="rounded-xl border border-stone-200 px-4 py-2.5 text-sm"
              />

            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Add Item
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-stone-200 px-5 py-2.5 text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Items */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-stone-900">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-xs text-stone-400">
                    {item.category}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">

                <div>
                  <p className="text-lg font-bold">
                    ₹{item.price}
                  </p>

                  <p className="text-xs text-stone-400">
                    Stock: {item.stock}
                  </p>
                </div>

                <button
                  onClick={() =>
                    dispatch(toggleMenuAvailability(item.id))
                  }
                  className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-semibold"
                >
                  {item.available
                    ? "Mark Unavailable"
                    : "Make Available"}
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  )
}

export default MenuManagement;