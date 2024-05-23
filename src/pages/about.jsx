import React from 'react';

export const AboutUs = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-hero about-hero">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="section-about-us">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            We aim to enhance teacher's skills for Foundational, Preparatory, Middle, and Secondary stages as per the new school structure of NEP. In our pursuit of excellence in education, we recognize that empowering teachers is key to unlocking the full potential of our participants.
          </p>
          <p>
            Hence, we are proud to introduce our Online Teacher Enhancement courses like Diploma and Certificate courses in Foundation/ECCED, Teacher Training and also providing Leadership Development Certificate Course - a virtual gateway to a world of growth, innovation, and continuous learning for educators like you.
          </p>
          <p>
            We stand at the forefront of shaping the next generation of leaders, thinkers, and innovators. Rooted in a legacy of nation-building, our philosophy focuses on holistic education, nurturing young minds to excel academically and beyond.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-statistics">
        <div className="container">
          <h2>Our Reach</h2>
          <div className="grid grid-three-cols">
            <div className="stat-item">
              <h3>23</h3>
              <p>States in India</p>
            </div>
            <div className="stat-item">
              <h3>112</h3>
              <p>Cities</p>
            </div>
            <div className="stat-item">
              <h3>191</h3>
              <p>Institutes</p>
            </div>
            <div className="stat-item">
              <h3>101+</h3>
              <p>Preschools</p>
            </div>
            <div className="stat-item">
              <h3>90+</h3>
              <p>K12 Schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
    </main>
  );
};
