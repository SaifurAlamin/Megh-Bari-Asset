
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Menu,
  X,
  Globe2
} from 'lucide-react';

import useLanguage from '../../hooks/useLanguage';
import useScroll from '../../hooks/useScroll';

import Container from '../common/Container';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { isScrolled } = useScroll();

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isBangla = language === 'bn';

  // Only homepage starts with a transparent navbar
  const isHomePage = location.pathname === '/';

  // Other pages always use the solid navbar
  const showSolidNavbar = !isHomePage || isScrolled;

  const links = [
    {
      label: isBangla ? 'হোম' : 'Home',
      href: '/'
    },
    {
      label: isBangla ? 'আমাদের সম্পর্কে' : 'About',
      href: '/about'
    },
    {
      label: isBangla ? 'প্রকল্পসমূহ' : 'Projects',
      href: '/projects'
    },
    {
      label: isBangla ? 'গ্যালারি' : 'Gallery',
      href: '/gallery'
    },
    {
      label: isBangla ? 'প্লট ম্যাপ' : 'Plot Map',
      href: '/plot-map'
    },
    {
      label: isBangla ? 'ম্যানেজমেন্ট' : 'Management',
      href: '/management'
    },
    {
      label: isBangla ? 'যোগাযোগ' : 'Contact',
      href: '/contact'
    }
  ];

  const handleLanguageToggle = () => {
    toggleLanguage();
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = `
    text-sm
    font-medium
    transition
    hover:text-[#bd925e]
    ${showSolidNavbar
      ? 'text-[#284238]'
      : 'text-white/90'
    }
  `;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${showSolidNavbar
          ? 'bg-white/95 py-3 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'bg-transparent py-5'
        }
      `}
    >
      <Container>

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="font-display text-2xl font-bold tracking-tight"
          >
            <span className="text-blue-600">MEGH</span>{' '}
            <span className="text-green-600">BARI.</span>

            <span
              className={`
                mt-0.5
                block
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.35em]
                ${showSolidNavbar
                  ? 'text-slate-500'
                  : 'text-white/70'
                }
              `}
            >
              A Place to Grow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 md:flex">

            {links.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`
                    ${linkClass}
                    ${isActive
                      ? 'text-[#b98a52]'
                      : ''
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}

          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">

            <button
              onClick={handleLanguageToggle}
              className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
                py-2
                text-xs
                font-bold
                transition
                ${showSolidNavbar
                  ? 'border-slate-200 text-[#17382f] hover:bg-slate-50'
                  : 'border-white/30 text-white hover:bg-white/10'
                }
              `}
            >
              <Globe2 size={14} />
              {isBangla ? 'English' : 'বাংলা'}
            </button>

            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="
                rounded-full
                bg-[#18352d]
                px-5
                py-3
                text-xs
                font-bold
                text-white
                transition
                hover:bg-[#245344]
              "
            >
              {isBangla ? 'যোগাযোগ' : 'Get in Touch'}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((previous) => !previous)}
            className={`
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              transition
              md:hidden
              ${showSolidNavbar
                ? 'text-[#17382f]'
                : 'text-white'
              }
            `}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (

          <div className="
            mt-4
            rounded-2xl
            bg-white
            p-5
            shadow-xl
            md:hidden
          ">

            <nav className="flex flex-col gap-4">

              {links.map((link) => (

                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`
                    text-sm
                    font-semibold
                    transition
                    hover:text-[#b98a52]
                    ${location.pathname === link.href
                      ? 'text-[#b98a52]'
                      : 'text-[#17382f]'
                    }
                  `}
                >
                  {link.label}
                </Link>

              ))}

              <button
                onClick={handleLanguageToggle}
                className="
                  flex
                  items-center
                  gap-2
                  border-t
                  border-slate-100
                  pt-4
                  text-left
                  text-sm
                  font-semibold
                  text-[#a77842]
                "
              >
                <Globe2 size={15} />
                {isBangla ? 'English' : 'বাংলা'}
              </button>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="
                  rounded-lg
                  bg-[#18352d]
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#245344]
                "
              >
                {isBangla ? 'যোগাযোগ করুন' : 'Get in Touch'}
              </Link>

            </nav>

          </div>

        )}

      </Container>
    </header>
  );
};

export default Navbar;
