import React from 'react';

function ResumePage() {
  return (
    <main>
      <section className="section resume py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">My Resume</h2>
              <div className="resume-item">
                <h3>Education</h3>
                <ul>
                  <li>
                    <strong>Bachelor of Science in Computer Science</strong>, Your University, Year
                  </li>
                  <li>
                    <strong>High School Diploma</strong>, Your High School, Year
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h3>Experience</h3>
                <ul>
                  <li>
                    <strong>Software Engineer Intern</strong>, XYZ Company, Year - Year
                    <p>Description of responsibilities and achievements...</p>
                  </li>
                  <li>
                    <strong>Web Developer</strong>, ABC Company, Year - Year
                    <p>Description of responsibilities and achievements...</p>
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h3>Skills</h3>
                <ul>
                  <li>JavaScript (React, Node.js)</li>
                  <li>HTML, CSS (Sass, Bootstrap)</li>
                  <li>SQL, NoSQL databases</li>
                  <li>Version control (Git)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResumePage;
