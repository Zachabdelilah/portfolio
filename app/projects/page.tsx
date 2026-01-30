export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Navigation back */}
        <a href="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Home
        </a>

        {/* Projects Header */}
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-400 text-lg mb-12">
          Here are some of the things I've built
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
         {/* Project 1 - Portfolio */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-bold mb-3 text-purple-400">
              Personal Portfolio
            </h3>
            <p className="text-gray-300 mb-4">
              A modern portfolio website built with Next.js and Tailwind CSS. 
              Features responsive design and smooth animations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                React
              </span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Zachabdelilah/portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                GitHub →
              </a>
              <a 
                href="/projects" 
                className="text-purple-400 hover:text-purple-300"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Project 2 - Placeholder */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-bold mb-3 text-purple-400">
              Coming Soon
            </h3>
            <p className="text-gray-300 mb-4">
              More exciting projects on the way! I'm constantly learning and 
              building new things.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                In Progress
              </span>
            </div>
          </div>

          {/* Project 3 - Placeholder */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-bold mb-3 text-purple-400">
              Future Project
            </h3>
            <p className="text-gray-300 mb-4">
              This space is reserved for my next amazing project. Stay tuned!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                Planned
              </span>
            </div>
          </div>

          {/* Project 4 - Placeholder */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-bold mb-3 text-purple-400">
              Another Project
            </h3>
            <p className="text-gray-300 mb-4">
              More cool stuff coming soon as I continue my web development journey!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                Planned
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}