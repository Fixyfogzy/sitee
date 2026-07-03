
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}



function Home() {
  const navigate = useNavigate();
  return (
    <div>
   {/* Hero Section */}
<section className="hero" id="home">
  <div className="hero-inner">
    <div className="hero-content">
      <p className="hero-eyebrow">Starting August · Every Saturday · Zoom</p>
      <h1 className="hero-title">
        3 Courses That Will Transform Your <span>Family Life</span>
      </h1>
      <p className="hero-sub">
        Expert-led Saturday programs helping parents raise wholesome children, 
        empower their daughters, and groom their sons into great men.
      </p>
      <div className="hero-btns">
        <button className="btn btn-primary" onClick={() => { navigate('/register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
        <button className="btn btn-outline-dark" onClick={() => { navigate('/courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>View Courses</button>
      </div>
    </div>

    <div className="hero-image">
      <img src={require('../hero.jfif')} alt="Happy family" />
    </div>
  </div>
</section>

{/* Program Introduction */}
<section className="intro" id="about">
  <div className="intro-inner">
    <div className="intro-header">
      <p className="eyebrow">About The Program</p>
      <h2>Built for Families Like Yours</h2>
      <p className="intro-sub">
        Every parent wants to raise good children — but the path isn't always clear. 
        This program gives families a practical, supportive space to grow together.
      </p>
    </div>

    <div className="intro-grid">
      <div className="intro-card">
        
        <h3>Who It's For</h3>
        <p>Parents and guardians of children aged 0–18 who want to be more intentional, whether you're navigating toddlerhood, the teen years, or anything in between. For School Owners and Teachers who want to understand children better.</p>
      </div>
      <div className="intro-card">
        
        <h3>Why It Was Created</h3>
        <p>Too many parents feel ill-equipped for the challenges of modern parenting. This program bridges the gap between good intentions and real, effective parenting tools.Also our busy world has reduced time spent influencing our children while emerging challenges battle the family unit.</p>
      </div>
      <div className="intro-card">
        
        <h3>What You'll Gain</h3>
        <p>Deeper connection with your children, proven strategies for common challenges, and a community of parents walking the same journey with expert guidance every step. Children equipped with practical tools to tackle and succeed against life's challenges.</p>
      </div>
    </div>
  </div>
</section>


{/* Courses Preview */}
<section className="courses" id="courses">
  <div className="courses-inner">
    <div className="courses-header">
      <p className="eyebrow">Our Courses</p>
      <h2>Programs for Every Stage</h2>
      <p className="courses-sub">
        Three focused courses, each addressing a unique dimension of family life.
      </p>
    </div>

    <div className="courses-grid">
      <div className="course-card">
        <div className="course-card-top cc1">
          <span className="course-num">Course 01</span>
        </div>
        <div className="course-card-body">
          <h3>Parenting & Wholesomeness</h3>
          <p>Practical, heart-centered strategies for raising children with character, discipline, and love.</p>
          <button className="btn btn-primary" onClick={() => { navigate('/register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="course-card-top cc2">
          <span className="course-num">Course 02</span>
        </div>
        <div className="course-card-body">
          <h3>Empowering Girls</h3>
          <p>Equip your daughters with confidence, self-worth, and the tools to navigate adolescence with purpose.</p>
          <button className="btn btn-primary" onClick={() => { navigate('/register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="course-card-top cc3">
          <span className="course-num">Course 03</span>
        </div>
        <div className="course-card-body">
          <h3>Grooming Boys</h3>
          <p>Raise boys who grow into responsible, emotionally healthy, and purpose-driven men.</p>
          <button className="btn btn-primary" onClick={() => { navigate('/register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
        </div>
      </div>
    </div>

    <div className="courses-cta">
      <button className="btn btn-outline-dark" onClick={() => { navigate('/courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Explore All Courses</button>
    </div>
  </div>
</section>


{/* Facilitators */}
<section className="facilitators" id="facilitators">
  <div className="facilitators-inner">
    <div className="facilitators-header">
      <p className="eyebrow">The Team</p>
      <h2>Meet The Facilitators</h2>
      <p className="facilitators-sub">
        Experienced professionals passionate about helping families thrive.
      </p>
    </div>

    <div className="facilitators-grid">
      <div className="fac-card">
        <div className="fac-img">
          <img src={require('../images/Dr Adetoun Dally.jpeg')} alt="Adetoun Dally" />
        </div>
        <h3>Dr. Adetoun Dally 🇳🇬</h3>
        
      </div>

      <div className="fac-card">
        <div className="fac-img">
          <img src={require('../images/Olufolake Adeagbo.jpeg')} alt="Olufolake Adeagbo" />
        </div>
        <h3>Olufolake Adeagbo 🇺🇸</h3>
        
      </div>

      <div className="fac-card">
        <div className="fac-img">
          <img src={require('../images/Dennis Odero Wao.jpeg')} alt="Dennis Odero Wao." />
        </div>
        <h3>Dennis Odero Wao. 🇰🇪</h3>
        
      </div>

      <div className="fac-card">
        <div className="fac-img">
          <img src={require('../images/Olajide Ojeniyi.jpeg')} alt="Olajide Ojeniyi" />
        </div>
        <h3>Olajide Ojeniyi 🇹🇿</h3>
        
      </div>
    </div>

    <div className="facilitators-cta">
     <button className="btn btn-outline-dark" onClick={() => { navigate('/facilitators'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>View All Facilitators</button>
    </div>
  </div>
</section>



{/* FAQ */}
<section className="faq" id="faq">
  <div className="faq-inner">
    <div className="faq-header">
      <p className="eyebrow">FAQ</p>
      <h2>Common Questions</h2>
      <p className="faq-sub">
        Everything you need to know before registering.
      </p>
    </div>

    <div className="faq-list">
      <FaqItem
        question="Who is this program designed for?"
        answer="This program is designed for parents and guardians of children aged 0–18 who want to be more intentional, whether you're navigating toddlerhood, the teen years, or anything in between. For School Owners and Teachers who want to understand children better."
      />
      <FaqItem
        question="How does the program run?"
        answer="Sessions are held every Saturday for one month via Zoom, with each session lasting approximately 2 hours."
      />
      <FaqItem
        question="Do I need to attend all sessions?"
        answer="Yes, we strongly recommend attending all sessions as each one builds on the previous. Recordings are available in case you miss a session."
      />
      <FaqItem
        question="Can both parents attend together?"
        answer="Absolutely. We encourage both parents or co-caregivers to attend together where possible."
      />
      <FaqItem
        question="Are the courses available individually?"
        answer="Yes. You can register for individual courses or the full three-course program. We offer a discounted rate for all three."
      />
    </div>
  </div>
</section>



{/* Register CTA */}
<section className="cta" id="register">
  <div className="cta-inner">
    <p className="eyebrow" style={{ color: '#D4A017' }}>Limited Spots Available</p>
    <h2>Ready to Join?</h2>
    <p className="cta-sub">
      Register now and secure your spot in our next cohort. 
      Sessions begin in August.
    </p>
    <button className="btn btn-primary" onClick={() => { navigate('/register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
    
    <div className="cta-meta">
      <span>📅 Every Saturday</span>
      <span>⏱ 2 Hours</span>
      <span>💻 Zoom</span>
      <span>📆 Bi-Monthly</span>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;