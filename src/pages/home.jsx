import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'; // Adjust the path according to your project structure

export const Home = () => {
  const carouselItems = [
    {
      image: '/images/homepage1.png',
      text: 'Welcome to <span class="highlight">LearnLeap</span>'
    },
    {
      image: '/images/homepage2.png',
      text: 'Delivered in <span class="highlight">online & Hybrid Mode</span>'
    },
    {
      image: '/images/homepage3.png',
      text: 'Placement & <span class="highlight">Internship opportunities</span> offered'
    },
    {
      image: '/images/4.png',
      text: 'Unlock your Potential with training led by a team of <span class="highlight">highly Recommended faculty</span>'
    },
    {
      image: '/images/5.png',
      text: 'Elevate your teaching skills and <span class="highlight">English proficiency</span> with LearnLeap'
    },
  ];

  const courseItems = [
    {
      image: '/images/diplomafoundation.png',
      title: 'Diploma in Foundation',
    },
    {
      image: '/images/certificatefoundation.png',
      title: 'Certificate in Foundation',
    },
    {
      image: '/images/leadership.png',
      title: 'Certificate in Leadership',
    },
    {
      image: '/images/communicative.png',
      title: 'Certificate in Communicative English',
    },
    {
      image: '/images/k12.png',
      title: 'Certificate for K12 Teachin skills',
    }
  ];

  const mainCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <button className="slick-prev">Prev</button>,
    nextArrow: <button className="slick-next">Next</button>,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <>
      {/* Hero Section */}
      <main>
        <section className="section-hero">
          <div className="hero-carousel">
            <Slider {...mainCarouselSettings}>
              {carouselItems.map((item, index) => (
                <div key={index} className={`carousel-item ${currentSlide === index ? 'active' : ''}`}>
                  <img src={item.image} alt={`Carousel ${index}`} className="responsive-img" />
                  <div className="carousel-text-overlay up-animation">
                    <h2 dangerouslySetInnerHTML={{ __html: item.text }}></h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hero-form-overlay">
            <form>
              <h2></h2>
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
                <label htmlFor="course">Program</label>
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
        </section>




        {/* Analytics Section */}
        <section className="section-analytics">
        <h2 className="center">Our Presence & Offerings</h2>

          <div className="container grid grid-three-cols">
          
            <div className="analytics-item">
              <img src="/images/1 (3).png" alt="K12 Schools" className="analytics-img" />
              <h2>91 + K12 Schools</h2>
            </div>
            <div className="analytics-item">
              <img src="/images/1 (1).png" alt="Preschools" className="analytics-img" />
              <h2>101 + Preschools</h2>
            </div>
            <div className="analytics-item">
              <img src="/images/2.png" alt="Courses" className="analytics-img" />
              <h2>5 Courses</h2>
            </div>
          </div>
        </section>


        {/* Courses Section */}
<section className="section-courses">
<h2 className="center">Popular Programs</h2>

  <div className="container">
    <div className="course-list">
      {courseItems.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={`Course ${index}`} className="responsive-img" />
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      </main>
    </>
  );
};
