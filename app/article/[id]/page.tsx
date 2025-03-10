import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find(article => article.id === parseInt(params.id));
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function Page(props: Props) {
  const article = newsArticles.find(article => article.id === parseInt(props.params.id));

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link 
          href={`/category/${article.category.toLowerCase()}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {article.category}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{article.title}</h1>
        <div className="text-gray-600">{article.date}</div>
      </div>

      <div className="relative h-96 w-full mb-8">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {article.content?.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to all articles
        </Link>
      </div>
    </article>
  );
} 