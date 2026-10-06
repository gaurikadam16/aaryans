import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    window.scrollTo(0, 0);
  };

  const toggleDropdown = (name) => {
    if (window.innerWidth <= 1100) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const projectCategories = {
    agriculture: ["Hydroponic Farming", "Organic Farming", "Seeds & Fertilisers", "Sugar Production", "Jaggery Production"],
    manufacturing: ["Automobiles & EV", "Cell Phone", "Drone Mfg", "Solar Panels", "Space Vehicles", "Steel & Metal","Solar Cell","Electrolyzers For Hydrogen Fuel","Ready-Made Garments"],
    industry: ["Battery Mfg", "Chemical Industries", "Petroleum Industry", "Power Storage"],
    mining: ["Crypto Mining", "Heavy Metal", "Precious Elements", "Refinery"],
    power: ["Biofuel Generation", "CNG Generation", "Biogas Generation", "Biomass Generation", "Hydrogen Fuel (Green Hydrogen)", "Solar Energy", "Thermal Solar Power", "Waste Management For Power Generation"],
    infrastructure: ["Hydrogen Systems", "Infrastructure Dept", "Real Estate"],
    tourism: ["Amusement Park And Water Park", "Local Tourism", "Museums", "Science Park", "Space Tourism", "Underwater Tourism", "Tourism Industry And Services"],
    education: ["Aviation Education And Administration University", "Broadcasting Engineering Education", "Education Sector (Practical Knowledge-Based)", "Robotics Education", "Sport University"],
    healthcare: ["Health Services Multi-Speciality Hospital", "Medicine Industry", "Specialist Cancer Hospital"],
    services: ["Aadya Sanrachna (Business Analysis)", "Air Cab Services", "Aviation Sector", "Cruise Shipping And Program Business", "Food And Beverage", "Hospitality", "Hovercraft Services", "Import And Export Services", "Marketing And Advertising Services", "Shipping Business", "Sea And River Aviation"],
    media: ["Aatharv Events", "Agc Sports", "Sumukh Production ( Marathi Film Production House)", "Vishwavinayak Production (Film Production House)", "News Uncut (Marathi News Channel)", "OTT Apps: “Idiot box” And “Saltpix”", "Praja Jagruti (Marathi Newspaper)","Sumukh Chitra (Theatre Company)", "Swarang Infotainment Channel"],
    publications: ["Chitran Magazine (Education In Arts And Drawing)", "Onecut (Entertainment Magazine)", "Masters Stroke (Business Magazine)","Swaroop Creation (Book Publishing And Printing House)"],
    tech: ["Artificial Intelligence", "Aeronautical And Astronautical Engineering", "Financial Services", "Organic Semiconductor", "Integrated Device Manufacturer", "Indian Search Engine", "Information Technology Services And Business", "Optical Semiconductor Manufacturing", "Robotics", "Shunya Awkasa - Space Debris Management", "Semiconductor Fab", "Space Services", "Wave Energy Generation"]
  };

  const createSlug = (text) => {
    return text.toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/[:“”'"]/g, '') 
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const renderSubMenu = (key) => (
    activeSubDropdown === key && (
      <div className="sub-menu-list">
        {projectCategories[key].map((item, i) => (
          <Link key={i} to={`/project/${createSlug(item)}`} onClick={closeMenu}>
            {item}
          </Link>
        ))}
      </div>
    )
  );

  return (
    <>
      <div className={`nav-overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <nav className={`nav-container ${scrolled ? 'nav-scrolled' : 'nav-initial'}`}>
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Aaryans_logo_new_01.jpg" alt="Aaryans Group" />
          </Link>
          
          <div className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span><span className="bar"></span><span className="bar"></span>
          </div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link-item" onClick={closeMenu}>HOME</Link>
            
            <div className="dropdown-wrapper" 
                 onMouseEnter={() => window.innerWidth > 1100 && setActiveDropdown('project')}
                 onMouseLeave={() => window.innerWidth > 1100 && (setActiveDropdown(null), setActiveSubDropdown(null))}
                 onClick={() => toggleDropdown('project')}>
              <span className="nav-link-item">OUR PROJECT <small className="drop-icon">▼</small></span>
              
              {activeDropdown === 'project' && (
                <div className="mega-menu" onClick={(e) => e.stopPropagation()}>
                  <div className="mega-grid">
                    <div className="mega-col">
                      <h4 className="col-main-heading">CORE INDUSTRIES</h4>
                      {["agriculture", "manufacturing", "industry", "mining", "power"].map(key => (
                        <div key={key} className="item-group">
                          <div className={`item-label ${activeSubDropdown === key ? 'active-label' : ''}`}
                               onClick={() => setActiveSubDropdown(activeSubDropdown === key ? null : key)}>
                            {key === "power" ? "POWER GENERATION" : key.toUpperCase()} <span className="arrow-small">{activeSubDropdown === key ? '▲' : '▼'}</span>
                          </div>
                          {renderSubMenu(key)}
                        </div>
                      ))}
                    </div>

                    <div className="mega-col">
                      <h4 className="col-main-heading">DEVELOPMENT</h4>
                      {["infrastructure", "tourism", "education", "healthcare"].map(key => (
                        <div key={key} className="item-group">
                          <div className={`item-label ${activeSubDropdown === key ? 'active-label' : ''}`}
                               onClick={() => setActiveSubDropdown(activeSubDropdown === key ? null : key)}>
                            {key.toUpperCase()} <span className="arrow-small">{activeSubDropdown === key ? '▲' : '▼'}</span>
                          </div>
                          {renderSubMenu(key)}
                        </div>
                      ))}
                    </div>

                    <div className="mega-col">
                      <h4 className="col-main-heading">MEDIA & TECH</h4>
                      {["services", "media", "publications", "tech"].map(key => (
                        <div key={key} className="item-group">
                          <div className={`item-label ${activeSubDropdown === key ? 'active-label' : ''}`}
                               onClick={() => setActiveSubDropdown(activeSubDropdown === key ? null : key)}>
                            {key.toUpperCase()} <span className="arrow-small">{activeSubDropdown === key ? '▲' : '▼'}</span>
                          </div>
                          {renderSubMenu(key)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/career" className="nav-link-item" onClick={closeMenu}>CAREER</Link>

            {/* THE GALLERY LINK */}
            <Link to="/gallery" className="nav-link-item" onClick={closeMenu}>GALLERY</Link>
            <div className="dropdown-wrapper"
     onMouseEnter={() => window.innerWidth > 1100 && setActiveDropdown('about')}
     onMouseLeave={() => window.innerWidth > 1100 && setActiveDropdown(null)}
     onClick={() => toggleDropdown('about')}>
  <span className="nav-link-item">ABOUT US <small className="drop-icon">▼</small></span>
  
  {activeDropdown === 'about' && (
    <div className="standard-dropdown" onClick={(e) => e.stopPropagation()}>
      <Link to="/about" onClick={closeMenu}>About Us</Link>
      
      {/* ADDED OUR TEAM LINK HERE */}
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