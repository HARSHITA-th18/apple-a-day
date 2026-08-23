function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-8">
      {eyebrow && (
        <p className="text-sm text-stone-500">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-1 text-2xl font-bold text-stone-900">
        {title}
      </h1>

      {description && (
        <p className="mt-1 text-sm text-stone-500">
          {description}
        </p>
      )}
    </header>
  )
}

export default PageHeader