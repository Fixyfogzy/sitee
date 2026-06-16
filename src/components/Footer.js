import React from 'react';

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Dr. Adetoun Dally</h3>
            <p>Equipping parents with the tools, knowledge, and community to raise wholesome, purpose-driven children.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => { setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', fontFamily: 'Poppins, sans-serif' }}>Home</button></li>
              <li><button onClick={() => { setPage('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', fontFamily: 'Poppins, sans-serif' }}>Courses</button></li>
              <li><button onClick={() => { setPage('facilitators'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', fontFamily: 'Poppins, sans-serif' }}>Facilitators</button></li>
              <li><button onClick={() => { setPage('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', fontFamily: 'Poppins, sans-serif' }}>Register</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+2348024242885">+234 802 424 2885</a></li>
              <li><a href="tel:+2347082230788">+234 913 384 6226 </a></li>
              <li><a href="mailto:childrenimpactdev@gmail.com">childrenimpactdev@gmail.com</a></li>
              <li><a href="https://youtube.com/@parentingwithdrdally" target="_blank" rel="noreferrer">parentingwithdrdally</a></li>
            </ul>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dr. Adetoun Dally. All rights reserved.</p>
          <li><button onClick={() => { setPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</button></li>
          <p>Enriching Society 🌱</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;