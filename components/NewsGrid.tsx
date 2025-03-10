import Image from 'next/image'
import Link from 'next/link'

const NewsGrid = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Boeing Announces New Aircraft Development Program",
      excerpt: "Leading manufacturer reveals plans for next-generation commercial aircraft",
      image: "/images/boeing.jpg",
      category: "Commercial Aviation",
      date: "2024-03-20"
    },
    {
      id: 2,
      title: "Advanced Air Mobility Takes Off in Asia",
      excerpt: "Urban air mobility projects gain momentum across major Asian cities",
      image: "/images/urban-air.jpg",
      category: "Technology",
      date: "2024-03-19"
    },
    {
      id: 3,
      title: "New Supersonic Business Jet Completes First Test Flight",
      excerpt: "Revolutionary aircraft promises to cut travel time in half",
      image: "/images/supersonic.jpg",
      category: "Business Aviation",
      date: "2024-03-18"
    },
    {
      id: 4,
      title: "Airlines Report Strong Recovery in International Travel",
      excerpt: "Global aviation industry shows signs of robust post-pandemic growth",
      image: "/images/travel.jpg",
      category: "Commercial Aviation",
      date: "2024-03-17"
    },
    {
      id: 5,
      title: "New Aviation Safety Regulations Announced",
      excerpt: "Regulatory bodies implement enhanced safety measures for commercial flights",
      image: "/images/safety.jpg",
      category: "Regulations",
      date: "2024-03-16"
    },
    {
      id: 6,
      title: "Space Tourism Company Reveals New Vehicle Design",
      excerpt: "Innovative spacecraft aims to make space travel more accessible",
      image: "/images/space-tourism.jpg",
      category: "Space",
      date: "2024-03-15"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsArticles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-sm font-medium">{article.category}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600 text-sm">{article.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              <Link href={`/news/${article.id}`} className="hover:text-blue-600 transition-colors">
                {article.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
            <Link 
              href={`/news/${article.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsGrid 