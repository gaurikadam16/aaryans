import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      
      {/* SECTION 1: HERO */}
      <section className="about-hero-block">
        <div className="about-container">
          <div className="hero-flex">
            <div className="hero-left">
              
              <h1 className="main-title">
                Innovating for a <span className="maroon-text">Sustainable Future</span>
              </h1>
              <p className="description-text">
                Aaryans Group of Companies is a global conglomerate dedicated to 
                transforming industries through technology, integrity, and vision.
              </p>
            </div>
            <div className="hero-right">
              <img src="/images/about.jpg" alt="Aaryans Group" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="about-identity-block">
        <div className="about-container">
          <div className="section-header-center">
            <h2 className="section-heading">About Us</h2>
            <div className="maroon-line"></div>
          </div>
          <div className="identity-grid-layout">
            <div className="id-col-bold">
              <h3>We create brand new <span className="maroon-text">corporate identities</span></h3>
            </div>
            <div className="id-col-text">
              <p><strong>Mr. Manohar Mukund Jagtap</strong>, resident of Pune, is leading the conglomerate under the umbrella of <strong>Aaryans Group of Companies</strong>.</p>
              <p> has vested interest in various fields of Manufacturing, Hospitality, Agriculture Produces, Entertainment, Media and News (OTT and Satellite channel), Sugar Manufacturing, Green Energy, Healthcare, food and Beverages, Import and Export, etc. to name a few.</p>
            </div>
            <div className="id-col-text">
              <p>Aaryans Group was Incorporated in <strong>2013</strong>, and has managed to get investment into India through Foreign Direct Investment and the said fund has been cleared for utilization by the concerned departments in November 2021.</p>
              <p>After much deliberation, this Group of young entrepreneurs, led by the dynamic <strong>Mrs. Smita Shitole</strong> and <strong>Mr. Manohar Mukund Jagtap</strong>and other experts of the various fields and sectors of business, has a vision for the future with commitment and focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION */}
      <section className="about-vm-block">
        <div className="about-container">
          <div className="vm-grid-split">
            <div className="vm-image-container">
              <img src="/images/vision.jpg" alt="Vision" className="vm-main-photo" />
              <div className="since-tag">
                <span>Since</span>
                <strong>2013</strong>
              </div>
            </div>
            <div className="vm-content-stack">
              <div className="vm-box">
                <div className="vm-icon-style"></div>
                <div className="vm-info-style">
                  <h4>Vision</h4>
                  <p>To achieve excellence in our industry as the​ leader, globally respected, financially sound and positioned to generate future value for Aaryans Group's stakeholders.</p>
                </div>
              </div>
              <div className="vm-box">
                <div className="vm-icon-style"></div>
                <div className="vm-info-style">
                  <h4>Mission</h4>
                  <p>To develop energy resources safely, profitably and responsibly to maximize value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES */}
{/* SECTION 4: VALUES (Premium Design) */}
      <section className="about-values-block">
        <div className="about-container">
          <div className="section-header-center">
            <span className="lead-tag">Our Ethics</span>
            <h2 className="section-heading">The Core <span className="maroon-text">Values</span></h2>
            <div className="maroon-line"></div>
            <p className="values-lead">
              At Aaryans Group, what we do is important — and how we do it is even more so. Guided by our values of integrity, innovation and investment, we work hard to earn the high regard of our partners, investors and other stakeholders around the world.
            </p>
          </div>

          <div className="values-card-grid">
            {/* Integrity */}
            <div className="v-card-item">
              <div className="v-icon-wrapper">
                <div className="icon-circle"></div>
                <span className="v-icon-main"></span>
              </div>
              <h4>Integrity</h4>
              <p>We demand integrity and personal accountability at every level of the company with an unwavering commitment to safety and environmental stewardship.</p>
              <div className="card-hover-line"></div>
            </div>

            {/* Innovation */}
            <div className="v-card-item">
              <div className="v-icon-wrapper">
                <div className="icon-circle"></div>
                <span className="v-icon-main"></span>
              </div>
              <h4>Innovation</h4>
              <p>We promote innovation that improves processes and results. Setting high standards for everyone who works at Occidental, we reward top performance and ingenuity.</p>
              <div className="card-hover-line"></div>
            </div>

            {/* Investment */}
            <div className="v-card-item">
              <div className="v-icon-wrapper">
                <div className="icon-circle"></div>
                <span className="v-icon-main"></span>
              </div>
              <h4>Investment</h4>
              <p>We strategically invest in our assets around the world, and we invest in our employees to ensure they have every opportunity to grow professionally and excel.</p>
              <div className="card-hover-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP (The Main Attractive Section) */}
      <section className="leadership-section">
        <div className="about-container">
          <div className="leadership-header">
            <span className="lead-tag">Leadership</span>
            <h2 className="lead-main-title">Guidance that fuels <span className="maroon-text">Growth</span></h2>
            <p className="lead-subtitle">Our leadership team combines decades of experience with a shared vision for excellence and innovation.</p>
          </div>

          <div className="leadership-grid">
            {/* SMITA JAGTAP */}
            <div className="lead-card">
              <div className="lead-image-box">
                <img src="/images/smitajagtap.jpg" alt="Smita Jagtap" />
              </div>
              <div className="lead-info">
                <h4>Smita Jagtap</h4>
                <p className="designation">Managing Director</p>
              </div>
            </div>

            {/* MUKUND JAGTAP */}
            <div className="lead-card">
              <div className="lead-image-box">
                <img src="/images/mukundjagtap.jpg" alt="Mukund Jagtap" />
              </div>
              <div className="lead-info">
                <h4>Mukund Jagtap</h4>
                <p className="designation">Chairman</p>
              </div>
            </div>

            {/* MANOHAR M. JAGTAP */}
            <div className="lead-card">
              <div className="lead-image-box">
                <img src="/images/manoharjagtap.jpg" alt="Manohar M. Jagtap" />
              </div>
              <div className="lead-info">
                <h4>Manohar M. Jagtap</h4>
                <p className="designation">CEO & CFO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;