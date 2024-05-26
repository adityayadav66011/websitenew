import React from "react";

const CertificateProgram = () => {
  return (
    <div className="diploma-program-container">
      <h1 className="diploma-program-heading">Certificate Program for Foundation Stage</h1>
      <div className="image-section">
        <img
          className="diploma-program-image"
          src="/images/certificatefoundation.png"
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
                  Content Development and Instructional Planning
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
                <td>Undergraduate 12th pass</td>
              </tr>
              <tr>
                <td>Graduate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Benefits</h2>
          <table>
            <tbody>
              <tr>
                <td>Exposure to Various Learning methods</td>
              </tr>
              <tr>
                <td>Enhancing the Teaching Skills and progressive pedagogy</td>
              </tr>
              <tr>
                <td>Placement Support</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Duration</h2>
          <table>
            <tbody>
              <tr>
                <td>2 months - 4 Hrs Weekly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateProgram;
