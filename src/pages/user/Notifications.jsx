import React from "react";

const notifications = [
  {
    id: 1,
    icon: "🎁",
    title: "Weekend Offer 🎉",
    message: "Get special offers on selected café items.",
    time: "10 min ago",
  },
  {
    id: 2,
    icon: "📢",
    title: "Café Timing Update",
    message: "Apple A Day will remain open until 10 PM today.",
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: "📦",
    title: "Order Update 📦",
    message: "Your order has been accepted by the café.",
    time: "2 hours ago",
  },
];

function Notifications() {
  return (
    <div className="min-h-screen bg-[#fff8ef] px-6 py-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <h1 className="text-3xl font-bold text-gray-800">
          Notifications
        </h1>

        <p className="text-gray-500 mt-2">
          Offers, announcements and order updates.
        </p>


        {/* Notifications */}

        <div className="mt-8 space-y-4">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="flex items-start gap-5">

                {/* Icon */}

                <div className="text-3xl">
                  {notification.icon}
                </div>


                {/* Content */}

                <div className="flex-1">

                  <h2 className="font-bold text-lg text-gray-900">
                    {notification.title}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {notification.message}
                  </p>

                  <p className="text-sm text-gray-400 mt-3">
                    {notification.time}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Notifications;
