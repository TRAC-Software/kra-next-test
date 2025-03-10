import Link from 'next/link'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Commercial Aviation",
      icon: "✈️",
      count: 45
    },
    {
      id: 2,
      name: "Technology",
      icon: "🛠️",
      count: 32
    },
    {
      id: 3,
      name: "Military",
      icon: "🪖",
      count: 28
    },
    {
      id: 4,
      name: "Business Aviation",
      icon: "🛩️",
      count: 24
    },
    {
      id: 5,
      name: "Sustainability",
      icon: "🌱",
      count: 19
    },
    {
      id: 6,
      name: "Space",
      icon: "🚀",
      count: 15
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
        >
          <span className="text-3xl mb-2 block">{category.icon}</span>
          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <span className="text-sm text-gray-500">{category.count} articles</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories 