import { useState } from "react"
import { dummyAnnouncements } from "../data/adminDummyData"

function Announcements() {
  const [announcements, setAnnouncements] = useState(
    dummyAnnouncements
  )

  const toggleStatus = (id) => {
    setAnnouncements((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "ACTIVE"
                  ? "INACTIVE"
                  : "ACTIVE",
            }
          : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#fbf9f5]">

      <header className="border-b border-[#e6e1d7] bg-[#f4efe6] px-6 py-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526b59]">
          Communication
        </p>

        <h1 className="mt-1 text-3xl font-bold text-[#1a382b]">
          Announcements
        </h1>

        <p className="mt-2 text-sm font-medium text-stone-600">
          Manage announcements shown to customers.
        </p>
      </header>


      <main className="p-6 lg:p-8">

        <div className="mb-6 flex justify-end">
          <button
            className="rounded-lg bg-[#1a382b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#274c3b]"
          >
            + New Announcement
          </button>
        </div>


        <div className="grid gap-5 md:grid-cols-2">

          {announcements.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border border-[#e6e1d7] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="font-semibold text-stone-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    {item.message}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {item.status}
                </span>

              </div>


              <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">

                <span className="text-xs text-stone-400">
                  {item.date}
                </span>

                <button
                  onClick={() => toggleStatus(item.id)}
                  className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                >
                  Change Status
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>
    </div>
  )
}

export default Announcements