function StatusBadge({ status }) {
  const styles = {
    COMPLETED: "bg-green-100 text-green-700",
    CONFIRMED: "bg-green-100 text-green-700",

    READY: "bg-purple-100 text-purple-700",

    PREPARING: "bg-blue-100 text-blue-700",
    ACCEPTED: "bg-blue-100 text-blue-700",

    PLACED: "bg-yellow-100 text-yellow-700",
    PENDING: "bg-yellow-100 text-yellow-700",

    CANCELLED: "bg-red-100 text-red-700",

    ACTIVE: "bg-green-100 text-green-700",
    INACTIVE: "bg-stone-100 text-stone-600",
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-stone-100 text-stone-600"
      }`}
    >
      {status}
    </span>
  )
}

export default StatusBadge