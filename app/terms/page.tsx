import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - KRA Aviation News',
  description: 'Read our terms of service to understand the rules and guidelines for using KRA Aviation News.',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Last updated: March 21, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600">
            By accessing and using KRA Aviation News, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily access and view the materials on KRA Aviation News for 
            personal, non-commercial use only. This is the grant of a license, not a transfer of title, 
            and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Content</h2>
          <p className="text-gray-600">
            Users may post comments and other content as long as the content is not illegal, obscene, 
            threatening, defamatory, invasive of privacy, infringing on intellectual property rights, 
            or otherwise injurious to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-600">
            The materials on KRA Aviation News are provided on an 'as is' basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular 
            purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
          <p className="text-gray-600">
            In no event shall KRA Aviation News or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revisions</h2>
          <p className="text-gray-600">
            We may update these terms of service from time to time. By continuing to use our website 
            after such revisions are made, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at legal@kraaviation.com
          </p>
        </section>
      </div>
    </div>
  );
} 