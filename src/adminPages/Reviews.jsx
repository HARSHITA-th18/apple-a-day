import { useState } from "react"
import { dummyReviews } from "../data/adminDummyData"

function Reviews() {
  const [reviews, setReviews] = useState(dummyReviews)

  const markReplied = (id) => {
    setReviews((current) =>
      current.map((review) =>
        review.id === id
          ? { ...review, replied: true }
          : review
      )
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">

      <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">

        <p className="text-sm text-stone-500">
          Customer Feedback
        </p>

        <h1 className="mt-1 text-2xl font-bold text-stone-900">
          Reviews
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          View ratings and feedback from customers.
        </p>

      </header>


      <main className="p-6 lg:p-8">

        <div className="grid gap-5 md:grid-cols-2">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="font-semibold text-stone-900">
                    {review.customer.name}
                  </h2>

                  <p className="mt-1 text-xs text-stone-400">
                    {review.customer.email}
                  </p>
                </div>

                <div className="text-sm">
                  {"★".repeat(review.rating)}
                  <span className="text-stone-300">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </div>

              </div>


              <p className="mt-5 text-sm leading-6 text-stone-600">
                "{review.comment}"
              </p>


              <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">

                <span className="text-xs text-stone-400">
                  {review.date}
                </span>

                {review.replied ? (

                  <span className="text-xs font-semibold text-green-600">
                    ✓ Replied
                  </span>

                ) : (

                  <button
                    onClick={() => markReplied(review.id)}
                    className="rounded-lg bg-stone-900 px-3 py-2 text-xs font-semibold text-white"
                  >
                    Mark Replied
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      </main>
    </div>
  )
}

export default Reviews;