import React, { useEffect, useState } from 'react';
import './Career.css';
const HubspotFormInit = ({ portalId, formId, region }) => {
  // Use a ref to track if the form is already initialized
  const isLoaded = React.useRef(false);

  useEffect(() => {
    // Prevent double execution
    if (isLoaded.current) return;

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.hbspt && !isLoaded.current) {
        // Clear container completely before creating
        const container = document.getElementById('hubspot-form-container');
        if (container) container.innerHTML = '';

        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: "#hubspot-form-container"
        });
        
        isLoaded.current = true; // Mark as loaded
      }
    };

    document.body.appendChild(script);

    return () => {
      // Clean up when modal closes
      isLoaded.current = false;
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [portalId, formId, region]);

  return (
    <div 
      id="hubspot-form-container" 
      style={{ width: '100%', minHeight: '300px' }}
    ></div>
  );
};

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null); // 'apply' or 'internship'
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { id: 1, dept: 'Swarang', role: 'Video Editor', date: 'April 25, 2025' },
    { id: 2, dept: 'NewsUncut', role: 'Cameraman & Video Editor', date: '23 May - 15 June, 2025' }
  ];

  const internships = [
    { id: 101, role: 'Web Development Intern', duration: '3 Months', type: 'Remote/Office' },
    { id: 102, role: 'video editor Intern', duration: '2 Months', type: 'Office' },
    { id: 103, role: 'cameraman intern', duration: '3 Months', type: 'Hybrid' },
    { id: 104, role: 'cameraman and video editor Intern', duration: '6 Months', type: 'Office' }
  ];

  const filteredJobs = jobs.filter(job => 
    job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setActiveModal('apply');
  };

  const closeModals = () => {
    setActiveModal(null);
    setSelectedJob(null);
  };

  return (
    <div className="career-page-wrapper">
      {/* SECTION 1: THE HERO */}
      <section className="career-hero">
        <img src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/career.jpg" alt="Career" className="hero-full-image" />
        <div className="hero-overlay-dark">
          <div className="hero-content">
            <h1 className="hero-title" data-text="CAREER">CAREER</h1>
            <div className="innovation-line"></div>
            <p className="hero-subtitle"> Global Impact • Your Future</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: BREADCRUMBS */}
      <nav className="career-breadcrumb">
        <div className="breadcrumb-inner">
          Home <span> &gt; </span> Career <span> &gt; </span> Jobs
        </div>
      </nav>

      {/* SECTION 3: SEARCH CARD */}
      <section className="career-search-section">
        <div className="search-card-container">
          <h2>Find Your Job In Aaryan's</h2>
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Enter Job Role" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button">Search</button>
          </div>
        </div>
      </section>

      {/* SECTION 4: ALL AVAILABLE JOBS */}
      <section className="jobs-list-container">
        <div className="section-header">
          <h2 className="title-accent">All Available Jobs <span>In Aaryan's</span></h2>
        </div>
        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div className="job-card" key={job.id}>
                <div className="job-card-header">
                  <span className="dept-tag">{job.dept}</span>
                  <span className="date-text">{job.date}</span>
                </div>
                <h3 className="job-role-title">{job.role}</h3>
                <div className="job-card-footer">
                  <button className="apply-btn-primary" onClick={() => openApplyModal(job)}>Apply Now</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">No jobs found for "{searchQuery}"</div>
          )}
        </div>
      </section>

      {/* MODAL 1: JOB APPLICATION (HubSpot) */}
      {activeModal === 'apply' && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModals}>&times;</button>
            <h3>Apply for {selectedJob?.role}</h3>
            <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#666' }}>Department: {selectedJob?.dept}</p>

            {/* Passing the Form ID from your most recent HubSpot settings */}
            <HubspotFormInit 
              region="na2" 
              portalId="246152593" 
              formId="918068ea-4393-4ae9-9530-106913109fe7" 
            />
          </div>
        </div>
      )}



      {/* MODAL 2: INTERNSHIP OPPORTUNITIES */}
      {activeModal === 'internship' && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-card internship-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModals}>&times;</button>
            <h3 className="modal-title">Student <span>Internships</span></h3>
            <div className="internship-list">
              {internships.map(intern => (
                <div className="intern-item" key={intern.id}>
                  <div className="intern-info">
                    <h4>{intern.role}</h4>
                    <span>{intern.duration} • {intern.type}</span>
                  </div>
                  {/* Clicking Apply inside Internship opens the Apply Modal */}
                  <button 
                    className="intern-apply-small" 
                    onClick={() => openApplyModal({role: intern.role, dept: 'Internship Program'})}
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: STUDENT OPPORTUNITIES */}
      <section className="students-section">
        <div className="students-glass-card">
          <div className="students-content-grid">
            <div className="students-text-left">
              <h2>Student <br/><span>Opportunities</span></h2>
              {/* TRIGGER FOR MODAL 2 */}
              <button 
                className="internship-btn" 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('internship');
                }}
              >
                View Internships
              </button>
            </div>
            <div className="students-description-right">
              <p>
                Interns tackle hands-on projects and design challenges, constantly upending 
                conventions and pushing boundaries. Students may also apply for 
                <strong> Aaryan's START</strong>, an immersive 12-week capstone program.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;