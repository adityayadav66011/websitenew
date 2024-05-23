import React from "react";

export const ContactUs = () => {
  return (
    <main>
      <section className="section-contact">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="contact-form-box">
            <form>
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
    </main>
  );
};

export default ContactUs;
