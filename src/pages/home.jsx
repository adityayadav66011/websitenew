import React from 'react';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Welcome to LearnLeap</h1>
              <p>Your Gateway to Cutting-Edge courses on english and teaching </p>
              <p>
                Elevate your teaching skills and english proficiency with LearnLeap.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn primary-btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-form">
              <form>
                <h2>Enquiry Form</h2>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" name="location" required />
                </div>
                <div className="form-group">
                  <label htmlFor="course">Course</label>
                  <select id="course" name="course" required>
                    <option value="">Select a Course</option>
                    <option value="diploma-program-for-foundational-stage">Diploma Program for Foundational Stage</option>
                    <option value="certificate-program-for-foundational-stage">Certificate Program for Foundational Stage</option>
                    <option value="certificate-program-for-teaching-skills">Certificate Program for Teaching Skills</option>
                    <option value="certificate-program-in-communicative-english-educators">Certificate Program In Communicative English (Educators)</option>
                    <option value="certificate-program-in-education-leadership">Certificate Program In Education Leadership</option>
                    <option value="certificate-program-in-communicative-english-school-leaders">Certificate Program In Communicative English (School Leaders)</option>
                  </select>
                </div>
                <button type="submit" className="btn primary-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="analytics-item">
              <h2>10+</h2>
              <p>Happy Partners</p>
            </div>
            <div className="analytics-item">
              <h2>100+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="analytics-item">
              <h2>50+</h2>
              <p>Developers</p>
            </div>
            <div className="analytics-item">
              <h2>24/7</h2>
              <p>Services</p>
            </div>
          </div>
        </section>

        <section className="section-courses">
  <div className="container">
    <div className="heading-wrapper">
      <h2 className="center">Popular Courses</h2>
    </div>
    <div className="grid grid-three-cols">
      <div className="course-card">
        <img src="/images/teacher.jpg" alt="Course 1" className="responsive-img" />
        <h3>Certificate Program for teaching Skills.
</h3>
        <p>Learn to build modern web applications using the latest technologies.</p>
      </div>
      <div className="course-card">
        <img src="/images/communication.jpg" alt="Course 2" className="responsive-img" />
        <h3>Certificate Program In Communicative English
</h3>
        <p>Master data analysis and machine learning techniques to excel in the data-driven world.</p>
      </div>
      <div className="course-card">
        <img src="/images/leadership.svg" alt="Course 3" className="responsive-img" />
        <h3>Certificate Program In Education Leadership 
</h3>
        <p>Protect systems and networks with advanced cybersecurity practices.</p>
      </div>
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="section-testimonials">
          <div className="container">
            <h2 className="center">What Our Clients Say</h2>
            <div className="grid grid-two-cols">
              <div className="testimonial">
                <p>"SaiSatwik Technologies transformed our IT infrastructure. Highly recommended!"</p>
                <p>- Alex Johnson</p>
              </div>
              <div className="testimonial">
                <p>"The team at SaiSatwik Technologies is incredibly skilled and professional."</p>
                <p>- Maria Davis</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      
    </>
  );
};
