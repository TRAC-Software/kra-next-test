import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">KRA Aviation News</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/category/commercial" className="text-gray-700 hover:text-blue-600">
              Commercial
            </Link>
            <Link href="/category/technology" className="text-gray-700 hover:text-blue-600">
              Technology
            </Link>
            <Link href="/category/military" className="text-gray-700 hover:text-blue-600">
              Military
            </Link>
            <Link href="/category/business" className="text-gray-700 hover:text-blue-600">
              Business
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 