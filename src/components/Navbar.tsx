import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-blue-500 p-4">
      <ul className="flex space-x-6 justify-center text-white">
        <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
        <li><Link href="/projects" className="hover:text-gray-200">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;