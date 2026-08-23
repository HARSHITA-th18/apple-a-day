import { useState } from "react"
import { dummyQueue } from "../data/adminDummyData"

function Queue() {
  const [queue, setQueue] = useState(dummyQueue)

  const removeFromQueue = (token) => {
    setQueue((currentQueue) =>
      currentQueue.filter((item) => item.token !== token)
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">

      <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">
        <p className="text-sm text-stone-500">
          Order Processing
        </p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Smart Queue
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Manage the current order preparation queue.
        </p>
      </header>


      <main className="p-6 lg:p-8">

        <div className="mb-6 rounded-2xl border border-stone-200 bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-stone-500">
                Orders in Queue
              </p>

              <p className="mt-1 text-3xl font-bold text-stone-900">
                {queue.length}
              </p>
            </div>

            <div className="text-4xl">
              ☷
            </div>

          </div>
        </div>


        <div className="space-y-4">

          {queue.length === 0 ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center">
              <p className="font-semibold">
                Queue is empty
              </p>
            </div>
          ) : (
            queue.map((item, index) => (

              <div
                key={item.token}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-center">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-sm font-bold text-white">
                      {item.token}
                    </div>

                    <div>
                      <p className="font-semibold text-stone-900">
                        {item.customer.name}
                      </p>

                      <p className="text-xs text-stone-400">
                        Queue position #{index + 1}
                      </p>
                    </div>

                  </div>


                  <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">

                    <div>
                      <p className="text-xs text-stone-400">
                        Waiting
                      </p>

                      <p className="mt-1 font-semibold">
                        {item.orderAge} min
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-stone-400">
                        Prep Time
                      </p>

                      <p className="mt-1 font-semibold">
                        {item.preparationTime} min
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-stone-400">
                        Priority
                      </p>

                      <p className="mt-1 font-semibold">
                        {item.priorityScore}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-stone-400">
                        Type
                      </p>

                      <p className="mt-1 text-xs font-semibold">
                        {item.fulfilment}
                      </p>
                    </div>

                  </div>


                  <button
                    onClick={() => removeFromQueue(item.token)}
                    className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Done
                  </button>

                </div>

              </div>

            ))
          )}

        </div>

      </main>
    </div>
  )
}

export default Queue