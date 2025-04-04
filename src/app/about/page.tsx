import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-24 lg:pr-24 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-green-600 mb-12 animate-fade-in">
          About Me
        </h1>
        <div className="w-full space-y-8">
          <p className="text-xl text-gray-800 leading-relaxed animate-slide-up delay-100">
            Hi, I’m <span className="font-semibold text-green-600">Habtamu Kifilu</span>—a software engineer passionate about crafting innovative web solutions that make an impact.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-up delay-200">
            I’m currently honing my skills in <span className="font-medium text-blue-600">Next.js</span> and <span className="font-medium text-blue-600">Tailwind CSS</span>, building responsive, user-friendly applications. My journey has taken me through experimenting with cutting-edge technologies like <span className="font-medium text-purple-600">React Three Fiber</span> for immersive 3D web experiences and developing practical tools such as a <span className="font-medium text-purple-600">MERN-stack ticketing system</span> to streamline workflows.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-up delay-300">
            Beyond coding, I’m driven by problem-solving and collaboration. I’ve worked on projects ranging from personal portfolios to full-stack applications, always aiming for clean, scalable code. My background includes a strong foundation in JavaScript, TypeScript, and modern frameworks, with a keen interest in UI/UX design principles to ensure every project looks as good as it performs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-up delay-400">
            When I’m not coding, you might find me exploring new tech trends, sketching out app ideas, or enjoying a good book on software architecture. I thrive on turning concepts into reality and am always eager to tackle new challenges. Let’s connect to build something extraordinary together!
          </p>
          <div className="mt-10 animate-slide-up delay-500">
            <a
              href="mailto:habtamukifilu@gmail.com"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}