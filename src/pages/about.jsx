import React from 'react';

export const AboutUs = () => {
  return (
    <main>
      {/* About Us Heading */}
      <section className="section-about-us-new">
        <div className="container-new">
          <h1 className="about-us-heading">About Us</h1>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="section-about-us-content-new">
        <div className="container-new">
          <div className="about-content-new">
            <p className="about-paragraph">
              We aim to enhance teacher's skills for Foundational, Preparatory, Middle, and Secondary stages as per the new school structure of NEP. In our pursuit of excellence in education, we recognize that empowering teachers is key to unlocking the full potential of our participants.
            </p>
            <p className="about-paragraph">
              Hence, we are proud to introduce our Online Teacher Enhancement courses like Diploma and Certificate courses in Foundation/ECCED, Teacher Training and also providing Leadership Development Certificate Course - a virtual gateway to a world of growth, innovation, and continuous learning for educators like you.
            </p>
            <p className="about-paragraph">
              We stand at the forefront of shaping the next generation of leaders, thinkers, and innovators. Rooted in a legacy of nation-building, our philosophy focuses on holistic education, nurturing young minds to excel academically and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-statistics-new">
        <div className="container-new">
          <h2 className="statistics-heading">Our Reach</h2>
          <div className="statistics-content-new">
            <div className="stat-item-new">
              <h3 className="stat-number">23</h3>
              <p className="stat-text">States in India</p>
            </div>
            <div className="stat-item-new">
              <h3 className="stat-number">112</h3>
              <p className="stat-text">Cities</p>
            </div>
            <div className="stat-item-new">
              <h3 className="stat-number">191</h3>
              <p className="stat-text">Institutes</p>
            </div>
            <div className="stat-item-new">
              <h3 className="stat-number">101+</h3>
              <p className="stat-text">Preschools</p>
            </div>
            <div className="stat-item-new">
              <h3 className="stat-number">90+</h3>
              <p className="stat-text">K12 Schools</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
