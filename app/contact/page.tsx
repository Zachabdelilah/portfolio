export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Navigation back */}
        <a href="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Home
        </a>

        {/* Contact Header */}
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-400 text-lg mb-12">
          I'd love to hear from you! Feel free to reach out through any of these channels.
        </p>

        {/* Contact Links */}
        <div className="space-y-6 mb-12">
          
          {/* Email */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">Email</h3>
            <a 
              href="mailto:zachabdelilah@gmail.com" 
              className="text-gray-300 hover:text-purple-400 text-lg"
            >
              zachabdelilah@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">GitHub</h3>
            <a 
              href="https://github.com/Zachabdelilah" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 text-lg"
            >
              github.com/Zachabdelilah
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/Zach-abdelilah-30001128b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 text-lg"
            >
              linkedin.com/in/Zachabdelilah
            </a>
          </div>

          {/* Twitter/X (Optional) */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">Twitter/X</h3>
            <a 
              href="https://twitter.com/Zachabdelilah" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 text-lg"
            >
              @Zachabdelilah
            </a>
          </div>

        </div>

        {/* Additional message */}
        <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-6">
          <p className="text-gray-300">
            💡 <strong>Currently open to:</strong> Freelance projects, collaboration opportunities, 
            and interesting conversations about web development and startups!
          </p>
        </div>
      </div>
    </main>
  );
}