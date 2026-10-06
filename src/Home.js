import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';

// Style Imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Home.css';

// Counter Component
const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const suffix = value.includes('+') ? '+' : value.includes('K') ? 'K' : '';
    return Math.floor(latest) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, parseFloat(value), { 
      duration: duration, 
      ease: "easeOut" 
    });
    return controls.stop;
  }, [value, count, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const Home = () => {
  const [modalData, setModalData] = useState(null);

  const createSlug = (text) => {
    return text.toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/[:“”'"]/g, '') 
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const subItemsMap = {
    "Agriculture Sector": ["Hydroponic Farming", "Organic Farming", "Seeds & Fertilisers", "Sugar Production", "Jaggery Production"],
    "Manufacturing Sector": ["Automobiles & EV", "Cell Phone", "Drone Mfg", "Solar Panels", "Space Vehicles", "Steel & Metal"],
    "Mining And Refineries": ["Crypto Mining", "Heavy Metal", "Precious Elements", "Refinery"],
    "Power Generation": ["Biofuel Generation", "CNG Generation", "Biogas Generation", "Biomass Generation", "Hydrogen Fuel (Green Hydrogen)", "Solar Energy", "Thermal Solar Power", "Waste Management For Power Generation"],
    "Infrastructure & RE": ["Hydrogen Systems", "Infrastructure Dept", "Real Estate"],
    "Tourism Sector": ["Amusement Park And Water Park", "Local Tourism", "Museums", "Science Park", "Space Tourism", "Underwater Tourism", "Tourism Industry And Services"],
    "Education Sector": ["Aviation Education And Administration University", "Broadcasting Engineering Education", "Education Sector (Practical Knowledge-Based)", "Robotics Education", "Sport University"],
    "Healthcare Sector": ["Health Services Multi-Speciality Hospital", "Medicine Industry", "Specialist Cancer Hospital"],
    "Service Sector": ["Aadya Sanrachna (Business Analysis)", "Air Cab Services", "Aviation Sector", "Cruise Shipping And Program Business", "Food And Beverage", "Hospitality", "Hovercraft Services", "Import And Export Services", "Marketing And Advertising Services", "Shipping Business", "Sea And River Aviation"],
    "Media & Entertainment": ["Aatharv Events", "Agc Sports", "Sumukh Production ( Marathi Film Production House)", "Vishwavinayak Production (Film Production House)", "News Uncut (Marathi News Channel)", "OTT Apps: “Idiot box” And “Saltpix”", "Praja Jagruti (Marathi Newspaper)","Sumukh Chitra (Theatre Company)", "Swarang Infotainment Channel"],
    "Publication's": ["Chitran Magazine (Education In Arts And Drawing)", "Onecut (Entertainment Magazine)", "Masters Stroke (Business Magazine)","Swaroop Creation (Book Publishing And Printing House)"],
    "Cutting-Edge Tech": ["Artificial Intelligence", "Aeronautical And Astronautical Engineering", "Financial Services", "Organic Semiconductor", "Integrated Device Manufacturer", "Indian Search Engine", "Information Technology Services And Business", "Optical Semiconductor Manufacturing", "Robotics", "Shunya Awkasa - Space Debris Management", "Semiconductor Fab", "Space Services", "Wave Energy Generation"]
  };

  const handleOpenModal = (title) => {
    setModalData({
      title: title,
      links: subItemsMap[title] || []
    });
  };

  const heroSlides = [
    {
      image: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/hero1.jpg",
      overline: "News Uncut",
      title: "Voice of the People, Rhythm of the Soul.",
      subtext: "Delivering raw, unfiltered perspectives and real stories."
    },
    {
      image: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/hero2.jpg",
      overline: "Aaryans Group",
      title: "Forging Strength and adding value to the economy.",
      subtext: "Pioneering sustainable ventures across multiple industries."
    }
  ];

  const industryCategories = [
    {
      name: "Core Industries",
      items: [
        { title: "Agriculture Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/agrii.jpg" },
        { title: "Manufacturing Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Manufacturing.jpg" },
        { title: "Mining And Refineries", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/mining.jpg" },
        { title: "Power Generation", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/powerr.jpg" }
      ]
    },
    {
      name: "Development",
      items: [
        { title: "Infrastructure & RE", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/infra.jpg" },
        { title: "Tourism Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/tour.jpg" },
        { title: "Education Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/education.jpg" },
        { title: "Healthcare Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/health.jpg" }
      ]
    },
    {
      name: "Service & Tech",
      items: [
        { title: "Service Sector", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/service.jpg" },
        { title: "Media & Entertainment", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/media.jpg" },
        { title: "Publication's", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/book.jpg" },
        { title: "Cutting-Edge Tech", img: "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/cutting.jpg" }
      ]
    }
  ];

  const uniquenessSectors = [
    { title: "Integrated Innovation", desc: "We pride ourselves on being at the forefront of innovation, seamlessly integrating cutting-edge technologies and strategies across industries to drive continuous improvement and growth."},
    { title: "Strategic Partnerships", desc: "We build lasting partnerships with our clients, functioning not just as service providers but as strategic collaborators invested in the long-term success of their businesses across diverse industries." },
    { title: "Cross-Industry Expertise", desc: "Our unparalleled advantage lies in our ability to navigate and excel across diverse industries, leveraging cross-industry insights to bring a unique perspective to every project." },
    { title: "Future-Forward Vision", desc: "Anticipating future trends, we are not just content creators; we are visionaries, shaping the future of media and entertainment through groundbreaking ideas, technologies, and experiences." }
  ];

  const ventureLogos = [
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Prajajagruk.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/sumukhchitra.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/AGC-sports.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/saltpix.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/uncutlogo.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/SWARANGTvLogo.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/AADYAAVIATIONS.jpg",
    "https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/sumuklogo.jpg"
  ];

  return (
    <div className="home-container">
      {/* SECTION 1: HERO */}
      {/* SECTION 1: HERO */}
<section className="hero-section">
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    speed={1000}
    autoplay={{ delay: 6000, disableOnInteraction: false }}
    loop={true}
    className="hero-swiper"
  >
    {heroSlides.map((slide, index) => (
      <SwiperSlide key={index} className="hero-swiper-slide">
        {({ isActive }) => (
          <div className="hero-slide-item">
            <motion.img 
              src={slide.image} 
              alt={slide.overline} 
              className="hero-bg-img"
              initial={{ scale: 1.08 }}
              animate={isActive ? { scale: 1 } : { scale: 1.08 }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
            
            <div className="hero-overlay-dark"></div>

            <div className="hero-content-box">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="hero-overline"
              >
                {slide.overline}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-main-title" 
                dangerouslySetInnerHTML={{ __html: slide.title }} 
              />
              
              {slide.subtext && (
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hero-description"
                >
                  {slide.subtext}
                </motion.p>
              )}
            </div>
          </div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* SECTION 2: STATS */}
      <section className="bespoke-stats-section">
        <div className="bespoke-watermark">AARYANS</div>
        <div className="bespoke-container">
          <div className="bespoke-header">
            <div className="bespoke-line"></div>
            <h2 className="bespoke-quote">Industrial excellence and global strategic operations.</h2>
          </div>
          <div className="bespoke-grid">
            {[{ num: "3.5K", label: "Skilled Talent" }, { num: "150+", label: "Global Projects" }, { num: "12+", label: "Years of Legacy" }].map((stat, i) => (
              <motion.div key={i} className={`bespoke-card card-step-${i}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="bespoke-number"><Counter value={stat.num} /></h3>
                <h4 className="bespoke-label">{stat.label}</h4>
                <div className="bespoke-progress-track">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} className="bespoke-progress-bar" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES */}
      <section className="categorized-industries-section">
        <div className="industries-main-wrap">
          <div className="industries-main-header">
            <span className="ind-top-tag">Strategic Sectors</span>
            <h2>Industries drive innovation, <span>shape economies</span></h2>
            <p className="ind-main-desc">At Aaryans Group, we are fostering innovation and diverse ventures to create growth.</p>
          </div>

          {industryCategories.map((cat, catIdx) => (
            <div key={catIdx} className="industry-category-row">
              <div className="category-label-side">
                <h3>{cat.name}</h3>
                <div className="cat-line"></div>
              </div>
              <div className="category-grid">
                {cat.items.map((item, idx) => (
                  <motion.div key={idx} className="industry-small-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
                    <div className="card-media-small">
                      <img src={item.img} alt={item.title} />
                      <div className="card-overlay-fixed"></div>
                    </div>
                    <div className="card-content-small">
                      <h4>{item.title}</h4>
                      <button onClick={() => handleOpenModal(item.title)} className="card-explore-trigger">
                        Explore <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {modalData && (
          <div className="industry-popup-overlay" onClick={() => setModalData(null)}>
            <motion.div 
              className="industry-popup-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="popup-close-btn" onClick={() => setModalData(null)}>&times;</button>
              <h3 className="popup-title">{modalData.title}</h3>
              <div className="popup-links-list">
                {modalData.links.length > 0 ? (
                  modalData.links.map((linkName, idx) => (
                    <Link 
                      key={idx} 
                      to={`/project/${createSlug(linkName)}`} 
                      className="popup-link-item"
                      onClick={() => setModalData(null)}
                    >
                      {linkName} <span className="link-arrow">→</span>
                    </Link>
                  ))
                ) : (
                  <p>Content coming soon...</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION 4: UNIQUENESS */}
      <section className="uniqueness-section">
        <div className="unique-bg-glow"></div>
        <div className="uniqueness-container">
          <header className="unique-header">
            <motion.span className="unique-tag">OUR UNIQUENESS</motion.span>
            <h2 className="unique-main-title">Why we are different?</h2>
          </header>
          <div className="unique-bento-grid">
            {uniquenessSectors.map((item, idx) => (
              <motion.div key={idx} className={`unique-card card-variant-${idx}`} whileHover={{ y: -10 }}>
                <div className="unique-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: VENTURES */}
      <section className="premium-ventures-section">
        <div className="ventures-header">
          <span className="unique-tag">OUR VENTURES</span>
          <h2 className="unique-main-title">We are pleased to have many <span className="brand-gradient-text">trusted Ventures</span></h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...ventureLogos, ...ventureLogos].map((logo, index) => (
              <div key={index} className="v2-logo-card">
                <img src={logo} alt="Venture logo" className="v2-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;