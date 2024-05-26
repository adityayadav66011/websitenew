import React from "react";

const CertificateProgramLeadership = () => {
  return (
    <div className="diploma-program-container">
      <h1 className="diploma-program-heading">Certificate Program for Education Leadership</h1>
      <div className="image-section">
        <img
          className="diploma-program-image"
          src="/images/leadership.png"
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
                  Introduction to Educational Leadership
                  <br />
                  Leadership Styles and Strategies
                  <br />
                  Organizational and Change Management
                  <br />
                  Educational Policy and Governance
                  <br />
                  Strategic Planning and Resource Management
                  <br />
                  Academic Leadership
                  <br />
                  Diversity, Equity and Inclusion in Education
                  <br />
                  Team Building and Collaboration
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
                <td>Post Graduate with B.Ed & Min 5 years of relevant experience</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-section">
          <h2 className="centered-heading">Benefits</h2>
          <table>
            <tbody>
              <tr>
                <td>Learning and identifying the leadership styles with inclusion in education.</td>
              </tr>
              <tr>
                <td>Honoring effective communication skills with all stakeholders in the school community</td>
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

export default CertificateProgramLeadership;
