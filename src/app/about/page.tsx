import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-600 mb-8">About Me</h1>
        <div className="max-w-3xl bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m Habtamu! I’m a software engineer learning Next.js and building cool stuff with Tailwind.
            I love experimenting with web tech—like 3D sites with React Three Fiber—and creating practical
            tools like my MERN ticketing system.
          </p>
        </div>
      </div>
    </div>
  );
}