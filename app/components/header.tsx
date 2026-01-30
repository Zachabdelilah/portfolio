export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
            Zach
          </a>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <a 
              href="/" 
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              About
            </a>
            <a 
              href="/projects" 
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              Projects
            </a>
            <a 
              href="/contact" 
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}