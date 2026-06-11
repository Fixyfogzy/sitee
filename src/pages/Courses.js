import React from 'react';

function Courses({ setPage }) {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Our Programs</p>
          <h1>Explore Our Courses</h1>
          <p>Three carefully designed programs to help you build a stronger, healthier family.</p>
        </div>
      </section>

      {/* Course 1 */}
      <section className="course-detail">
        <div className="course-detail-inner">
          <div className="course-detail-visual cd1">
  <img src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600" alt="Parenting" />
</div>
          <div className="course-detail-content">
            <p className="eyebrow">Course 01</p>
            <h2>Parenting & Wholesomeness</h2>
            <p>This foundational course helps parents understand the "why" behind their children's behaviours and equips them with tools to respond with intention rather than reaction.</p>
            <div className="course-info-block">
              <h4>Learning Objectives</h4>
              <ul>
                <li>Understand developmental stages and age-appropriate expectations</li>
                <li>Build stronger communication patterns with your child</li>
                <li>Set healthy boundaries while maintaining deep connection</li>
                <li>Create a wholesome home environment that nurtures growth</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Topics Covered</h4>
              <ul>
                <li>The psychology of parenting styles</li>
                <li>Discipline vs. punishment — what really works</li>
                <li>Emotional intelligence in children</li>
                <li>Building family rituals and routines</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Who Should Attend</h4>
              <ul>
                <li>Parents of children aged 5–17 who want to be more intentional</li>
              </ul>
            </div>
           <button className="btn btn-primary" onClick={() => { setPage('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
          </div>
        </div>
      </section>

      {/* Course 2 */}
      <section className="course-detail alt">
        <div className="course-detail-inner">
          <div className="course-detail-content">
            <p className="eyebrow">Course 02</p>
            <h2>Empowering Girls</h2>
            <p>Girls face unique pressures today — from social media to peer influence. This course gives parents the language and framework to walk alongside their daughters through these challenges.</p>
            <div className="course-info-block">
              <h4>Learning Objectives</h4>
              <ul>
                <li>Help your daughter build a healthy self-image</li>
                <li>Open safe conversations about identity and peer pressure</li>
                <li>Recognise signs of low self-esteem and how to address them</li>
                <li>Cultivate ambition, leadership, and purpose in girls</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Topics Covered</h4>
              <ul>
                <li>The unique challenges facing girls today</li>
                <li>Body image, social media, and self-worth</li>
                <li>Building resilience and handling rejection</li>
                <li>Goal setting and future planning</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Who Should Attend</h4>
              <ul>
                <li>Parents of girls aged 9–17, especially those navigating adolescence</li>
              </ul>
            </div>
           <button className="btn btn-primary" onClick={() => { setPage('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
          </div>
          <div className="course-detail-visual cd2">
  <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?w=600" alt="Empowering Girls" />
</div>
        </div>
      </section>

      {/* Course 3 */}
      <section className="course-detail">
        <div className="course-detail-inner">
         <div className="course-detail-visual cd3">
  <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600" alt="Grooming Boys" />
</div>
          <div className="course-detail-content">
            <p className="eyebrow">Course 03</p>
            <h2>Grooming Boys</h2>
            <p>Boys need direction, challenge, and identity. This course helps parents understand the male developmental journey and gives practical tools for raising sons of strong character.</p>
            <div className="course-info-block">
              <h4>Learning Objectives</h4>
              <ul>
                <li>Understand the developmental needs unique to boys</li>
                <li>Teach emotional intelligence without undermining confidence</li>
                <li>Address risky behaviour and peer pressure proactively</li>
                <li>Build a vision for manhood rooted in character</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Topics Covered</h4>
              <ul>
                <li>How boys learn and process emotion differently</li>
                <li>Navigating aggression and energy in healthy ways</li>
                <li>The role of fathers in boys' development</li>
                <li>Building discipline, work ethic, and accountability</li>
              </ul>
            </div>
            <div className="course-info-block">
              <h4>Who Should Attend</h4>
              <ul>
                <li>Parents of boys aged 8–18 who want to raise sons of strong character</li>
              </ul>
            </div>
           <button className="btn btn-primary" onClick={() => { setPage('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Register Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;