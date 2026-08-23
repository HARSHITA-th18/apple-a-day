function StatCard({ title, value, description }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

      <p className="text-sm text-stone-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-stone-900">
        {value}
      </p>

      {description && (
        <p className="mt-2 text-xs text-stone-400">
          {description}
        </p>
      )}

    </div>
  )
}

export default StatCard