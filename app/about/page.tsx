export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Navigation back */}
        <a href="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Home
        </a>

        {/* About Header */}
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        {/* Background Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">Background</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a web developer passionate about creating beautiful and functional 
            websites. I recently started my journey into web development and I'm 
            excited to build amazing things on the internet.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When I'm not coding, you can find me lifting weights, working on startup ideas, or reading.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">HTML & CSS</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">JavaScript</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">React</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">Next.js</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">Tailwind CSS</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold">Git & GitHub</p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">Interests</h2>
          <ul className="text-gray-300 text-lg space-y-2">
            <li>• Building web applications</li>
            <li>• Learning new technologies</li>
            <li>• Open source contributions</li>
            <li>• in the gym or talking to freinds</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
