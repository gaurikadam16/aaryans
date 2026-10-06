// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const projectData = {
  "Semiconductor / Micro Electronics": [
    "Aaryans Fab Briefcase",
    "Moscon Product"
  ],
  "Electronics Manufacturing": [
    "PCB Boards",
    "Integrated Circuits (IC)",
    "LED Display"
  ],
  "Robotics and Automations": [
    "Robotic Dog",
    "Robotic Arm",
    "Humanoid Robot - Multifunctional",
    "Information Robots",
    "Robotic Kit - Education"
  ],
  "Artificial Intelligence": [],
  "Space Technology": [
    "Space Debris",
    "Space Debris (Lab Demo)"
  ],
  "Satellites": [
    "Psudo Satellite",
    "LEO Satellite",
    "UEO / GEO satellite",
    "Satellite"
  ],
  "Launch vehicles": [
    "Solid Fuel Rockets 6 feet",
    "Solid Fuel Rockets 8 feet",
    "Solid Fuel Rockets 12 feet",
    "Solid Fuel Rockets 18 feet - 3 stage",
    "5 Stage Rocket Vehicle - Prototype",
    "Nuclear Fusion Rocket Engine - Prototype"
  ],
  "Aerospace": [
    "Agriculture Drone",
    "Surveillance Drone",
    "Artificial Intelligence Drone",
    "Mini Drone",
    "VTOL (2 meter)",
    "VTOL (4 meter)"
  ],
  "Defence Technology": [
    "Jet Fuel Fix Wing Plane",
    "Brush Less Motor Planes",
    "RC Plane",
    "Bullet Proof Jackets",
    "Interceptor Drones"
  ],
  "Electric 2 wheeler": [
    "E2W Chassis",
    "E2W Battery Management System",
    "E2W Power Trail"
  ],
  "Electric 4 wheeler": [
    "E4W Chassis",
    "E4W Battery Management System",
    "E4W Power Trail"
  ],
  "Hydrogen Economy": [
    "Mukti Vehicle",
    "Bhakti Vehicle",
    "Rocket Engine",
    "Hydrogen Engine (UAV)",
    "Soham Plant"
  ],
  "Quantum Technology": [
    "Quantum Navigation",
    "Quantum Clock",
    "Quantum Sensor Imaging",
    "Quantum Communication"
  ],
  "Renewable Energy": [
    "Quantum Solar Panel",
    "Topcon Solar Panel",
    "Bifacial Solar Panel",
    "Wind Turbines & Wave Energy"
  ],
  "Digital Infrastructure": [
    "Data Centre Set Up"
  ],
  "Information Technology": [
    "Aaryans Search Engine - Lookup",
    "Entertainment App - Idiot Box",
    "Financial App - My Treasury"
  ],
  "Agri Tech": [
    "Hydroponic Farming",
    "Organic Farming"
  ],
  "Health care tech": [
    "Injectables",
    "Active Pharmaceutical Ingredients",
    "Intravenous Fluids"
  ],
  "Graphene": [
    "Graphene Oxide Material",
    "Graphene Ink",
    "Graphene Thermal Material"
  ]
};

// Explicit slug mapping to ensure 100% route-to-data fidelity
const slugOverrides = {
  // Direct category clicks
  "Artificial Intelligence": "artificial-intelligence",
  
  // Specific projects
  "Aaryans Fab Briefcase": "aaryans-fab-briefcase",
  "Moscon Product": "moscon-product",
  "PCB Boards": "pcb-boards",
  "Integrated Circuits (IC)": "integrated-circuits",
  "LED Display": "led-display",
  "Robotic Dog": "robotic-dog",
  "Robotic Arm": "robotic-arm",
  "Humanoid Robot - Multifunctional": "humanoid-robot-multifunctional",
  "Information Robots": "information-robots",
  "Robotic Kit - Education": "robotic-kit-education",
  "Space Debris": "space-debris",
  "Space Debris (Lab Demo)": "space-debris-lab-demo",
  "Psudo Satellite": "psudo-satellite",
  "LEO Satellite": "leo-satellite",
  "UEO / GEO satellite": "ueo-geo-satellite",
  "Satellite": "satellite",
  "Solid Fuel Rockets 6 feet": "solid-fuel-rockets-6-feet",
  "Solid Fuel Rockets 8 feet": "solid-fuel-rockets-8-feet",
  "Solid Fuel Rockets 12 feet": "solid-fuel-rockets-12-feet",
  "Solid Fuel Rockets 18 feet - 3 stage": "solid-fuel-rockets-18-feet-3-stage",
  "5 Stage Rocket Vehicle - Prototype": "5-stage-rocket-vehicle-prototype",
  "Nuclear Fusion Rocket Engine - Prototype": "nuclear-fusion-rocket-engine-prototype",
  "Agriculture Drone": "agriculture-drone",
  "Surveillance Drone": "surveillance-drone",
  "Artificial Intelligence Drone": "artificial-intelligence-drone",
  "Mini Drone": "mini-drone",
  "VTOL (2 meter)": "vtol-2-meter",
  "VTOL (4 meter)": "vtol-4-meter",
  "Jet Fuel Fix Wing Plane": "jet-fuel-fix-wing-plane",
  "Brush Less Motor Planes": "brush-less-motor-planes",
  "RC Plane": "rc-plane",
  "Bullet Proof Jackets": "bullet-proof-jackets",
  "Interceptor Drones": "interceptor-drones",
  "E2W Chassis": "e2w-chassis",
  "E2W Battery Management System": "e2w-battery-management-system",
  "E2W Power Trail": "e2w-power-trail",
  "E4W Chassis": "e4w-chassis",
  "E4W Battery Management System": "e4w-battery-management-system",
  "E4W Power Trail": "e4w-power-trail",
  "Mukti Vehicle": "mukti-vehicle",
  "Bhakti Vehicle": "bhakti-vehicle",
  "Rocket Engine": "rocket-engine-hydrogen",
  "Hydrogen Engine (UAV)": "hydrogen-engine-uav",
  "Soham Plant": "soham-plant",
  "Quantum Navigation": "quantum-navigation",
  "Quantum Clock": "quantum-clock",
  "Quantum Sensor Imaging": "quantum-sensor-imaging",
  "Quantum Communication": "quantum-communication",
  "Quantum Solar Panel": "quantum-solar-panel",
  "Topcon Solar Panel": "topcon-solar-panel",
  "Bifacial Solar Panel": "bifacial-solar-panel",
  "Wind Turbines & Wave Energy": "wind-turbines-wave-energy",
  "Data Centre Set Up": "data-centre-set-up",
  "Aaryans Search Engine - Lookup":"indian-search-engine",
  "Entertainment App - Idiot Box": "entertainment-app-idiot-box",
  "Financial App - My Treasury": "financial-app-my-treasury",
  "Hydroponic Farming": "hydroponic-farming",
  "Organic Farming": "organic-farming",
  "Injectables": "injectables",
  "Active Pharmaceutical Ingredients": "active-pharmaceutical-ingredients",
  "Intravenous Fluids": "intravenous-fluids",
  "Graphene Oxide Material": "graphene-oxide-material",
  "Graphene Ink": "graphene-ink",
  "Graphene Thermal Material": "graphene-thermal-material"
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => setIsMobile(window.innerWidth <= 1100);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveCategory(null);
    window.scrollTo(0, 0);
  };

  const toggleDropdown = (name) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const toggleCategory = (catKey) => {
    setActiveCategory(activeCategory === catKey ? null : catKey);
  };

  const resolveSlug = (text) => {
    if (slugOverrides[text]) return slugOverrides[text];
    return text
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/[/\\#,+()$~%.'":*?<>{}]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  return (
    <>
      <div className={`nav-overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <nav className={`nav-container ${scrolled ? 'nav-scrolled' : 'nav-initial'}`}>
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Aaryans_logo_new_01.jpg" alt="Aaryans Group" />
          </Link>

          <div 
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link-item" onClick={closeMenu}>HOME</Link>

            {/* OUR PROJECTS MEGA DROPDOWN */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => !isMobile && setActiveDropdown('project')}
              onMouseLeave={() => !isMobile && (setActiveDropdown(null), setActiveCategory(null))}
              onClick={() => toggleDropdown('project')}
            >
              <span className="nav-link-item">OUR PROJECTS <small className="drop-icon">▼</small></span>

              {activeDropdown === 'project' && (
                <div className="project-simple-dropdown" onClick={(e) => e.stopPropagation()}>
                  <div className="mega-grid">
                    {Object.entries(projectData).map(([category, items]) => {
                      const hasSubItems = items && items.length > 0;
                      const isOpen = activeCategory === category;

                      return (
                        <div key={category} className="mega-col item-group">
                          {hasSubItems ? (
                            <>
                              <div
                                className={`item-label ${isOpen ? 'active-label' : ''}`}
                                onClick={() => toggleCategory(category)}
                                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                              >
                                <span>{category.toUpperCase()}</span>
                                <span className="arrow-small" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                                  {isOpen ? '▲' : '▼'}
                                </span>
                              </div>

                              {isOpen && (
                                <div className="sub-menu-list">
                                  {items.map((item, i) => (
                                    <Link 
                                      key={i} 
                                      to={`/project/${resolveSlug(item)}`} 
                                      onClick={closeMenu}
                                    >
                                      {item.replace(/^E[24]W\s+/, '')}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link 
                              to={`/project/${resolveSlug(category)}`} 
                              className="item-label single-link" 
                              onClick={closeMenu}
                            >
                              {category.toUpperCase()}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link to="/career" className="nav-link-item" onClick={closeMenu}>CAREER</Link>
            <Link to="/gallery" className="nav-link-item" onClick={closeMenu}>GALLERY</Link>

            {/* ABOUT US DROPDOWN */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => !isMobile && setActiveDropdown('about')}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
              onClick={() => toggleDropdown('about')}
            >
              <span className="nav-link-item">ABOUT US <small className="drop-icon">▼</small></span>

              {activeDropdown === 'about' && (
                <div className="standard-dropdown" onClick={(e) => e.stopPropagation()}>
                  <Link to="/about" onClick={closeMenu}>About Us</Link>
                  <Link to="/our-team" onClick={closeMenu}>Our Team</Link>
                  <Link to="/chairman-desk" onClick={closeMenu}>Chairman Desk</Link>
                  <Link to="/md-desk" onClick={closeMenu}>Managing Director (MD) Desk</Link>
                  <Link to="/ceo-desk" onClick={closeMenu}>CEO Desk</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="nav-cta-btn" onClick={closeMenu}>GLOBAL INQUIRY</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;