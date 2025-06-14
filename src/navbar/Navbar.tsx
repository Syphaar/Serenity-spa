import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface NavLinkItem {
  name: string;
  path: string;
}

const links: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

// NAVBAR
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll offset
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  transition-colors duration-300 ${
        scrolled ? 'bg-tahiti text-white shadow-md' : 'bg-midnight text-tahiti shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">
          Serenity
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {links.map(({ name, path }) => (
            <NavLink key={name} to={path} end={path === '/'}
              className={({ isActive }) =>
                `${isActive
                  ? scrolled
                    ? 'bg-white text-tahiti font-semibold'
                    : 'bg-tahiti text-white'
                  : scrolled
                  ? 'hover:bg-white hover:text-tahiti hover:font-semibold'
                  : 'hover:bg-tahiti hover:text-white'
                } font-semibold py-1 px-4 transition duration-300 rounded-full`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tahiti px-4 py-8 transition duration-300">
          <div className="flex flex-col items-center gap-4">
            {links.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end={path === '/'}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                      isActive
                        ? 'bg-white text-tahiti'
                      : scrolled
                      ? 'text-white hover:text-tahiti hover:bg-white'
                      : 'text-white hover:bg-white hover:text-tahiti'

                    }`}
                  >
                    {name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
