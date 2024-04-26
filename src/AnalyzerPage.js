import React, { useState } from 'react';
import calculateJaccardSimilarity from './calculateJaccardSimilarity';

function AnalyzerPage() {
  // Sample employee data
  const employee1 = {
    name: "John Doe",
    hard_skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    soft_skills: ["Communication", "Teamwork", "Problem Solving"],
    spiritual_gifts: ["Teaching", "Leadership", "Service"]
  };

  const employee2 = {
    name: "Jane Smith",
    hard_skills: ["JavaScript", "React", "Python", "SQL"],
    soft_skills: ["Communication", "Teamwork", "Creativity"],
    spiritual_gifts: ["Service", "Mercy", "Encouragement"]
  };

  // Calculate Jaccard similarity between the two employees
  const similarityScore = calculateJaccardSimilarity(employee1, employee2);

  // Track similarity for individual traits
  const traitSimilarity = {
    hard_skills: calculateJaccardSimilarity(employee1.hard_skills, employee2.hard_skills),
    soft_skills: calculateJaccardSimilarity(employee1.soft_skills, employee2.soft_skills),
    spiritual_gifts: calculateJaccardSimilarity(employee1.spiritual_gifts, employee2.spiritual_gifts)
  };

  return (
    <main>
      <div className="container">
        <section className="section analyzer">
          <h2>Employee Similarity Analyzer</h2>
          <div>
            <h3>Overall Similarity Score:</h3>
            <p>{similarityScore}</p>
          </div>
          <div>
            <h3>Trait Similarity:</h3>
            <p>Hard Skills: {traitSimilarity.hard_skills}</p>
            <p>Soft Skills: {traitSimilarity.soft_skills}</p>
            <p>Spiritual Gifts: {traitSimilarity.spiritual_gifts}</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AnalyzerPage;
