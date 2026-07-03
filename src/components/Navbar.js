import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <ul className="nav-links">
          <li><button className={isActive('/') ? 'active' : ''} onClick={() => go('/')}>Home</button></li>
          <li><button className={isActive('/courses') ? 'active' : ''} onClick={() => go('/courses')}>Courses</button></li>
          <li><button className={isActive('/facilitators') ? 'active' : ''} onClick={() => go('/facilitators')}>Facilitators</button></li>
          <li><button className={`nav-register ${isActive('/register') ? 'active' : ''}`} onClick={() => go('/register')}>Register</button></li>
        </ul>

        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => go('/')}>Home</button>
        <button onClick={() => go('/courses')}>Courses</button>
        <button onClick={() => go('/facilitators')}>Facilitators</button>
        <button onClick={() => go('/register')}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;