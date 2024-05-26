import React from "react";

export const ContactUs = () => {
  return (
    <main>
      <section className="section-contact">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="container">
          <div className="contact-info-box">
            <div className="contact-images">
              <img src="/images/qwerty.svg" alt="Contact Us" />
            </div>
            <div className="contact-details">
              <p>Email: <a href="mailto:franchise@birlaopenminds.com">franchise@birlaopenminds.com</a></p>
              <p>Email: <a href="mailto:pds.training@birlaopenminds.com">pds.training@birlaopenminds.com</a></p>
              <p>Phone: <a href="tel:+7977153104">7977153104</a></p>
              <p>Address: Piramal Tower, 9th Floor, 901, B Wing, Peninsula Corporate Park, Lower Parel (W), Mumbai - 400013</p>
            </div>
          </div>
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
                  <option value="">Select a Program</option>
                  <option value="diploma-program-for-foundational-stage">Diploma for Foundational Stage</option>
                  <option value="certificate-program-for-foundational-stage">Certificate for Foundational Stage</option>
                  <option value="certificate-program-for-teaching-skills">Certificate for Teaching Skills</option>
                  <option value="certificate-program-in-communicative-english-educators">Certificate In Communicative English (Educators)</option>
                  <option value="certificate-program-in-education-leadership">Certificate In Education Leadership</option>
                  <option value="certificate-program-in-communicative-english-school-leaders">Certificate In Communicative English (School Leaders)</option>
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
