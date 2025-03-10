import Image from 'next/image'
import Link from 'next/link'

const FeaturedNews = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src="/images/featured-news.jpg"
          alt="Featured news"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-block px-3 py-1 bg-blue-600 text-sm font-semibold rounded-full mb-3">
          Breaking News
        </span>
        <h1 className="text-3xl font-bold mb-2">
          Next Generation of Commercial Aircraft Unveiled
        </h1>
        <p className="text-lg mb-4 text-gray-200">
          Revolutionary design promises 30% reduction in fuel consumption while increasing passenger comfort
        </p>
        <Link 
          href="/article/next-gen-aircraft" 
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default FeaturedNews 