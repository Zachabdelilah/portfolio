export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-gray-400">
            © 2025 Zach. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/YOUR_GITHUB_USERNAME" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}