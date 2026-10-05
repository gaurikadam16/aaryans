import React, { useEffect, useState } from 'react';
import './ExecutiveDesk.css';

const CEODesk = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const letterheadImg = "/images/Letterhead.png";
  const heroBgImg = "/images/bg_i2.jpg";

  const years = ['2025', '2023', '2022', '2021', '2020', '2019'];

  const yearContent = {
    '2023': {
      salutation: "Research on Future Industries: Clean Energy, Robotics & Space Exploration",
      body: (
        <>
          <p>Respected All,</p>
          <p>Greetings from Aaryans Group of Companies!</p>
          <p>As the CEO of Aaryans Group of Companies, I am pleased to present our latest research on the future of crucial industries including Green Hydrogen (H2), Humanoid Robots, Space Debris, Space Tourism, Space Rockets, and Semiconductors.</p>
          
          <h4 className="sub-heading">1. H2 Business Prospect</h4>
          <p>The H2 industry is expected to grow significantly with a projected market size of $199.1 billion by 2025. Our model focuses on production (electrolysis), distribution (pipelines/ships), and storage (cryogenic tanks). Aaryans has partnered with Indian scientists to launch pilot projects in the near future.</p>
          
          <h4 className="sub-heading">2. Humanoid Robots Prospects</h4>
          <p>The global market is expected to reach $8.3 billion. We believe humanoid robots will revolutionize our daily routines. Aaryans is at an advanced stage of developing a Humanoid robot at our overseas facility to showcase as a demo project to India and the world.</p>
          
          <h4 className="sub-heading">3. Space Debris Prospects</h4>
          <p>We are committed to finding solutions for space debris through removal, mitigation, and avoidance. Our research includes options where collected debris can be recycled or reused via smelting and refabricating.</p>
          
          <h4 className="sub-heading">4. Space Tourism & Rockets</h4>
          <p>We aim to make space tourism cost-effective through our R&D in the space rocket division. The rocket industry is projected to reach $8.52 billion by 2025, and we plan to enter manufacturing and launch pad infrastructure with India as our base.</p>
          
          <h4 className="sub-heading">5. Semiconductor Prospects</h4>
          <p>With a market projected at $831.5 billion by 2027, our business model focuses on handling packaging and testing in the initial phase, subsequently expanding into more technical manufacturing processes.</p>
          
          <p>In conclusion, our research shows that these industries present significant opportunities for growth. We are excited to be at the forefront of these revolutions to create a better future for generations to come.</p>
        </>
      )
    },
    '2025': {
      salutation: "Aaryans Group’s Commitment to Sustainable Growth and Economic Development",
      body: (
        <>
          <p>Respected Sir/Madam,</p>
          <p>I hope this letter finds you in the best of health and spirits. As the CEO and CFO of Aaryans Group of Companies, I am writing to share our unwavering commitment to fostering sustainable growth and contributing to the economic and industrial advancement of India. With the strategic backing of international investments and a diversified portfolio of ventures, Aaryans Group is poised to play a significant role in shaping the future of India.</p>
          
          <p>Aaryans Group brings international investment into India through our overseas entities located in Singapore, United Kingdom, British Virgin Islands, Dubai, and the USA. This broad global reach ensures that our efforts are well-supported by a vast array of partners and resources.</p>

          <h4 className="sub-heading">Key Sectors and Strategic Projects</h4>
          <div className="ceo-projects-grid">
            {/* Column 1 */}
            <div className="project-col">
              <h5>Agriculture & Tourism</h5>
              <ul>
                <li>Hydroponic & Organic Farming</li>
                <li>Organic Fertilisers and Seeds</li>
                <li>Sugar & Jaggery Production</li>
                <li>Amusement, Science & Space Tourism</li>
                <li>Underwater & Local Tourism</li>
              </ul>
              <h5>Media & Entertainment</h5>
              <ul>
                <li>Aatharv Events & AGC Sports</li>
                <li>Film Production (Sumukh & Vishwavinayak)</li>
                <li>News Uncut Channel & OTT Apps</li>
                <li>Praja Jagruti Newspaper</li>
                <li>Theatre & Swarang Channel</li>
              </ul>
              <h5>Publications</h5>
              <ul>
                <li>Chitran & Onecut Magazines</li>
                <li>Masters Stroke Business Magazine</li>
                <li>Swaroop Creation Publishing</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="project-col">
              <h5>Manufacturing & Industries</h5>
              <ul>
                <li>Automobiles, EV & Space Vehicles</li>
                <li>Drone & Cell Phone Manufacturing</li>
                <li>Electrolyzers & Solar Cell Production</li>
                <li>Steel, Metal & Petroleum Industry</li>
                <li>Battery & Power Storage Solutions</li>
              </ul>
              <h5>Infrastructure & Services</h5>
              <ul>
                <li>Hydrogen Fuel Transportation</li>
                <li>Real Estate & Infrastructure Dept</li>
                <li>Air Cab & Aviation Sector</li>
                <li>Cruise Shipping & Hospitality</li>
                <li>Import, Export & Marketing</li>
              </ul>
              <h5>Health & Power Generation</h5>
              <ul>
                <li>Multi-Speciality & Cancer Hospitals</li>
                <li>Medicine Industry</li>
                <li>Green Hydrogen & Biofuel</li>
                <li>Solar, Thermal & Wave Energy</li>
                <li>Waste Management Power</li>
              </ul>
            </div>
          </div>

          <h4 className="sub-heading">Cutting-Edge Technologies</h4>
          <div className="ceo-projects-grid">
            <div className="project-col">
              <ul>
                <li>Aeronautical & Astronautical Engineering</li>
                <li>Artificial Intelligence & Robotics</li>
                <li>Organic & Optical Semiconductors</li>
                <li>Indian Search Engine & IT Services</li>
              </ul>
            </div>
            <div className="project-col">
              <ul>
                <li>Integrated Device Manufacturer (IDM)</li>
                <li>Space Debris Management (Shunya Awkasa)</li>
                <li>Semiconductor Fab & Space Services</li>
                <li>Financial Services</li>
              </ul>
            </div>
          </div>

          <h4 className="sub-heading">Investment, Job Creation & Impact</h4>
          <p>Over the next decade, we estimate creating over <strong>50,000 direct jobs</strong> and 55,000 indirect jobs. Our financial turnover is anticipated to reach <strong>INR 9 Lakh Crores to INR 10 Lakh Crores</strong>. This forecast is based on thorough market analysis and an adaptable approach to global economic landscapes.</p>

          <h4 className="sub-heading">Vision & Conclusion</h4>
          <p>Our mission is to drive innovation, create jobs, and contribute to India’s global competitiveness. We place great emphasis on consumer satisfaction by ensuring safety, quality, and ethical standards across all projects.</p>
          <p>Together, through collective efforts, we can shape the future of India’s economy, technology, and society. Aaryans Group stands ready to play a pivotal role in this transformative journey.</p>
        </>
      )
    },
    '2022': {
      salutation: "Ease of Doing Business & Strategic Global Expansion",
      body: (
        <>
          <p>Respected All,</p>
          <p>I hope and believe that this message finds you all in the best of health. As lockdown norms are being relaxed and the UNLOCK PHASE is at its peak, many businesses are operating under strict guidelines. The central and state governments have rolled out various schemes to facilitate the "Ease of Doing Business," a strong move to bring the economy back in action.</p>
          
          <h4 className="sub-heading">Recent Associations & Collaborations</h4>
          <p>I am proud to announce our association with the prestigious <strong>Mittal Group of United Kingdom</strong>. This joint venture will identify opportunities in Montenegro, the British Virgin Islands, and Ireland in its first phase.</p>
          
          <h4 className="sub-heading">Media, Pharmaceuticals & IT</h4>
          <div className="ceo-projects-grid">
            <div className="project-col">
              <h5>Media & Entertainment</h5>
              <ul>
                <li><strong>SALTPIX OTT:</strong> Launched on Republic Day 2021 to provide high-quality web content.</li>
                <li><strong>Satellite Channel:</strong> Airing by January with an initial investment of <strong>Rs. 100 Crores</strong>.</li>
              </ul>
              <h5>Information Technology</h5>
              <ul>
                <li><strong>Virtual Classrooms:</strong> Successfully marketed software for schools and coaching classes.</li>
              </ul>
            </div>
            <div className="project-col">
              <h5>Pharmaceuticals & Refining</h5>
              <ul>
                <li><strong>Pharma Takeover:</strong> Capital expenditure of <strong>Rs. 200 Crores</strong> for API manufacturing.</li>
                <li><strong>Metal Refinery:</strong> Phase 1 investment of <strong>Rs. 150 Crores</strong> in Maharashtra.</li>
              </ul>
              <h5>Education Sector</h5>
              <ul>
                <li><strong>School Acquisition:</strong> Renovating existing facilities with a <strong>Rs. 50 Crore</strong> investment.</li>
              </ul>
            </div>
          </div>

          <h4 className="sub-heading">Venture Capital & Opportunities</h4>
          <p>We are looking forward to joining hands for joint venture arrangements and evaluating investment partnerships for capital-intensive projects, both in India and overseas markets.</p>
        </>
      )
    },
    '2021': {
      salutation: "Introduction to our Dynamic Organization",
      body: (
        <>
          <p>It's my pleasure to introduce to you our dynamic organization, with the products and services we offer. It is by virtue of our never-ending zeal to satisfy our customers, we have a leadership position in this industry.</p>
          <p>Aaryans group success is built on strong partnerships, technical expertise, business acumen, and a proven ability to deliver superior results. We continually invest in the company and our employees, innovate proactively to improve processes and results and strive to meet the highest standards of integrity and safety in the workplace.</p>
          
          <h4 className="sub-heading">Strategic Growth & Asset Management</h4>
          <p>Our overall strategy is to invest in projects that generate long-term value, achieving returns well above our cost of capital. We are focused on value-added growth through an integrated business model that combines competitive financial returns with world-class assets.</p>
          
          <h4 className="sub-heading">Leadership & Expertise</h4>
          <p>Our management and advisory board comprise the most knowledgeable individuals in their respective fields, bringing years of practical experience in high-technology positions. This blend of education and skill sustains our growth and supports a satisfying workplace for our employees.</p>
          
          <h4 className="sub-heading">Social Responsibility</h4>
          <p>Social responsibility is fundamental to our success and reputation. We are committed to conducting our business in a manner that safeguards our employees, protects the environment, benefits neighboring communities, and strengthens local economies.</p>
          
          <p>For the future, we remain committed to expanding our market by leveraging the latest technologies and demonstrating flexibility to emerging opportunities to meet the rapidly evolving needs of our customers.</p>
        </>
      )
    },
    '2020': {
      salutation: "Economic Challenges due to Corona Virus Pandemic",
      body: (
        <>
          <p>The world today has been witnessing a severe pandemic, namely, COVID-19, which has brought the whole economy to a standstill. Lockdown has caused production activities to halt, resulting in near-zero revenue for large and small scale industries alike.</p>
          
          <h4 className="sub-heading">A Road Map Ahead for Aaryans Group</h4>
          <p>Despite the current de-growth, we have established a clear roadmap for various industries:</p>
          
          <div className="ceo-projects-grid">
            <div className="project-col">
              <h5>Infrastructure & Media</h5>
              <ul>
                <li><strong>Infrastructure:</strong> Exploiting land deals and project development with a focus on survival-rated demand.</li>
                <li><strong>Media:</strong> Keeping a sharp eye on land parcels at reasonable rates while public places remain closed.</li>
              </ul>
              <h5>Heavy Industry</h5>
              <ul>
                <li><strong>Steel & Power:</strong> Focus on factory setup and procuring machinery while labor and material costs are lower.</li>
              </ul>
            </div>
            <div className="project-col">
              <h5>Pharma & Refinery</h5>
              <ul>
                <li><strong>Pharmaceuticals:</strong> Highest boost sector. Initiated takeover of an existing pharma company in Maharashtra.</li>
                <li><strong>Refinery:</strong> Handling crude oil and precious metals to control administrative overheads.</li>
              </ul>
              <h5>Operational Goals</h5>
              <ul>
                <li>Economizing resource use and optimizing production costs.</li>
                <li>Philanthropic activities to show gratitude to society.</li>
              </ul>
            </div>
          </div>
          <p>As per a McKinsey survey, 53% of Indian entrepreneurs remain optimistic, and Aaryans Group stands ready to help those with unique ideas through these scarcity-driven times.</p>
        </>
      )
    },
    '2019': {
      salutation: "Upcoming Projects: Building India's Industrial Future",
      body: (
        <>
          <p>As a true Indian, I would like to mention that with the present economic slowdown and global lay-offs, Aaryans Group is with the people of India to generate maximum employment and contribute to economic growth through the <strong>Make In India</strong> initiative.</p>
          
          <h4 className="sub-heading">Upcoming Strategic Projects</h4>
          <div className="ceo-projects-grid">
            <div className="project-col">
              <h5>Manufacturing & Heavy Industry</h5>
              <ul>
                <li><strong>Steel Plant:</strong> Konkan & Kolkata unit (₹5,280 Cr) for 1000 jobs.</li>
                <li><strong>Titanium:</strong> High-scale demand global integration (₹4,700 Cr).</li>
                <li><strong>Automobiles:</strong> UK-based JV for assembly in Maharashtra (1500 jobs).</li>
                <li><strong>Chemical:</strong> Ethanol plant with Taiwan/Germany collaboration.</li>
              </ul>
              <h5>Digital & Technology</h5>
              <ul>
                <li><strong>Digital Tech:</strong> Replacement for Zoom; Search Engine & Browser development.</li>
                <li><strong>Hardware:</strong> Mobile handset & electronic gadget mfg in Bangalore.</li>
                <li><strong>Virtual Classroom:</strong> Online software for educational institutions.</li>
              </ul>
            </div>
            <div className="project-col">
              <h5>Energy & Infrastructure</h5>
              <ul>
                <li><strong>Power:</strong> Technical collaboration with Israel for renewable energy.</li>
                <li><strong>Solar:</strong> Cell production plants in Hyderabad & Jaipur (₹5,000 Cr).</li>
                <li><strong>Real Estate:</strong> New Delhi township (110 acres) and Mumbai/Pune redevelopment.</li>
              </ul>
              <h5>Media, Pharma & Agri</h5>
              <ul>
                <li><strong>Media:</strong> Launching SWARANG & NEWSUNCUT channels and OTT platform (₹350 Cr).</li>
                <li><strong>Pharmaceuticals:</strong> Takeover of API manufacturing plant for raw materials.</li>
                <li><strong>Agriculture:</strong> Organic farming deal with Israel-based company.</li>
              </ul>
            </div>
          </div>
          
          <h4 className="sub-heading">A Recital for the Youth</h4>
          <p>I urge the youth of India not to be disheartened by global lay-offs. Opportunities are developing right here in our motherland. We remain committed to India's technological and economic sovereignty.</p>
        </>
      )
    }
    
  };

  return (
    <div className="chairman-page-wrapper">
      <section className="chairman-hero-block" style={{ backgroundImage: `url(${heroBgImg})` }}>
        <div className="chairman-container">
          <div className="hero-main-content">
            <h1 className="hero-quote">"Driving Innovation, Building Success"</h1>
            <img src="/images/manoharj.png" alt="CEO" className="portrait-main" />
          </div>
        </div>
      </section>

      <section className="chairman-title-section">
        <div className="chairman-container">
          <h2 className="title-text">CEO & CFO's Message</h2>
          <div className="year-selection-row">
            {years.map(year => (
              <button 
                key={year} 
                className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="message-canvas-section">
        <div className="letterhead-paper-container" style={{ "--bg-img": `url(${letterheadImg})` }}>
          <div className="letterhead-header-fixed"></div>

          <div className="letterhead-scroll-content">
            <h3 className="letter-subject">To Whom So Ever It May Concern</h3>
            <p className="salutation"><strong>{yearContent[selectedYear].salutation}</strong></p>
            <div className="message-body">
              {yearContent[selectedYear].body}
            </div>
            
            <div className="signature-area">
              <div className="sig-line"></div>
              <p>Sincerely,</p>
              <h4 className="sig-name">Mr. Manohar Mukund Jagtap</h4>
              <p className="sig-title">CEO & CFO, Aaryans Group of Companies</p>
            </div>
          </div>

          <div className="letterhead-footer-fixed"></div>
        </div>
      </section>
    </div>
  );
};

export default CEODesk;