// Machine Learning Model for Learning Trait Similarities

const calculateJaccardSimilarity = require('./calculateJaccardSimilarity');

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

console.log("Overall similarity score:", similarityScore);

// Track similarity for individual traits
const traitSimilarity = {
    hard_skills: calculateJaccardSimilarity(employee1.hard_skills, employee2.hard_skills),
    soft_skills: calculateJaccardSimilarity(employee1.soft_skills, employee2.soft_skills),
    spiritual_gifts: calculateJaccardSimilarity(employee1.spiritual_gifts, employee2.spiritual_gifts)
};

console.log("Trait similarity:");
console.log(traitSimilarity);

// This model first calculates the overall similarity score between the two employees using the 
// calculateJaccardSimilarity function. Then, it tracks the similarity for individual traits (hard skills, soft skills, 
// spiritual gifts) separately and logs the results. Adjust the employee data as needed and analyze the trait similarities 
// to identify which traits have higher similarity ratings between the two employees.
