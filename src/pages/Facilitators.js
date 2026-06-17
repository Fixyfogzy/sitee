import React, { useState } from 'react';

const facilitators = [
  {
    id: 1,
    name: 'Dr. Adetoun Dally 🇳🇬',
    bio: 'Adetoun is passionate about the welfare and development of children and has worked with children and parents in various capacities for close to 3 decades. She is a prominent family coach, author, researcher and prolific public speaker. Dally loves reading, travelling and meeting people.',
    img: require('../images/Dr Adetoun Dally.jpeg'),
  },
  {
    id: 2,
    name: 'Olufolake Adeagbo 🇺🇸',
    bio: 'She holds a Doctor of Philosophy in Nursing and has been an Associate Professor of Nursing for 15 years. Fola is passionate about giving back to society and engages in Medical Outreaches, Orphanage Home Visits and Feeding of Widows and less privileged. She shows her concern and support for good parenting via her virtual sessions focusing on different beneficial areas.',
    img: require('../images/Olufolake Adeagbo.jpeg'),
  },
  {
    id: 3,
    name: 'Ohizoe Gideon 🇳🇬',
    bio: 'Ohizoe Gideon is the founder and president of the Value-added Fatherhood Academy. He is passionate about helping fathers become more present and intentional.',
    img: require('../images/Mr Gideon Ohizoe.jpeg'),
  },
  {
    id: 4,
    name: 'Deji Oke 🇬🇧',
    bio: 'Deji Oke is a pastor, a podcast host and a credit management consultant. He has over 30 years experience in Christian ministry and over 20 years experience in the transport and finance sectors. He is married to Yemi and they have two grown children.',
    img: require('../images/Deji Oke.jpeg'),
  },
  {
    id: 5,
    name: 'Adesina Odewale Sijuade 🇺🇸',
    bio: 'He is experienced as a Youth Support Professional providing compassionate support and intervention to youths experiencing crisis and mental distress. Sina is skilled in financial management, operations coordination, negotiation and team leadership across healthcare, public and community service sectors. He is an MBA candidate with Masters in Managerial Psychology and BA in Accounting.',
    img: require('../images/Adesina.jpeg'),
  },
  {
    id: 6,
    name: 'Mary Eyong-Etim 🇳🇬',
    bio: 'Mary has been an Educator and also a Minister to children and teens for over a decade. Her passion compels her to volunteer on several platforms for the mentoring and empowering of the young generation. She has a BA in Sociology and PGDE',
    img: require('../images/Mary Eyong-Etim.jpeg'),
  },
  {
    id: 7,
    name: 'Osekafore Olorunfemi 🇳🇬',
    bio: 'Ose passionately volunteers to mentor Girls in marginalized and underserved communities. She believes that for the Woman to be whole attention must be given to the Girl that she is today. Focussed on helping Girls build capacity for a sustainable future.',
    img: require('../images/Osekafore Olorunfemi.jpeg'),
  },
  {
    id: 8,
    name: 'Abraham Moses 🇳🇬',
    bio: 'He has been a Children and Teens Counselor for 13 years and has mentored and groomed several of them to discover their inherent abilities. Moses eagerly volunteers on a number of platforms that provide him with the opportunity to connect with children and teens. A better society is possible and he wants to be a part of creating it.',
    img: require('../images/Abraham Moses.jpeg'),
  },
  {
    id: 9,
    name: 'Dennis Odero Wao. 🇰🇪',
    bio: 'Denis Odero Wao As a Principal at Cornerstone Academy, Denis has had the privilege of grooming and guiding the students. He is a researcher with strong expertise in leadership with a keen interest in engaging in public interests and discuss. Denis is passionate about moulding the next generation and volunteers eagerly in transformational advocacy.',
    img: require('../images/Dennis Odero Wao.jpeg'),
  },
  {
    id: 10,
    name: 'Bolatito Osoko 🇺🇸',
    bio: "She is an experienced researcher in Cultural Diversities and Children and African literature and how these same cultivate, share and influence th lives and lifestyle of youngsters in society. Bolatito is a children's author and has 9 Books for children, with 'Larinka in Lagos' being her most widely read book. She was involved in UNICEF 's 70th anniversary campaign for West African Writers. Bolatito holds a BA in English and M.Ed in Early Childhood Education.",
    img: require('../images/Bolatito Osoko.jpeg'),
  },
   {
    id: 11,
    name: 'Olajide Ojeniyi 🇹🇿',
    bio: " He is a member of the Youth Advisory Group, World Bank -S4YE. Olajide 's commitment to change making is shaped by his work with underserved communities. He supports emerging young leaders and community groups in building the skills and influence needed to effect long term social change.",
    img: require('../images/Olajide Ojeniyi.jpeg'),
  },
  {
    id: 12,
    name: 'Freely Tanatswa Moyo 🇿🇼',
    bio: 'She is a dedicated advocate for mental wellness and drugs and substance abuse. Freely has a BSc in Social Work and engages several platforms for sensitizing families on debilitating social ills. She contributes to achieving United Nations Sustainable Development Goal 5 (Good health and well being).',
    img: require('../images/Freely Tanatswa Moyo.jpeg'),
  },
  {
    id: 13,
    name: 'Pauline John 🇰🇪',
    bio: 'A dedicated Educator and trauma healing facilitator with a passion for nurturing holistic growth, learning and  emotional well-being of children. Areas of Expertise include, Curriculum consultant Trauma healing and psychosocial support Group facilitation and Community Engagement as well as Child and Youth development.',
    img: require('../images/Pauline John.jpeg'),
  },
];
function Facilitators() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">The Team</p>
          <h1>Meet Our Facilitators</h1>
          <p>Experienced professionals passionate about helping families thrive.</p>
        </div>
      </section>

      {/* Facilitators Grid */}
      <section className="fac-page">
        <div className="fac-page-inner">
          <div className="fac-page-grid">
            {facilitators.map(f => (
              <div key={f.id} className="fac-page-card" onClick={() => setSelected(f)}>
                <div className="fac-page-img">
                  <img src={f.img} alt={f.name} />
                </div>
                <h3>{f.name}</h3>
                <p className="fac-page-title">{f.title}</p>
                <p className="fac-view">View Profile →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-head">
              <img src={selected.img} alt={selected.name} />
              <div>
                <h2>{selected.name}</h2>
                <p className="modal-title">{selected.title}</p>
              </div>
            </div>
            <p className="modal-bio">{selected.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Facilitators;