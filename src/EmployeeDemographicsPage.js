import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests

function EmployeeDemographicsPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  return (
    <main>
      <section className="section employee-demographics min-vh-100 py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">Employee Demographics</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Department</th>
                      <th scope="col">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map(employee => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EmployeeDemographicsPage;
