import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <nav className="bg-gray-900 fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-xl font-bold">Pronob Karmoker</Link>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                  <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
                  <MobileNavLink to="/education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
                  <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 mt-auto">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2025 Pronob Karmoker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md block transition-colors"
    >
      {children}
    </Link>
  );
}

export default App;