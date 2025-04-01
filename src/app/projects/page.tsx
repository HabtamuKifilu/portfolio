import Navbar from '../../components/Navbar';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-purple-600">My Projects</h1>
        <ul className="mt-4 text-lg text-gray-700">
          <li>Project 1: My Portfolio (in progress!)</li>
        </ul>
      </div>
    </div>
  );
}