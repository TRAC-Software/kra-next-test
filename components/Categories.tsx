import Link from 'next/link'

const categories = [
  {
    name: 'Commercial',
    description: 'Latest updates from commercial aviation sector',
    icon: '✈️',
  },
  {
    name: 'Technology',
    description: 'Innovations and advancements in aviation technology',
    icon: '🛠️',
  },
  {
    name: 'Military',
    description: 'Defense aviation news and developments',
    icon: '🛩️',
  },
  {
    name: 'Business',
    description: 'Private and business aviation updates',
    icon: '🚁',
  },
  {
    name: 'Sustainability',
    description: 'Sustainable aviation and environmental initiatives',
    icon: '🌱',
  },
  {
    name: 'Regulations',
    description: 'Aviation regulations and safety standards',
    icon: '📋',
  },
]

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase()}`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories 