import React, { useEffect } from 'react';
import './ExecutiveDesk.css';

const Chairman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const letterheadImg = "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Letterhead.jpg";
  const heroBgImg = "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/bg_i2.jpg";

  return (
    <div className="chairman-page-wrapper">
      {/* SECTION 1: HERO */}
      <section 
        className="chairman-hero-block"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className="chairman-container">
          <div className="hero-main-content">
            <h1 className="hero-quote">"Building a Stronger Future, Together."</h1>
            <img src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/mukund.png" alt="Chairman" className="portrait-main" />
          </div>
        </div>
      </section>

      {/* SECTION 2: TITLE */}
      <section className="chairman-title-section">
        <div className="chairman-container">
          <h2 className="title-text">Chairman's Message</h2>
          <div className="year-box"><span>2026</span></div>
        </div>
      </section>

      {/* SECTION 3: THE VIDEO-STYLE LETTERHEAD */}
      <section className="message-canvas-section">
        <div 
          className="letterhead-paper-container" 
          style={{ "--bg-img": `url(${letterheadImg})` }}
        >
          {/* LAYER 1: FIXED LOGO HEADER */}
          <div className="letterhead-header-fixed"></div>

          {/* LAYER 2: SCROLLABLE MESSAGE CONTENT */}
          <div className="letterhead-scroll-content">
            <h3 className="letter-subject">To Whom So Ever It May Concern</h3>
            <p className="salutation">Respected All,</p>
            
            <div className="message-body">
              <p>
                As Chairman of Aaryans Group of Companies, I am privileged to lead an expansive and forward-thinking conglomerate that is actively shaping the future across multiple high-impact sectors. Our diverse portfolio spans Agriculture and Infrastructure, Green Energy, Artificial Intelligence, Finance, Education, Healthcare, Media & Entertainment, Manufacturing, and Automobile & Electric Vehicles, among many others. Each sector represents our commitment to not only pursuing business excellence but also driving sustainable, innovative solutions that positively impact the world.
              </p>
              <p>
                Aaryans Group has always believed that true leadership comes from creating value that extends beyond profits. In Agriculture and Infrastructure, we are focused on modernizing these critical industries through technology and sustainable practices, ensuring food security and building resilient infrastructures that can support future growth. In the Green Energy sector, our investments in renewable energy are part of our pledge to combat climate change and provide cleaner, more efficient energy solutions.
              </p>
              <p>
                The application of Artificial Intelligence across various facets of our business helps us deliver smarter, more efficient outcomes, whether in finance, healthcare, or manufacturing. In Finance, we work to create inclusive financial solutions that empower individuals and businesses alike. Our Education and Healthcare initiatives are equally important, as we invest in solutions that enhance access to quality education and healthcare services, driving long-term social value.
              </p>
              <p>
                Our Media & Entertainment division continues to push the boundaries of creativity and storytelling, offering content that informs, entertains, and connects audiences around the globe. In Manufacturing, we focus on innovation and quality, producing products that are foundational to economic development and technological advancement.
              </p>
              <p>
                The Automobile and Electric Vehicle segment is another key area where we are investing in the future, creating cutting-edge solutions for sustainable transportation that help shape a cleaner, more efficient world.
              </p>
              <p>
                As Chairman, my goal is to guide Aaryans Group with a vision that embraces the power of collaboration, technology, and sustainability. We are committed to delivering results that not only drive business growth but also foster social and environmental responsibility. By nurturing innovation and empowering our teams, we continue to break new ground across all sectors.
              </p>
              <p>
                I look forward to the continued success of Aaryans Group and the exciting opportunities ahead as we expand our reach and make meaningful contributions to the global economy.
              </p>
              
              <div className="signature-area">
                <div className="sig-line"></div>
                <p>Sincerely,</p>
                <h4 className="sig-name">Mr. Mukund Vishnu Jagtap</h4>
                <p className="sig-title">Chairman</p>
                <p className="sig-title">Aaryans Group of Companies</p>
              </div>
            </div>
          </div>

          {/* LAYER 3: FIXED CONTACT FOOTER */}
          <div className="letterhead-footer-fixed"></div>
        </div>
      </section>
    </div>
  );
};

export default Chairman;