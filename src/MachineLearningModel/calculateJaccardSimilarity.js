function calculateJaccardSimilarity(employee1, employee2) {
    // Function to calculate the Jaccard similarity between two arrays
    function jaccardSimilarity(arr1, arr2) {
        const intersection = arr1.filter(value => arr2.includes(value));
        const union = [...new Set([...arr1, ...arr2])];
        return intersection.length / union.length;
    }

    // Calculate Jaccard similarity for hard skills
    const hardSkillsSimilarity = jaccardSimilarity(employee1.hard_skills, employee2.hard_skills);

    // Calculate Jaccard similarity for soft skills
    const softSkillsSimilarity = jaccardSimilarity(employee1.soft_skills, employee2.soft_skills);

    // Calculate Jaccard similarity for spiritual gifts
    const spiritualGiftsSimilarity = jaccardSimilarity(employee1.spiritual_gifts, employee2.spiritual_gifts);

    // Combine the similarities with weights (adjust weights as needed)
    const weightedSimilarity = (
        hardSkillsSimilarity * 0.4 +
        softSkillsSimilarity * 0.3 +
        spiritualGiftsSimilarity * 0.3
    );

    return weightedSimilarity;
}

module.exports = calculateJaccardSimilarity;

// You can call this function passing in two employee objects, and it will return a score representing the quality of 
// match between them, ranging from 0.0 to 1.0. Adjust the weights assigned to each attribute's similarity based on 
// their importance in determining a match.
