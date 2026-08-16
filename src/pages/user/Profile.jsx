import { useEffect, useState } from "react";

function Profile() {

  const [orders, setOrders] = useState([]);

  const [user] = useState({
    name: "Student",
    email: "student@example.com",
    phone: "9876543210",
  });

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(saved);

  }, []);


  // MONTHLY SPENDING

  const monthlySpending = {};

  orders.forEach((order) => {

    const date = new Date(order.createdAt);

    const month = date.toLocaleString("en-IN", {
      month: "long",
      year: "numeric",
    });

    if (!monthlySpending[month]) {
      monthlySpending[month] = 0;
    }

    monthlySpending[month] += order.totalAmount;

  });


  const totalSpent = orders.reduce(
    (total, order) =>
      total + Number(order.totalAmount),
    0
  );


  return (
    <div className="min-h-screen bg-[#fff8ef] px-5 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        {/* PROFILE CARD */}

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-4xl">
              👤
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                {user.name}
              </h2>

              <p className="text-gray-500">
                {user.email}
              </p>

              <p className="text-gray-500">
                {user.phone}
              </p>

            </div>

          </div>

        </div>


        {/* SPENDING SUMMARY */}

        <div className="grid md:grid-cols-3 gap-5 mt-6">

          <div className="bg-white p-6 rounded-xl border">

            <p className="text-gray-500">
              Total Orders
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {orders.length}
            </h2>

          </div>


          <div className="bg-white p-6 rounded-xl border">

            <p className="text-gray-500">
              Total Spending
            </p>

            <h2 className="text-3xl font-bold text-orange-600 mt-2">
              ₹{totalSpent}
            </h2>

          </div>


          <div className="bg-white p-6 rounded-xl border">

            <p className="text-gray-500">
              Average Order
            </p>

            <h2 className="text-3xl font-bold mt-2">

              ₹
              {orders.length
                ? Math.round(
                    totalSpent / orders.length
                  )
                : 0}

            </h2>

          </div>

        </div>


        {/* MONTHLY SPENDING */}

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-6">

          <h2 className="text-xl font-bold">
            📊 Monthly Spending
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Your café spending month by month.
          </p>


          <div className="space-y-4 mt-6">

            {Object.keys(monthlySpending).length ===
            0 ? (

              <p className="text-gray-500">
                No spending data available yet.
              </p>

            ) : (

              Object.entries(monthlySpending).map(
                ([month, amount]) => (

                  <div
                    key={month}
                    className="flex justify-between items-center bg-gray-50 rounded-lg p-4"
                  >

                    <span className="font-medium">
                      {month}
                    </span>

                    <span className="font-bold text-orange-600">
                      ₹{amount}
                    </span>

                  </div>

                )
              )

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;