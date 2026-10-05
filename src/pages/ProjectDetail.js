// src/pages/ProjectDetail.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sectorData } from '../data/projectData';
import './ProjectDetail.css';

// Import Icons
import { FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

// Helper to normalize keys
const cleanKey = (str = '') => {
  return decodeURIComponent(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '');
};

// Target project keys that need the modal
const COMING_SOON_KEYS = [
  // Initial keys
  'aaryansfabbriefcase',
  'mosconproduct',

  // Electronics Manufacturing
  'pcbboards',
  'integratedcircuits',
  'leddisplay',

  // Robotics and Automations
  'roboticdog',
  'roboticarm',
  'humanoidrobotmultifunctional',
  'informationrobots',
  'robotickiteducation',

  // Space Technology
  'spacedebris',
  'spacedebrislabdemo',

  // Satellites
  'psudosatellite',
  'leosatellite',
  'ueogeosatellite',
  'satellite',

  // Launch vehicles
  'solidfuelrockets6feet',
  'solidfuelrockets8feet',
  'solidfuelrockets12feet',
  'solidfuelrockets18feet3stage',
  '5stagerocketvehicleprototype',
  'nuclearfusionrocketengineprototype',

  // Aerospace
  'agriculturedrone',
  'surveillancedrone',
  'artificialintelligence-drone',
  'minidrone',
  'vtol2meter',
  'vtol4meter',

  // Defence Technology
  'jetfuelfixwingplane',
  'brushlessmotorplanes',
  'rcplane',
  'bulletproofjackets',
  'interceptordrones',

  // Electric 2 Wheeler
  'e2wchassis',
  'e2wbatterymanagementsystem',
  'e2wpowertrail',

  // Electric 4 Wheeler
  'e4wchassis',
  'e4wbatterymanagementsystem',
  'e4wpowertrail',

  // Hydrogen Economy
  'rocketenginehydrogen',
  'hydrogenengineuav',

  // Quantum Technology
  'quantumnavigation',
  'quantumclock',
  'quantumsensorimaging',
  'quantumcommunication',

  // Renewable Energy
  'quantumsolarpanel',
  'topconsolarpanel',
  'bifacialsolarpanel',
  'windturbineswaveenergy',

  // Digital Infrastructure
  'datacentresetup',

  // Information Technology
  
  'entertainmentappidiotbox',
  'financialappmytreasury',

  // Graphene
  'grapheneoxidematerial',
  'grapheneink',
  'graphenethermalmaterial'
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [protectedVideoUrl, setProtectedVideoUrl] = useState('');
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!projectId) {
      setData(null);
      return;
    }

    const currentKeyClean = cleanKey(projectId);

    // Trigger popup if current route matches target coming soon items
    if (COMING_SOON_KEYS.includes(currentKeyClean)) {
      setShowComingSoonModal(true);
    } else {
      setShowComingSoonModal(false);
    }

    // 1. Direct key match
    let found = sectorData[projectId];

    // 2. Normalized key fallback
    if (!found) {
      const matchedKey = Object.keys(sectorData).find(
        (key) => cleanKey(key) === currentKeyClean
      );
      if (matchedKey) {
        found = sectorData[matchedKey];
      }
    }

    if (found) {
      setData(found);
      setIsPlaying(false);

      let isMounted = true;
      if (found.video) {
        fetch(process.env.PUBLIC_URL + found.video)
          .then((res) => {
            if (!res.ok) throw new Error('Video asset not found');
            return res.blob();
          })
          .then((blob) => {
            if (isMounted) {
              setProtectedVideoUrl(URL.createObjectURL(blob));
            }
          })
          .catch(() => {
            if (isMounted) {
              setProtectedVideoUrl(process.env.PUBLIC_URL + found.video);
            }
          });
      } else {
        setProtectedVideoUrl('');
      }

      return () => {
        isMounted = false;
      };
    } else {
      setData(null);
    }
  }, [projectId]);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        videoRef.current
          .play()
          .catch((err) => console.error('Video playback error:', err));
        setIsPlaying(true);
      }
    }
  };

  const handleGoBack = () => {
    setShowComingSoonModal(false);
    navigate(-1);
  };

  if (!data) {
    return (
      <div className="pd-v4-notfound">
        <h1>COMING SOON</h1>
        <p style={{ color: '#888', marginTop: '12px', fontSize: '0.9rem' }}>
          Requested Route: <code>{projectId}</code>
        </p>
      </div>
    );
  }

  // Normalize highlight cards or points into a single array
  const highlightsList =
    data.introCards ||
    (data.introPoints ? data.introPoints.map((pt) => ({ text: pt })) : []);

  // Points 01 and 02 stay on the left; Point 03 goes under the image on the right
  const leftCards = data.introImage ? highlightsList.slice(0, 2) : highlightsList;
  const rightCard = data.introImage && highlightsList.length >= 3 ? highlightsList[2] : null;

  return (
    <div className="pd-v4-wrapper">
      {/* --- COMING SOON MODAL POPUP --- */}
      {showComingSoonModal && (
        <div className="cs-modal-overlay">
          <div className="cs-modal-card">
            <div className="cs-modal-badge">COMING SOON</div>
            <h2>{data.title}</h2>
            <h3>{data.subtitle}</h3>
            <p>
              Information for this enterprise sector is currently under development. Stay tuned for updates!
            </p>
            <div className="cs-modal-actions">
              <button className="cs-btn-back" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section
        className="pd-v4-hero"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + (data.image || '/images/default-hero.jpg')
          })`,
        }}
      >
        <div className="pd-v4-overlay"></div>
        <div className="pd-v4-hero-content">
          {data.tag && <span className="pd-v4-tag">{data.tag}</span>}
          <h1 className="pd-v4-title">{data.title}</h1>
          <div className="pd-v4-subtitle-row">
            <div className="pd-v4-line"></div>
            <h2>{data.subtitle}</h2>
            <div className="pd-v4-line"></div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section: Points 01 & 02 on Left, Point 03 directly under Image on Right */}
      {(data.introText || highlightsList.length > 0) && (
        <section className="pd-v5-intro-wrap pd-v6-luxury-intro">
          <div className="pd-v6-bg-glow"></div>
          <div className="pd-v5-container">
            <div className="pd-v6-header-eyebrow">
              <span className="pd-v6-pill-tag">
                <span className="pd-v6-dot"></span>
                {data.tag || 'Enterprise Initiative'}
              </span>
              <span className="pd-v6-meta-track">Aaryans Global Projects</span>
            </div>

            <div className="pd-v6-intro-grid">
              {/* Left Column: Heading + Lead Quote + Points 01 and 02 */}
              <div className="pd-v6-text-panel">
                <h2 className="pd-v6-main-heading">
                  {data.introTitle || data.title}
                </h2>

                <div className="pd-v6-lead-bar">
                  <div className="pd-v6-accent-strip"></div>
                  <p className="pd-v6-lead-quote">
                    Strategic modernization and sustainable technology deployment engineered for scale and community empowerment.
                  </p>
                </div>

                {data.introText && (
                  <div className="pd-v6-body-text">
                    <p>{data.introText}</p>
                  </div>
                )}

                {leftCards.length > 0 && (
                  <div className="pd-v5-intro-cards-list pd-v6-highlight-grid">
                    {leftCards.map((card, i) => (
                      <div key={i} className="pd-v6-highlight-card">
                        <span className="pd-v6-card-num">0{i + 1}</span>
                        <p>{card.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Image Frame + Point 03 Directly Under Image */}
              <div className="pd-v6-visual-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.introImage && (
                  <div className="pd-v6-image-frame">
                    <div className="pd-v6-backdrop-ring"></div>
                    <div className="pd-v6-img-container">
                      <img
                        src={process.env.PUBLIC_URL + data.introImage}
                        alt={data.introTitle || data.title || 'Strategic Overview'}
                        loading="lazy"
                      />
                      <div className="pd-v6-img-gradient-overlay"></div>
                    </div>

                    <div className="pd-v6-floating-tag">
                      <div className="pd-v6-tag-info">
                        <span className="pd-v6-tag-title">Strategic Venture</span>
                        <span className="pd-v6-tag-desc">High Precision & Scalability</span>
                      </div>
                    </div>
                  </div>
                )}

                {rightCard && (
                  <div className="pd-v5-intro-cards-list pd-v6-highlight-grid">
                    <div className="pd-v6-highlight-card">
                      <span className="pd-v6-card-num">03</span>
                      <p>{rightCard.text}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Video / Solutions Section */}
      {(data.video || data.description) && (
        <section className={`pd-v5-innovation ${isPlaying ? 'cinema-mode' : ''}`}>
          <div className="pd-v5-container">
            <div className="pd-v5-grid">
              {data.video && (
                <div className="pd-v5-video-wrapper">
                  <div
                    className={`pd-v5-card ${isPlaying ? 'active-glow' : ''}`}
                    style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={handleTogglePlay}
                  >
                    <video
                      ref={videoRef}
                      key={protectedVideoUrl}
                      loop
                      playsInline
                      className="pd-v5-video"
                      muted
                      controlsList="nodownload noRemotePlayback"
                      disablePictureInPicture
                    >
                      {protectedVideoUrl && <source src={protectedVideoUrl} type="video/mp4" />}
                    </video>

                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        background: 'transparent',
                      }}
                    ></div>

                    {!isPlaying && (
                      <div className="pd-v5-play-overlay" style={{ zIndex: 11 }}>
                        <div className="pd-v5-pulse-circle">▶</div>
                        <p className="pd-v5-play-text">WATCH VIDEO</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="pd-v5-text-box">
                <h2 className="pd-v5-title">
                  {data.title} <br />
                  <span className="red-accent">{data.subtitle || 'Solutions'}</span>
                </h2>
                <div className="pd-v5-divider"></div>
                <p className="pd-v5-description">{data.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Social Channels Section */}
      {data.socialLinks && data.socialLinks.length > 0 && (
        <section className="pd-v5-social-section">
          <div className="pd-v5-container">
            <div className="pd-v5-social-content">
              <h3 className="pd-v5-social-text">Connect and stay updated through our official channels</h3>
              <div className="pd-v5-social-icons">
                {data.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-v5-social-link"
                    aria-label={link.platform}
                  >
                    {link.platform === 'instagram' && <FaInstagram />}
                    {link.platform === 'youtube' && <FaYoutube />}
                    {link.platform === 'google' && <FaGoogle />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Why We Are Different Section */}
      {data.differentText && data.differentText.length > 0 && (
        <section className="pd-v5-different-section">
          <div className="pd-v5-container">
            <div className="pd-v5-different-content">
              <h2 className="pd-v5-different-title">{data.differentTitle || 'Why we are different?'}</h2>
              <div className="pd-v5-different-text-box">
                {data.differentText.map((para, idx) => (
                  <p key={idx} className="pd-v5-different-p">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Future Prospects Section */}
      {data.futureProspects && data.futureProspects.length > 0 && (
        <section className="pd-v5-future-prospects">
          <div className="pd-v5-container">
            <h3 className="pd-v5-future-main-title">{data.futureTitle || 'FUTURE PROSPECTS'}</h3>
            {data.futureProspects.map((item, index) => (
              <div key={index} className={`pd-v5-future-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="pd-v5-future-text-block">
                  <p>{item.text}</p>
                </div>
                {item.image && (
                  <div className="pd-v5-future-image-block">
                    <img src={process.env.PUBLIC_URL + item.image} alt={`Future Prospect ${index + 1}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;