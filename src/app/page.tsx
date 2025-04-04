import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6 animate-fade-in">
          Habtamu Kifilu's Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center">
          Welcome to my personal portfolio—built with Next.js & Tailwind to showcase my skills and projects!
        </p>
      </div>
    </div>
  );
}