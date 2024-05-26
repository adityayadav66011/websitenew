import React from "react";

const CertificateProgramEnglish = () => {
  return (
    <div className="diploma-program-container">
      <h1 className="diploma-program-heading">Certificate Program for Communicative English</h1>
      <div className="image-section">
        <img
          className="diploma-program-image"
          src="/images/communicative.png"
          alt="Certificate Program Image"
        />
      </div>
      <div className="vertical-headings">
        <div className="detail-section">
          <h2 className="centered-heading">Course Details</h2>
          <table>
            <tbody>
              <tr>
                <th>Content</th>
                <th>Mode</th>
              </tr>
              <tr>
                <td>
                  Base Line Assessment
                  <br />
                  25Hrs of Self-learning through AI-based app
                  <br />
                  6 Master Class Webinars
                  <br />
                  Development Psychology
                  <br />
                  Assessment Strategies
                  <br />
                  Instructional Strategies
                  <br />
                  Classroom Management
                </td>
                <td>Online</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Eligibility</h2>
          <table>
            <tbody>
              <tr>
                <th>Eligibility</th>
              </tr>
              <tr>
                <td>Graduate with or without B.Ed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Benefits</h2>
          <table>
            <tbody>
              <tr>
                <td>Latest pedagogical & Techniques</td>
              </tr>
              <tr>
                <td>Enabling teachers to align their learning outcomes with NCERT and NEP 2020</td>
              </tr>
              <tr>
                <td>Interactive Workshops by ELT experts</td>
              </tr>
              <tr>
                <td>Burlington LMS tool with AI</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Duration</h2>
          <table>
            <tbody>
              <tr>
                <td>2 months - 3 Hrs Weekly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateProgramEnglish;
