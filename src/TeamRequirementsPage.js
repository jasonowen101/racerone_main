import React from 'react';

function TeamRequirementsPage() {
  // Sample data for team requirements
  const teamRequirements = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
    },
    // Add more requirements as needed
  ];

  return (
    <main>
      <section className="section team-requirements py-4">
        <div className="container">
          <h2 className="text-center mb-4">Team Requirements</h2>
          <div className="row">
            {teamRequirements.map(requirement => (
              <div key={requirement.id} className="col-lg-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{requirement.title}</h5>
                    <p className="card-text">{requirement.description}</p>
                    <h6>Skills Required:</h6>
                    <ul>
                      {requirement.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamRequirementsPage;
