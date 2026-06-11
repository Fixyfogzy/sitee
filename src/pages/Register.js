import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    children: '',
    message: '',
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.email || !form.course) {
      alert('Please fill in your name, email, and select a course.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xjgdeaon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          children: form.children,
          message: form.message,
        }),
      });

      if (response.ok) {
        setDone(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Secure Your Spot</p>
          <h1>Register Now</h1>
          <p>Join families already transforming their homes through our Saturday programs.</p>
        </div>
      </section>

      <section className="reg-page">
        <div className="reg-inner">

          <div className="reg-sidebar">
            <div className="reg-info-card">
              <h3>Program Details</h3>
              <ul className="reg-info-list">
                <li><span>📅</span> Every Saturday</li>
                <li><span>⏱</span> 2 hours per session</li>
                <li><span>💻</span> Live on Zoom</li>
                <li><span>📆</span> 1 Month (4 sessions)</li>
                <li><span>📚</span> 3 courses available</li>
                <li><span>🗓</span> Starting August</li>
              </ul>
            </div>

            <div className="reg-pricing-card">
              <h3>Pricing</h3>
              <div className="pricing-item">
                <span className="pricing-label">Master Class</span>
                <span className="pricing-value">₦30,000 <small>(4 weeks)</small></span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">Regular</span>
                <span className="pricing-value">₦40,000 <small>(6 weeks)</small></span>
              </div>
              <div className="pricing-item early">
                <span className="pricing-label">🔥 Early Bird</span>
                <span className="pricing-value">₦20,000</span>
              </div>
              <p className="pricing-note">Early bird: Jun 10th — Jul 10th</p>
            </div>

            <div className="reg-contact-card">
              <h3>Further Inquiries</h3>
              <div className="contact-item">
                <span>📞</span>
                <a href="tel:+2348024242885">+234 802 424 2885</a>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <a href="tel:+2347082230788">+234 708 223 0788</a>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <a href="mailto:childrenimpactdev@gmail.com">childrenimpactdev@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>▶️</span>
                <a href="https://youtube.com/@parentingwithdrdally" target="_blank" rel="noreferrer">parentingwithdrdally</a>
              </div>
              <div className="whatsapp-btns">
                <a href="https://wa.me/2348024242885" target="_blank" rel="noreferrer" className="wa-btn">💬 WhatsApp 1</a>
                <a href="https://wa.me/2347082230788" target="_blank" rel="noreferrer" className="wa-btn">💬 WhatsApp 2</a>
              </div>
            </div>
          </div>

          <div className="reg-form-card">
            {done ? (
              <div className="success-box">
                <div className="success-icon">🎉</div>
                <h2>You're Registered!</h2>
                <p>Thank you, <strong>{form.name}</strong>! We'll be in touch shortly with your Zoom link and session details at <strong>{form.email}</strong>.</p>
              </div>
            ) : (
              <>
                <h2>Join the Program</h2>
                <p>Fill in the form below and we'll confirm your spot within 24 hours.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Number of Children</label>
                    <input type="number" placeholder="e.g. 2" min="1" value={form.children} onChange={e => update('children', e.target.value)} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Course Selection *</label>
                  <select value={form.course} onChange={e => update('course', e.target.value)}>
                    <option value="">Select a course…</option>
                    <option value="parenting">Parenting & Wholesomeness</option>
                    <option value="girls">Empowering Girls</option>
                    <option value="boys">Grooming Boys</option>
                    <option value="all">All Three Courses</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Anything you'd like us to know?</label>
                  <textarea placeholder="Any specific concerns or context…" value={form.message} onChange={e => update('message', e.target.value)} />
                </div>

                <button className="btn btn-primary form-submit" onClick={submit} disabled={loading}>
                  {loading ? 'Submitting...' : 'Register Now'}
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;