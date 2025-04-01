import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Habtamu Kifilu's Portfolio</h1>
        <p className="mt-4 text-lg text-gray-700">Welcome to my personal portfolio built with Next.js & Tailwind!</p>
      </div>
    </div>
  );
}