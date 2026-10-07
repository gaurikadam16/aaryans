import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Navbar'; 
import Home from './Home'; 
import Footer from './Footer'; 

// Page Components
import AboutUs from './pages/AboutUs'; 
import Chairman from './pages/Chairman'; 
import ManagingDirector from './pages/ManagingDirector'; 
import CEODesk from './pages/CEODesk'; 
import Career from './pages/Career'; 
import ProjectDetail from './pages/ProjectDetail';
import ContactForm from './pages/ContactForm'; 
import Awards from './pages/Awards';
import OurTeam from './pages/OurTeam';

import Gallery from './pages/Gallery'; 

// Coming Soon (countdown) page
import ComingSoon, { LAUNCH_DATE } from './pages/ComingSoon';

import './App.css'; 

function App() {
  // Show the countdown until 8 Oct 2026, 10:00 AM IST, then the full website
  const [isLive, setIsLive] = useState(Date.now() >= LAUNCH_DATE.getTime());

  if (!isLive) {
    return <ComingSoon onLaunch={() => setIsLive(true)} />;
  }

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <main style={{ backgroundColor: '#ffffff' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/chairman-desk" element={<Chairman />} />
            <Route path="/md-desk" element={<ManagingDirector />} />
            <Route path="/ceo-desk" element={<CEODesk />} />
            <Route path="/career" element={<Career />} />
            <Route path="/awards" element={<Awards />} />

            {/* ✅ ADD THE GALLERY ROUTE HERE */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;