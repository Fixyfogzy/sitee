import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Facilitators from './pages/Facilitators';
import Register from './pages/Register';
import Privacy from './pages/Privacy';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'courses': return <Courses setPage={setPage} />;
      case 'facilitators': return <Facilitators setPage={setPage} />;
      case 'register': return <Register setPage={setPage} />;
      case 'privacy': return <Privacy setPage={setPage} />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;