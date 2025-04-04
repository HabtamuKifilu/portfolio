import Navbar from '@/components/Navbar';

export default function Projects() {
  const projects = [
    { title: "Portfolio Site", description: "A personal showcase built with Next.js and Tailwind.", link: "#" },
    { title: "Ticketing System", description: "A MERN-stack app for managing tickets.", link: "#" },
    { title: "3D Website", description: "An experimental site using React Three Fiber.", link: "#" },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:text-blue-700 font-medium">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}