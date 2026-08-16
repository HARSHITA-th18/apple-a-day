import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(saved);
  }, []);

  const getStatusStep = (status) => {
    const steps = [
      "Pending",
      "Accepted",
      "Preparing",
      "Ready",
      "Out for Delivery",
      "Delivered",
    ];

    return steps.indexOf(status);
  };

  const steps = [
    "Pending",
    "Accepted",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <div className="min-h-screen bg-[#fff8ef] px-5 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2">
          Track your current and previous orders.
        </p>

        <div className="space-y-6 mt-8">

          {orders.length === 0 ? (

            <div className="bg-white p-10 rounded-xl text-center">
              <div className="text-5xl">🛒</div>

              <h2 className="font-bold text-xl mt-4">
                No orders yet
              </h2>
            </div>

          ) : (

            orders.map((order) => {

              const currentStep =
                getStatusStep(order.status);

              return (

                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-sm border p-6"
                >

                  {/* HEADER */}

                  <div className="flex justify-between">

                    <div>
                      <p className="text-gray-500 text-sm">
                        Order ID
                      </p>

                      <h2 className="font-bold">
                        {order.id}
                      </h2>
                    </div>

                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
                      {order.status}
                    </span>

                  </div>


                  {/* ITEMS */}

                  <div className="mt-6">

                    {order.items.map((item) => (

                      <div
                        key={item.id}
                        className="flex justify-between py-2"
                      >

                        <span>
                          {item.name} × {item.quantity}
                        </span>

                        <span className="font-medium">
                          ₹
                          {item.price *
                            item.quantity}
                        </span>

                      </div>

                    ))}

                  </div>


                  {/* TRACKING */}

                  {order.orderType === "delivery" && (

                    <div className="mt-7 border-t pt-6">

                      <h3 className="font-bold mb-6">
                        🛵 Track Your Delivery
                      </h3>

                      <div className="space-y-5">

                        {steps.map(
                          (step, index) => (

                            <div
                              key={step}
                              className="flex items-center gap-4"
                            >

                              <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${
                                  index <= currentStep
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                              >
                                {index <= currentStep
                                  ? "✓"
                                  : index + 1}
                              </div>

                              <span
                                className={
                                  index <= currentStep
                                    ? "font-semibold text-green-600"
                                    : "text-gray-400"
                                }
                              >
                                {step}
                              </span>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  )}


                  {/* TOTAL */}

                  <div className="border-t mt-6 pt-5 flex justify-between">

                    <span className="font-bold">
                      Total
                    </span>

                    <span className="font-bold text-orange-600">
                      ₹{order.totalAmount}
                    </span>

                  </div>

                </div>

              );
            })

          )}

        </div>

      </div>

    </div>
  );
}

export default Orders;