import NewsGrid from '@/components/NewsGrid';
import { Metadata } from 'next';

const categoryTitles: { [key: string]: string } = {
  commercial: 'Commercial Aviation News',
  technology: 'Aviation Technology News',
  military: 'Military Aviation News',
  business: 'Business Aviation News',
  sustainability: 'Sustainable Aviation News',
  regulations: 'Aviation Regulations News'
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category;
  const title = categoryTitles[category] || `${category.charAt(0).toUpperCase() + category.slice(1)} News`;
  
  return {
    title,
    description: `Latest news and updates about ${category} aviation.`,
  };
}

export default function Page({ params }: { params: { category: string } }) {
  const category = params.category;
  const title = categoryTitles[category] || `${category.charAt(0).toUpperCase() + category.slice(1)} News`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-lg text-gray-600">
          Stay updated with the latest news and developments in {category} aviation.
        </p>
      </div>
      <NewsGrid category={category} />
    </div>
  );
} 