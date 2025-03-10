import Image from 'next/image'
import Link from 'next/link'
import { newsArticles, type NewsArticle } from '@/lib/data'

interface NewsGridProps {
  category?: string;
}

const NewsGrid = ({ category }: NewsGridProps) => {
  const filteredArticles = category
    ? newsArticles.filter(article => article.category.toLowerCase() === category.toLowerCase())
    : newsArticles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArticles.map((article: NewsArticle) => (
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <Link href={`/article/${article.id}`} className="hover:text-blue-600 transition-colors">
                {article.title}
              </Link>
            </h3>
            <p className="text-gray-600">{article.excerpt}</p>
            <Link 
              href={`/article/${article.id}`}
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

export default NewsGrid 