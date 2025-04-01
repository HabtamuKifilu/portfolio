import Navbar from '@/components/Navbar';  // Updated to absolute path

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-green-600">About Me</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-md text-center">
          Hi, I’m Habtamu! I’m learning Next.js and building cool stuff with Tailwind.
        </p>
      </div>
    </div>
  );
}