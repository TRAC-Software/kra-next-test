import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - KRA Aviation News',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Last updated: March 21, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600">
            KRA Aviation News ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Name and contact information</li>
            <li>Email address for newsletter subscriptions</li>
            <li>Comments and feedback</li>
            <li>Account information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Provide and maintain our services</li>
            <li>Send newsletters and updates</li>
            <li>Respond to your comments and questions</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personally identifiable information to third 
            parties without your consent, except as described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to maintain the security of your 
            personal information and protect it against unauthorized or unlawful processing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at privacy@kraaviation.com
          </p>
        </section>
      </div>
    </div>
  );
} 