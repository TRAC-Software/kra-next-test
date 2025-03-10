import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - KRA Aviation News',
  description: 'Learn more about KRA Aviation News and our mission to deliver the latest aviation news and insights.',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About KRA Aviation News</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          KRA Aviation News is your trusted source for comprehensive coverage of the aviation industry. 
          We deliver timely, accurate, and insightful news about commercial aviation, technology advancements, 
          military developments, and business aviation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to keep aviation professionals, enthusiasts, and stakeholders informed about the 
          latest developments, trends, and innovations in the global aviation industry.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Coverage</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Commercial Aviation News</li>
          <li>Aviation Technology Updates</li>
          <li>Military Aviation Developments</li>
          <li>Business Aviation Insights</li>
          <li>Sustainability Initiatives</li>
          <li>Regulatory Changes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-gray-600">
          We are committed to delivering accurate, unbiased, and comprehensive coverage of the aviation 
          industry. Our team of experienced journalists and industry experts work tirelessly to bring you 
          the most relevant and impactful news from around the world.
        </p>
      </div>
    </div>
  );
} 