import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - KRA Aviation News',
  description: 'Get in touch with KRA Aviation News team for inquiries, feedback, or partnership opportunities.',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question, feedback, or business inquiry? We'd love to hear from you. 
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">
                KRA Aviation News<br />
                123 Aviation Way<br />
                Suite 456<br />
                Lagos, Nigeria
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">
                General Inquiries: info@kraaviation.com<br />
                Press: press@kraaviation.com<br />
                Advertising: ads@kraaviation.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600">
                Main: +234 123 456 7890<br />
                Toll-free: 0800 123 4567
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM WAT<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 