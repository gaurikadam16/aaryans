import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  // Verified Google Maps Search URL
  const address = "Aaryans Media House, Bavdhan, Pune, Maharashtra 411021";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRANDING */}
        <div className="footer-branding">
          <img 
            src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Aaryans_logo_new_01.jpg" 
            alt="Aaryans Group" 
            className="footer-logo" 
          />
          <p className="footer-description">
           Aaryans Group is serving millions of customers across Agriculture & Farming, Gold Refinery, Metal Production, Automobiles, Chemical, Bio-Fuel, Green Energy, Pharmaceuticals & Healthcare, Sugar Production, Waste Management, Import and Export, Education Sector, Marketing and Advertising, Aviation Industry, Business Analysis Service, Tourism, Petroleum Industry, Space Vehicles , Satellite Channel, Power, infrastructure, steel, media & entertainment, hospitality and IT sectors.
          </p>
        </div>

        {/* COLUMN 2: INDUSTRIES */}
        <div>
          <h4 className="footer-header">Industries</h4>
          <Link to="/sectors" className="footer-link">Agriculture / Organic</Link>
          <Link to="/sectors" className="footer-link">Food & Hospitality</Link>
          <Link to="/sectors" className="footer-link">Environmental & Energy</Link>
          <Link to="/sectors" className="footer-link">Infrastructure & Real Estate</Link>
          <Link to="/sectors" className="footer-link">Information Technology</Link>
          <Link to="/sectors" className="footer-link">Manufacturing</Link>
          <Link to="/sectors" className="footer-link">Media & Entertainment</Link>
          <Link to="/sectors" className="footer-link">Tourism</Link>
          
        </div>

        {/* COLUMN 3: QUICK LINKS */}
        <div>
          <h4 className="footer-header">Quick Links</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/career" className="footer-link">Career</Link>
          
        </div>

        {/* COLUMN 4: CONTACT US */}
        <div className="footer-contact-section">
          <h4 className="footer-header">Contact Us</h4>
          <p className="contact-info" >
            Head Office:
          </p>
          
          {/* MAP LINK */}
          <a 
            href={mapSearchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-info"
            style={{ textDecoration: 'none', display: 'block', marginBottom: '12px' }}
          >
            Aaryans Media House, Bavdhan,<br/> Pune, Maharashtra 411021
          </a>

          {/* PHONE LINK */}
          <p className="contact-info">
            <a 
              href="tel:+917744038427" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}
            >
              +91 774 403 8427
            </a>
          </p>

          {/* EMAIL LINK - UPDATED FOR MAXIMUM COMPATIBILITY */}
          <p className="contact-info">
            <a 
              href="mailto:contact@aaryansgroup.org" 
              className="footer-email-link"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'inline-block',
                cursor: 'pointer' 
              }}
            >
              contact@aaryansgroup.org
            </a>
          </p>

          <p className="contact-info" style={{ marginTop: '12px' }}>Keep in Touch</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Aaryans Group of Companies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
