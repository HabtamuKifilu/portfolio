import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-blue-600 py-6 min-h-20 sticky top-0 shadow-md z-10 flex justify-center items-center">
      <ul className="flex gap-12 text-white font-medium">
        <li>
          <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-200 transition-colors duration-200">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;