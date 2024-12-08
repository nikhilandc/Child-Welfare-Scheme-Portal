import { Search, Menu, Home, BookOpen, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">ChildCare Connect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/') ? 'text-indigo-200' : ''}`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/schemes" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/schemes') ? 'text-indigo-200' : ''}`}
            >
              <BookOpen size={18} />
              <span>Schemes</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/contact') ? 'text-indigo-200' : ''}`}
            >
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Link 
              to="/profile" 
              className={`flex items-center space-x-1 hover:text-indigo-200 ${isActive('/profile') ? 'text-indigo-200' : ''}`}
            >
              <User size={18} />
              <span>{user ? 'Profile' : 'Login'}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-200">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 hover:text-indigo-200 ${isActive('/') ? 'text-indigo-200' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link 
                to="/schemes" 
                className={`flex items-center space-x-2 hover:text-indigo-200 ${isActive('/schemes') ? 'text-indigo-200' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <BookOpen size={18} />
                <span>Schemes</span>
              </Link>
              <Link 
                to="/contact" 
                className={`flex items-center space-x-2 hover:text-indigo-200 ${isActive('/contact') ? 'text-indigo-200' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Contact</span>
              </Link>
              <Link 
                to="/profile" 
                className={`flex items-center space-x-2 hover:text-indigo-200 ${isActive('/profile') ? 'text-indigo-200' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                <span>{user ? 'Profile' : 'Login'}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}