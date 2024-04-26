import React, { useState } from 'react';

function Evaluation1Page() {
  // State to store the answers to evaluation questions
  const [answers, setAnswers] = useState({});
  
  // Sample JSON object representing questions and answers
  const evaluationData = {
    "questions": [
      {
        "question": "Overall Job Satisfaction",
        "answers": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
      },
      {
        "question": "Workload Satisfaction",
        "answers": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
      },
      {
        "question": "Team Collaboration Satisfaction",
        "answers": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
      },
      {
        "question": "Growth Opportunities Satisfaction",
        "answers": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
      },
      {
        "question": "Management Satisfaction",
        "answers": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
      }
    ]
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., sending data to backend
    console.log("Form submitted with answers:", answers);
    // Reset form after submission
    setAnswers({});
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  return (
    <main>
      <div className="container">
        <section className="section evaluation">
          <h2>Employee Evaluation 3: Regular Check-In</h2>
          <form onSubmit={handleSubmit}>
            {evaluationData.questions.map((questionObj, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`question${index + 1}`}>{questionObj.question}:</label>
                <select
                  id={`question${index + 1}`}
                  name={`question${index + 1}`}
                  value={answers[`question${index + 1}`] || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  {questionObj.answers.map((answer, answerIndex) => (
                    <option key={answerIndex} value={answer}>{answer}</option>
                  ))}
                </select>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Evaluation1Page;
