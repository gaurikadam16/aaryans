import React, { useEffect, useState } from 'react';
import './ComingSoon.css';

// Launch time: 8 Oct 2026, 10:00 AM India time (IST, UTC+05:30).
// The fixed +05:30 offset makes the countdown correct for every visitor, in any country.
export const LAUNCH_DATE = new Date('2026-10-08T10:00:00+05:30');

const LOGO_URL =
  'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/Aaryans_logo_new_01.jpg';

const CONTACT_EMAIL = 'contact@aaryansgroup.org';

const SECTORS = [
  'Semiconductor / Micro Electronics',
  'Electronics Manufacturing',
  'Robotics and Automations',
  'Artificial Intelligence',
  'Space Technology',
  'Satellites',
  'Launch Vehicles',
  'Aerospace',
  'Defence Technology',
  'Electric 2 Wheeler',
  'Electric 4 Wheeler',
  'Hydrogen Economy',
  'Quantum Technology',
  'Renewable Energy',
  'Digital Infrastructure',
  'Information Technology',
  'Agri Tech',
  'Health Care Tech',
];

const getTimeLeft = () => {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n) => String(n).padStart(2, '0');

const ComingSoon = ({ onLaunch }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = getTimeLeft();
      setTimeLeft(next);

      if (next.total <= 0) {
        clearInterval(timer);
        if (onLaunch) onLaunch();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onLaunch]);

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  const isLive = timeLeft.total <= 0;

  return (
    <div className="cs-page">

      {/* ================= SECTION 1: HERO + COUNTDOWN ================= */}
      <section className="cs-hero">
        {/* Background rings */}
        <div className="cs-rings" aria-hidden="true">
          <span className="cs-ring cs-ring-1"></span>
          <span className="cs-ring cs-ring-2"></span>
          <span className="cs-ring cs-ring-3"></span>
        </div>

        <div className="cs-content">
          {/* Logo */}
          <img src={LOGO_URL} alt="Aaryans Group of Companies" className="cs-logo" />

          {/* Rotating "Coming Soon" badge */}
          <div className="cs-badge" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="cs-badge-svg">
              <defs>
                <path
                  id="cs-badge-path"
                  d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                />
              </defs>
              <circle cx="100" cy="100" r="96" className="cs-badge-border" />
              <text className="cs-badge-text">
                <textPath href="#cs-badge-path" textLength="460" lengthAdjust="spacing">
                  COMING SOON • COMING SOON •
                </textPath>
              </text>
            </svg>
            <span className="cs-badge-dot"></span>
          </div>

          {/* Headline */}
          <h1 className="cs-title">
            <span className="cs-title-line">Something</span>
            <span className="cs-title-line">
              Big is <span className="cs-accent">Loading.</span>
            </span>
          </h1>

          <p className="cs-subtitle">
            Aaryans Group is building something new across our sectors — not a tweak,
            the real thing. Doors open soon.
          </p>

          {/* Countdown */}
          <div className="cs-countdown" role="timer" aria-live="off">
            {units.map((unit) => (
              <div className="cs-time-box" key={unit.label}>
                <span className="cs-time-value">{pad(unit.value)}</span>
                <span className="cs-time-label">{unit.label}</span>
              </div>
            ))}
          </div>

          <p className="cs-return-date">
            {isLive ? (
              <>We are <strong>live now</strong></>
            ) : (
              <>Coming back <strong>08 Oct 2026</strong> · <strong>10:00 AM</strong></>
            )}
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: SECTORS ================= */}
      <section className="cs-sectors">
        <div className="cs-sectors-inner">
          <span className="cs-sectors-tag">What's Coming</span>
          <h2 className="cs-sectors-title">Across Every Sector We Serve</h2>

          <div className="cs-sector-grid">
            {SECTORS.map((sector, index) => (
              <div className="cs-sector-card" key={sector}>
                <span className="cs-sector-num">{pad(index + 1)}</span>
                <h3 className="cs-sector-name">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FOOTER ================= */}
      <footer className="cs-footer">
        <img src={LOGO_URL} alt="Aaryans Group of Companies" className="cs-footer-logo" />

        <p className="cs-footer-contact">
          For support or enquiries —{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="cs-footer-email">
            {CONTACT_EMAIL}
          </a>
        </p>

        <p className="cs-footer-copy">
          © {new Date().getFullYear()} Aaryans Group of Companies. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default ComingSoon;