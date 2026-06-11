import React, { useState, useEffect } from 'react';

function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <ul className="nav-links">
          <li><a href="#" className={page === 'home' ? 'active' : ''} onClick={e => { e.preventDefault(); go('home'); }}>Home</a></li>
          <li><a href="#" className={page === 'courses' ? 'active' : ''} onClick={e => { e.preventDefault(); go('courses'); }}>Courses</a></li>
          <li><a href="#" className={page === 'facilitators' ? 'active' : ''} onClick={e => { e.preventDefault(); go('facilitators'); }}>Facilitators</a></li>
          <li><a href="#" className={`nav-register ${page === 'register' ? 'active' : ''}`} onClick={e => { e.preventDefault(); go('register'); }}>Register</a></li>
        </ul>

        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={e => { e.preventDefault(); go('home'); }}>Home</a>
        <a href="#" onClick={e => { e.preventDefault(); go('courses'); }}>Courses</a>
        <a href="#" onClick={e => { e.preventDefault(); go('facilitators'); }}>Facilitators</a>
        <a href="#" onClick={e => { e.preventDefault(); go('register'); }}>Register</a>
      </div>
    </nav>
  );
}

export default Navbar;