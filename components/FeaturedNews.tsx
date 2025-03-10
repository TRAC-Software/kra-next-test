import Image from 'next/image'
import Link from 'next/link'

const FeaturedNews = () => {
  const featuredStories = [
    {
      id: 1,
      title: "Next Generation of Electric Aircraft Takes Flight",
      excerpt: "Revolutionary developments in electric aviation technology promise to transform the industry",
      image: "/images/electric-aircraft.jpg",
      category: "Technology",
      date: "2024-03-20"
    },
    {
      id: 2,
      title: "Major Airlines Announce Sustainable Fuel Initiative",
      excerpt: "Leading carriers commit to ambitious carbon reduction goals with new sustainable aviation fuel program",
      image: "/images/sustainable-fuel.jpg",
      category: "Sustainability",
      date: "2024-03-19"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredStories.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-sm font-medium">{story.category}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600 text-sm">{story.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <Link href={`/news/${story.id}`} className="hover:text-blue-600 transition-colors">
                {story.title}
              </Link>
            </h3>
            <p className="text-gray-600">{story.excerpt}</p>
            <Link 
              href={`/news/${story.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedNews 