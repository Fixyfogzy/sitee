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
  <li><button className={page === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</button></li>
  <li><button className={page === 'courses' ? 'active' : ''} onClick={() => go('courses')}>Courses</button></li>
  <li><button className={page === 'facilitators' ? 'active' : ''} onClick={() => go('facilitators')}>Facilitators</button></li>
  <li><button className={`nav-register ${page === 'register' ? 'active' : ''}`} onClick={() => go('register')}>Register</button></li>
</ul>
        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
  <button onClick={() => go('home')}>Home</button>
  <button onClick={() => go('courses')}>Courses</button>
  <button onClick={() => go('facilitators')}>Facilitators</button>
  <button onClick={() => go('register')}>Register</button>
</div>
    </nav>
  );
}

export default Navbar;