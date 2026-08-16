import { useState } from "react";

function CabinBooking() {
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    duration: "1 Hour",
    people: "2",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!booking.date || !booking.time) {
      alert("Please select date and time.");
      return;
    }

    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">

      <div className="max-w-5xl mx-auto">

        {/* PAGE HEADING */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🛋️</div>

          <h1 className="text-4xl font-bold text-gray-800">
            Apple A Day Cabin
          </h1>

          <p className="text-gray-500 mt-2">
            Book our private cabin for your friends and group.
          </p>
        </div>

        {/* CABIN INFORMATION */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">

          <div className="bg-green-600 text-white p-6">
            <h2 className="text-2xl font-bold">
              Private Cabin
            </h2>

            <p className="mt-1 text-green-100">
              A comfortable space to enjoy your food together.
            </p>
          </div>

          <div className="p-6 grid sm:grid-cols-3 gap-6">

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">
                👥
              </div>

              <h3 className="font-semibold text-gray-800">
                Capacity
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Up to 8 people
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">
                ⏰
              </div>

              <h3 className="font-semibold text-gray-800">
                Duration
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                1–3 Hours
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">
                📍
              </div>

              <h3 className="font-semibold text-gray-800">
                Location
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Apple A Day Café
              </p>
            </div>

          </div>
        </div>

        {/* BOOKING SUCCESS */}
        {booked ? (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center max-w-2xl mx-auto">

            <div className="text-6xl mb-4">
              ✅
            </div>

            <h2 className="text-2xl font-bold text-green-600">
              Cabin Booking Confirmed!
            </h2>

            <p className="text-gray-500 mt-2">
              Your cabin has been successfully reserved.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mt-6 text-left space-y-3">

              <p>
                <span className="font-semibold">
                  Date:
                </span>{" "}
                {booking.date}
              </p>

              <p>
                <span className="font-semibold">
                  Time:
                </span>{" "}
                {booking.time}
              </p>

              <p>
                <span className="font-semibold">
                  Duration:
                </span>{" "}
                {booking.duration}
              </p>

              <p>
                <span className="font-semibold">
                  Number of People:
                </span>{" "}
                {booking.people}
              </p>

            </div>

            <button
              onClick={() => {
                setBooked(false);

                setBooking({
                  date: "",
                  time: "",
                  duration: "1 Hour",
                  people: "2",
                });
              }}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Make Another Booking
            </button>

          </div>
        ) : (

          /* BOOKING FORM */
          <form
            onSubmit={handleBooking}
            className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto"
          >

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Book the Cabin
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* DATE */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Select Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={booking.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* TIME */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Select Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={booking.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* DURATION */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Duration
                </label>

                <select
                  name="duration"
                  value={booking.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="1 Hour">
                    1 Hour
                  </option>

                  <option value="2 Hours">
                    2 Hours
                  </option>

                  <option value="3 Hours">
                    3 Hours
                  </option>
                </select>
              </div>

              {/* PEOPLE */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Number of People
                </label>

                <select
                  name="people"
                  value={booking.people}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                </select>
              </div>

            </div>

            {/* BOOK BUTTON */}
            <button
              type="submit"
              className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition"
            >
              🛋️ Confirm Cabin Booking
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default CabinBooking;