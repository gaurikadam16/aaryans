import React, { useEffect } from 'react';
import './ExecutiveDesk.css';

const ManagingDirector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const letterheadImg = "/images/Letterhead.png";
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
            <h1 className="hero-quote">"Strategic Leadership, Sustainable Growth"</h1>
            <img src="/images/smitaj.png" alt="Managing Director" className="portrait-main" />
          </div>
        </div>
      </section>

      {/* SECTION 2: TITLE */}
      <section className="chairman-title-section">
        <div className="chairman-container">
          <h2 className="title-text">Managing Director's Message</h2>
          <div className="year-box"><span>2025</span></div>
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
            <p className="salutation">The Backbone of Aaryans Group of Companies</p>
            
            <div className="message-body">
              <p>
                As the managing director of the Aaryans Group of Companies, I, Smita Shitole, consider myself fortunate and privileged to be involved with Aaryans Group and to have nurtured it from birth. Aaryans has been working on several projects, of which I would like to outline a few.
              </p>

              <h4 className="sub-heading">Green Hydrogen</h4>
              <p>
                The transportation industry, which is heavily reliant on fossil fuels for energy, is responsible for an astounding 20% of worldwide carbon dioxide emissions. As carbon emissions and global warming take front stage in news reports, countries are searching for alternative fuel sources and are leaning toward hydrogen-powered technology as a clean, affordable, and safe alternative to fossil fuels.
              </p>
              <p>
                The hydrogen-powered vehicles, which use hydrogen gas to power an electric motor and only produce heat and water as byproducts, are the solution. As per the world forecast, by 2050, hydrogen might account for up to 350 million tons annually of the world's hydrogen consumption. In Maharashtra, we plan to build a sizeable green hydrogen production facility. The plant will produce about 2000 tons of green hydrogen annually. The main obstacles to incorporating hydrogen into the energy sector are storage, distribution, and transportation. As part of our forward integration plan in this industry, Aaryans is producing cryogenic storage tanks and containers.
              </p>

              <h4 className="sub-heading">Semiconductor O.S.A.T. and I.D.M.</h4>
              <p>
                Aaryans is working on the O.S.A.T. facility, which is anticipated to be operational by the end of 2025. After establishing the O.S.A.T. facility in the first phase, the group will work to achieve I.D.M. status. Aaryans, in collaboration with a South Korean partner, wants to serve both domestic and international markets.
              </p>
              <p>
                Additionally, Aaryans has an advantage over the other companies because it has its own source of basic and essential raw materials, which allows us to operate more efficiently. Aaryans aspires to make India self-sustainable in the field of semiconductor by 2030. We have collaborated with worldwide leaders on technology transfers, R&D, and market expansion. Our optical semiconductor business aims to meet the expanding demand for sensing and medical equipment.
              </p>
              <p>
                FAB was brought in to manage the entire chain of raw silica from mother earth to a wide range of silicon (INGOT) to meet the need for silicon and maintain wafer manufacturing. Integrated module manufacturing is another venture to meet the unique needs of the integrated devices. Discrete fabrication of semiconductor devices would help to satisfy the needs under a single banner.
              </p>

              <h4 className="sub-heading">A Global Vision</h4>
              <p>
                These two pet projects will generate around 10,000 direct and indirect employments. We are proud to be one of India's largest employers and place a high value on our employees. Joining our expanding group is open to everyone whose ideologies and interests align with our objectives. Together, we can grow more powerful and accomplish greater things.
              </p>
              
              <div className="signature-area">
                <div className="sig-line"></div>
                <p>With warm regards,</p>
                <h4 className="sig-name">Smita Shitole</h4>
                <p className="sig-title">Managing Director</p>
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

export default ManagingDirector;