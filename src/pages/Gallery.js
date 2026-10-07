import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const galleryData = [
    {
      id: 7,
      year: '2023',
      type: 'Information',
      title: 'Solapur First IT Park Inauguration',
      source: 'TABHA News Service',
      content: `Solapur's first IT park to be inaugurated tomorrow by Sharad Pawar Mahesh Kothe: In the first phase, employment opportunities will be created for 4,000 people. TABHA News Service, Solapur, August 11 – The groundbreaking ceremony for Solapur’s first IT park—being constructed on 65 acres in Salgarwadi on Donagaon Road through an investment of ₹800 crore by the Aryan Group—will take place on Sunday, August 13. This information was shared by former Mayor Mahesh Kothe in a press conference. The event will be held on Sunday, August 13 at 11 a.m. in the presence of Nationalist Congress Party (NCP) President and Member of Parliament Sharad Pawar, who will perform the ceremony. NCP State President Jayant Patil will also be present at the event. Key attendees will include Atul Chordia from Panchshil Group, Satish Magar, Aryan Group Chairman Mukund Jagtap, and Aryan Group Executive Director Smita Jagtap. In addition, CEOs of various companies associated with this IT park will also attend. This IT park is expected to significantly boost the IT industry in Solapur. It will attract major IT companies, IT startups, entrepreneurs, and associated businesses. Through this, a favorable environment for the information and technology sector will be created in Solapur, Kothe stated. After the groundbreaking ceremony of Solapur’s first IT park, skilled and unskilled youth from Solapur will begin receiving job opportunities within a month. By the end of March, the first phase will be completed over an area of 1.5 lakh square meters. Former Mayor Mahesh Kothe appealed that everyone should contribute to the development of the city. The press conference was attended by NCP city president Bharat Jadhav, former Mayor Manohar Sapate, Pramod Gaikwad, Sanjay Shedge, Mahesh Chilveri, and Shekhar Shahane. Boost to Economic Development The Aryans Group of Companies is setting up an IT park in the city, which is a matter of great joy for us. This has been made possible due to the guidance and inspiration of NCP President Sharad Pawar. This state-of-the-art IT park will not only accelerate economic growth in the region but also create numerous employment opportunities. People from the ITI (Industrial Training Institute) sector, including turners and fitters, will find job opportunities here. Additionally, this will boost trade and contribute to the economic development of Solapur, Kothe stated. Building Inspired by Singapore The IT park building will be constructed based on the Singapore model and will be eco-friendly. Robots to be developed here will be used in various sectors such as jewelry markets, kitchens, mines, and hazardous manufacturing units of large companies. Director Sanjay Shendge informed that these robots will be produced at affordable prices ranging from ₹80,000 to ₹50 lakh.`
    },
    {
      id: 8,
      year: '2021',
      type: 'Information',
      title: 'Shri Suvarnasiddheshwar Project & Social Contribution',
      source: 'Sanchar Representative',
      content: `Shri Suvarnasiddheshwar Project ₹1.5 crore donation from 'Aryans' Sanchar Representative Solapur, 6th – Aryans Group of Companies, through Chairman Mukund Jagtap, has donated ₹1.5 crore towards the Shri Suvarnasiddheshwar Project of the village deity Shri Siddheshwar Devasthan (Temple Trust). This donation was made at the hands of NCP President Sharad Pawar, and the amount has been successfully deposited into the bank account of Shri Siddheshwar Temple Trust. The project is being developed on Donagaon Road in Solapur under the guidance of former Mayor Mahesh Kothe. The groundbreaking ceremony of Solapur’s first IT Park was conducted at the hands of Nationalist Congress Party (NCP) President Sharad Pawar. At the event, Mukund Jagtap, Chairman of Aryans Group of Companies, donated ₹1.5 crore to Shri Siddheshwar Devasthan on the occasion of his granddaughter’s birthday. This amount was deposited into the temple trust's bank account on Friday. On behalf of the temple trust, President Dharmajyot Kadadi and the Shri Siddheshwar devotees expressed their heartfelt gratitude to Mukund Jagtap and the Aryans Group of Companies. Former Mayor was also present at the event. A contribution of ₹76 crore from the Aryan Group to the Chief Minister's Care Fund and the Police Relief Fund. Mumbai (Representative): The police play an important role in keeping lawlessness and disorder in society under control. Additionally, the Chief Minister's Care Fund provides assistance to individuals in the state who are facing any kind of hardship. With a strong sense of social responsibility, the Aryan Group contributed ₹76 crore as a symbolic yet significant gesture to both these funds. Chief Minister Eknath Shinde and Deputy Chief Minister Devendra Fadnavis appreciated the Aryan Group’s social contribution and expressed that if entrepreneurs maintain such social awareness, the progress of society will not be delayed. On behalf of the Aryan Group, its CEO Manohar Jagtap donated ₹25 crore to the Police Relief Fund and ₹51 crore to the Chief Minister’s Care Fund. On this occasion, Chief Minister Eknath Shinde, Deputy Chief Minister Devendra Fadnavis, State Education Minister Deepak Kesarkar, Shambhuraje Desai, and others were present. The Aryan Group believes that we owe something to society and that we should strive to repay our social debt. In alignment with this ideology, we are making our contribution. Both of these funds serve the welfare of society, and being aware of this, we are offering our support. Chief Minister Eknath Shinde said, Being grateful toward society is a teaching passed down by our saints. The Jagtap family and the Aryan Group are practicing this teaching. I appreciate and commend this group for their social awareness and commitment.`
    },
    { id: 1, year: '2023', type: 'Image', title: 'IT Park Site View', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery1.jpg' },
    { id: 2, year: '2023', type: 'Image', title: 'Groundbreaking Event', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery2.jpg' },
    { id: 3, year: '2022', type: 'Image', title: 'Project Planning', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery3.jpg' },
    { id: 4, year: '2022', type: 'Image', title: 'Community Outreach', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery4.jpg' },
    { id: 5, year: '2021', type: 'Image', title: 'Donation Ceremony', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery5.jpg' },
    { id: 6, year: '2021', type: 'Image', title: 'Core Team Meeting', fileName: 'https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery6.jpg' }
  ];

  const filteredItems = galleryData.filter(item => {
    const yearMatch = selectedYear === 'All' || item.year === selectedYear;
    const typeMatch = selectedType === 'All' || item.type === selectedType;
    return yearMatch && typeMatch;
  });

  return (
    <div className="gallery-page-container">
      {/* HERO SECTION (same structure as Career hero) */}
      <header className="gallery-hero-section">
        <img
          src="https://zxvv4tusqcw9wo0o.public.blob.vercel-storage.com/images/gallery.jpg"
          alt="Gallery"
          className="gallery-hero-image"
        />
        <div className="gallery-hero-overlay">
          <div className="gallery-hero-text-box">
            <h1 className="gallery-hero-title">Visual Gallery</h1>
            <div className="gallery-hero-accent-line"></div>
            <p className="gallery-hero-subtitle">Innovation and Excellence in Focus</p>
          </div>
        </div>
      </header>

      <main className="main-content-area">
        {/* FILTER NAVIGATION */}
        <div className="filter-container">
          {/* Group 1: Year */}
          <div className="filter-group">
            <span className="filter-label">Filter by Year</span>
            <div className="filter-row">
              {['All', '2023', '2022', '2021'].map((year) => (
                <button
                  key={year}
                  className={selectedYear === year ? 'btn-year active' : 'btn-year'}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Group 2: Category */}
          <div className="filter-group">
            <span className="filter-label">Filter by Category</span>
            <div className="filter-row">
              {['All', 'Image', 'Information', 'Video'].map((type) => (
                <button
                  key={type}
                  className={selectedType === type ? 'btn-type active' : 'btn-type'}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="items-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              item.type === 'Information' ? (
                <article key={item.id} className="info-card-full">
                  <div className="info-card-content">
                    <div className="meta-badge-group">
                      <span className="meta-badge year">{item.year}</span>
                      <span className="meta-badge-divider">•</span>
                      <span className="meta-badge type">{item.type}</span>
                    </div>
                    <h3 className="info-card-title">{item.title}</h3>
                    <p className="info-card-text">{item.content}</p>
                    {item.source && <footer className="info-card-footer">— {item.source}</footer>}
                  </div>
                </article>
              ) : (
                <div key={item.id} className="media-card">
                  <div className="media-header">
                    <span className="year-tag-overlay">{item.year}</span>
                    <span className="type-tag-overlay">{item.type}</span>
                    {item.type === 'Image' ? (
                      <img src={`/images/${item.fileName}`} alt={item.title} loading="lazy" />
                    ) : (
                      <video controls><source src={`/videos/${item.fileName}`} /></video>
                    )}
                  </div>
                  <div className="media-body">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="no-results">
              <p>No gallery records match your selected criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Gallery;