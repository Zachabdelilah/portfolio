export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-purple-400">Zach</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Web Developer & Designer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I build modern web applications and enjoy creating startups on the internet.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center">
            <a 
              href="/about" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              About Me
            </a>
            <a 
              href="/projects" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              My Projects
            </a>
            <a 
              href="/contact" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}