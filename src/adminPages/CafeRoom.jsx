import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addBooking,
  confirmBooking,
  cancelBooking,
} from "../redux/bookingSlice"

function CafeRoom() {
  const bookings = useSelector((state) => state.bookings)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    startTime: "",
    endTime: "",
    guests: "",
  })

  const [message, setMessage] = useState("")

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "CONFIRMED").length,
    pending: bookings.filter((b) => b.status === "PENDING").length,
    cancelled: bookings.filter((b) => b.status === "CANCELLED").length,
  }

  const input =
    "w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-stone-500"

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setMessage("")

    if (Object.values(form).some((value) => !value)) {
      setMessage("Please fill all fields.")
      return
    }

    if (form.startTime >= form.endTime) {
      setMessage("End time must be after start time.")
      return
    }

    const busy = bookings.some(
      (b) =>
        b.date === form.date &&
        b.status !== "CANCELLED" &&
        form.startTime < b.endTime &&
        form.endTime > b.startTime
    )

    if (busy) {
      setMessage("Room is already booked at this time.")
      return
    }

    dispatch(
      addBooking({
        id: `CR-${Date.now()}`,
        date: form.date,
        startTime: form.startTime,
        endTime: form.endTime,
        guests: Number(form.guests),
        status: "PENDING",
        customer: {
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
      })
    )

    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      startTime: "",
      endTime: "",
      guests: "",
    })

    setMessage("Booking added successfully.")
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Header */}
      <header className="border-b border-stone-200 bg-white px-6 py-5 lg:px-8">
        <p className="text-xs text-stone-400">Café Services</p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Café Room
        </h1>

        <p className="text-sm text-stone-500">
          Manage private room bookings.
        </p>
      </header>

      <main className="grid gap-6 p-6 lg:grid-cols-3 lg:p-8">

        {/* ================= NEW BOOKING ================= */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-stone-900">
            New Booking
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Book the room for a customer.
          </p>

          <form onSubmit={submit} className="mt-5 space-y-3">

            <input
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Customer name"
              className={input}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={change}
              placeholder="Phone number"
              className={input}
            />

            <input
              name="email"
              value={form.email}
              onChange={change}
              placeholder="Customer email"
              type="email"
              className={input}
            />

            <div>
              <label className="mb-1 block text-xs text-stone-500">
                Booking date
              </label>

              <input
                name="date"
                value={form.date}
                onChange={change}
                type="date"
                className={input}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-stone-500">
                Booking time
              </label>

              <div className="grid grid-cols-2 gap-3">

                <input
                  name="startTime"
                  value={form.startTime}
                  onChange={change}
                  type="time"
                  className={input}
                />

                <input
                  name="endTime"
                  value={form.endTime}
                  onChange={change}
                  type="time"
                  className={input}
                />

              </div>
            </div>

            <input
              name="guests"
              value={form.guests}
              onChange={change}
              type="number"
              min="1"
              placeholder="Number of guests"
              className={input}
            />

            {message && (
              <p className="rounded-xl bg-stone-100 p-3 text-sm text-stone-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-stone-900 py-3 text-sm font-semibold text-white hover:bg-stone-700"
            >
              Add Booking
            </button>

          </form>
        </section>


        {/* ================= EXISTING BOOKINGS ================= */}
        <section className="lg:col-span-2">

          {/* Heading + Stats on RIGHT */}
          <div className="mb-4 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">

            <div>
              <h2 className="text-lg font-semibold text-stone-900">
                Existing Bookings
              </h2>

              <p className="text-sm text-stone-500">
                Manage current reservations.
              </p>
            </div>

            {/* Small stats */}
            <div className="flex flex-wrap gap-2">

              <div className="rounded-lg border bg-white px-3 py-2">
                <p className="text-[10px] text-stone-400">TOTAL</p>
                <p className="font-semibold">{stats.total}</p>
              </div>

              <div className="rounded-lg border bg-green-50 px-3 py-2">
                <p className="text-[10px] text-green-600">
                  CONFIRMED
                </p>
                <p className="font-semibold text-green-700">
                  {stats.confirmed}
                </p>
              </div>

              <div className="rounded-lg border bg-yellow-50 px-3 py-2">
                <p className="text-[10px] text-yellow-600">
                  PENDING
                </p>
                <p className="font-semibold text-yellow-700">
                  {stats.pending}
                </p>
              </div>

              <div className="rounded-lg border bg-red-50 px-3 py-2">
                <p className="text-[10px] text-red-600">
                  CANCELLED
                </p>
                <p className="font-semibold text-red-700">
                  {stats.cancelled}
                </p>
              </div>

            </div>
          </div>


          {/* Booking List */}
          <div className="space-y-4">

            {bookings.length === 0 && (
              <div className="rounded-2xl border bg-white p-8 text-center">
                <p className="text-sm text-stone-500">
                  No bookings available.
                </p>
              </div>
            )}

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  {/* Customer */}
                  <div>
                    <div className="flex items-center gap-2">

                      <h3 className="font-semibold text-stone-900">
                        {booking.customer.name}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          booking.status === "CONFIRMED"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status}
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-stone-500">
                      {booking.customer.phone}
                    </p>

                    <p className="text-sm text-stone-500">
                      {booking.customer.email}
                    </p>
                  </div>


                  {/* Date / Time / Guests */}
                  <div className="text-sm sm:text-right">

                    <p className="font-semibold text-stone-900">
                      {booking.date}
                    </p>

                    <p className="text-stone-500">
                      {booking.startTime} - {booking.endTime}
                    </p>

                    <p className="text-stone-500">
                      👥 {booking.guests} guests
                    </p>

                  </div>

                </div>


                {/* Buttons */}
                {booking.status !== "CANCELLED" && (
                  <div className="mt-4 flex gap-2 border-t border-stone-100 pt-4">

                    {booking.status === "PENDING" && (
                      <button
                        onClick={() =>
                          dispatch(confirmBooking(booking.id))
                        }
                        className="rounded-lg bg-green-100 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-200"
                      >
                        Confirm
                      </button>
                    )}

                    <button
                      onClick={() =>
                        dispatch(cancelBooking(booking.id))
                      }
                      className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Cancel
                    </button>

                  </div>
                )}

              </div>
            ))}

          </div>
        </section>

      </main>
    </div>
  )
}

export default CafeRoom;