import Image from 'next/image'
import Link from 'next/link'

export default function NewsArticle({ params }: { params: { id: string } }) {
  // This is a mock article. In a real application, you would fetch this data from an API or database
  const article = {
    id: params.id,
    title: "Boeing Announces New Aircraft Development Program",
    content: `
      Boeing has unveiled plans for an ambitious new aircraft development program that aims to revolutionize commercial aviation. The announcement comes as the industry continues to push for more efficient and sustainable air travel solutions.

      The new aircraft, currently in its early design phase, will incorporate cutting-edge technologies in aerodynamics, propulsion, and materials science. Boeing executives emphasized the company's commitment to reducing carbon emissions while maintaining high performance and safety standards.

      Key features of the new aircraft program include:
      • Advanced composite materials for reduced weight
      • Next-generation propulsion systems
      • Enhanced aerodynamic design
      • State-of-the-art cockpit technology
      • Improved passenger comfort features

      Industry analysts have responded positively to the announcement, noting that this development could help Boeing maintain its competitive edge in the commercial aviation market.
    `,
    image: "/images/boeing.jpg",
    category: "Commercial Aviation",
    date: "2024-03-20",
    author: "John Smith",
    authorRole: "Aviation Correspondent"
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center mb-4">
              <span className="text-blue-600 text-sm font-medium">{article.category}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600 text-sm">{article.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h1>

            <div className="flex items-center mb-8">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">{article.author[0]}</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-500">{article.authorRole}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Share this article</h2>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800">Twitter</button>
                <button className="text-blue-600 hover:text-blue-800">Facebook</button>
                <button className="text-blue-600 hover:text-blue-800">LinkedIn</button>
                <button className="text-blue-600 hover:text-blue-800">Email</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
} 