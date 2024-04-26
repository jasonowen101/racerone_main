import React from 'react';

function TeamProjectPage() {
  // Sample data for team projects
  const teamProjects = [
    {
      id: 1,
      name: 'Project One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      members: ['John Doe', 'Jane Smith', 'Alex Johnson'],
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      members: ['Emily Brown', 'Michael Lee', 'Sophia Garcia'],
    },
    // Add more projects as needed
  ];

  return (
    <main>
      <section className="section team-projects py-4">
        <div className="container">
          <h2 className="text-center mb-4">Team Projects</h2>
          <div className="row">
            {teamProjects.map(project => (
              <div key={project.id} className="col-lg-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <h6>Team Members:</h6>
                    <ul>
                      {project.members.map(member => (
                        <li key={member}>{member}</li>
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

export default TeamProjectPage;
