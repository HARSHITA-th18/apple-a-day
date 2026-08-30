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
    <div className="min-h-screen bg-[#fbf9f5]">

      <header className="border-b border-[#e6e1d7] bg-[#f4efe6] px-6 py-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526b59]">
          Order Processing
        </p>

        <h1 className="mt-1 text-3xl font-bold text-[#1a382b]">
          Smart Queue
        </h1>

        <p className="mt-2 text-sm font-medium text-stone-600">
          Manage the current order preparation queue.
        </p>
      </header>


      <main className="p-6 lg:p-8">

        <div className="mb-6 rounded-xl border border-[#e6e1d7] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Orders in Queue
              </p>

              <p className="mt-1 text-4xl font-extrabold text-[#1a382b]">
                {queue.length}
              </p>
            </div>

            <div className="text-4xl text-[#5f9670]">
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
                className="rounded-xl border border-[#e6e1d7] bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-center">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a382b] text-sm font-bold text-white">
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