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
    <div className="min-h-screen bg-stone-50">

      <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">
        <p className="text-sm text-stone-500">
          Communication
        </p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Announcements
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Manage announcements shown to customers.
        </p>
      </header>


      <main className="p-6 lg:p-8">

        <div className="mb-6 flex justify-end">
          <button
            className="rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white"
          >
            + New Announcement
          </button>
        </div>


        <div className="grid gap-5 md:grid-cols-2">

          {announcements.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
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