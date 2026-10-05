import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaLinkedinIn } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OurTeam.css';

const OurTeam = () => {
  const teamData = [
    {
      category: "Visionary Leadership",
      description: "Driving the strategic core and global expansion of Aaryans Group.",
      members: [
        { name: "Executive Name", role: "Chairman & MD", img: "/images/mukundj.png", linkedin: "https://www.linkedin.com/in/gauri-kadam-521686292/" },
        { name: "Executive Name", role: "Chief Executive Officer", img: "/images/manoharj.png", linkedin: "#" },
        { name: "Executive Name", role: "Director of Operations", img: "/images/smitaj.png", linkedin: "#" },
       
      ]
    },
 
  ];

  return (
    <div className="premium-team-page">
      {/* Hero Section */}
      <section className="team-hero-lux">
        <div className="hero-content">
          <span className="premium-tag">Global Leadership</span>
          <h1>The Minds Behind <span className="text-maroon">Aaryans</span></h1>
          <div className="hero-accent"></div>
        </div>
      </section>

      {/* Categories Sections */}
      <section className="team-body">
        {teamData.map((section, sIndex) => (
          <div className="category-row-wrapper" key={sIndex}>
            <div className="row-header">
              <div className="header-text">
                <h2>{section.category}</h2>
                <p>{section.description}</p>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
                1400: { slidesPerView: 4 }
              }}
              className="team-swiper"
            >
              {section.members.map((member, mIndex) => (
                <SwiperSlide key={mIndex}>
                  <div className="lux-member-card">
                    <div className="card-image-box">
                      <img src={member.img} alt={member.name} />
                      <div className="role-badge">{member.role}</div>
                    </div>
                    <div className="card-info-lux">
                      <div className="name-box">
                        <h3>{member.name}</h3>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-inline-btn">
                            <FaLinkedinIn />
                          </a>
                        )}
                      </div>
                      <div className="premium-underline"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurTeam;