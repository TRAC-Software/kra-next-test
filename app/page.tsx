import FeaturedNews from '@/components/FeaturedNews'
import NewsGrid from '@/components/NewsGrid'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aviation News</h1>
          <p className="text-xl text-gray-600">Your trusted source for the latest aviation updates and insights</p>
        </section>

        {/* Featured News */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Stories</h2>
          <FeaturedNews />
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">News Categories</h2>
          <Categories />
        </section>

        {/* Latest News Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <NewsGrid />
        </section>
      </div>
    </main>
  )
} 