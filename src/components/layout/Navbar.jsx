import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAV_LINKS } from '../../lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'glass-nav shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.jpeg"
              alt="One Click Logo"
              className="w-9 h-9 rounded-xl object-contain group-hover:scale-105 transition-transform"
            />
            <span className={`font-bold text-lg tracking-tight hidden sm:block ${
              scrolled || !isHome ? 'text-text-dark' : 'text-white'
            }`}>
              One Click
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'brand-gradient-text font-semibold'
                    : scrolled || !isHome
                      ? 'text-text-mid hover:text-text-dark hover:bg-surface-light'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Get the App Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/app-download"
              className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all hover:shadow-lg hover:shadow-brand-purple/25"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? 'text-text-dark hover:bg-surface-light'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? 'brand-gradient-bg text-white'
                  : 'text-text-mid hover:bg-surface-light hover:text-text-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border mt-3">
            <Link
              to="/app-download"
              className="block w-full text-center brand-gradient-bg text-white text-sm font-semibold px-5 py-3 rounded-full"
            >
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
