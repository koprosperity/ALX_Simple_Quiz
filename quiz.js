// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Step 4: Check if an answer was selected
    if (userAnswer) {
        // Step 5: Compare userAnswer with correctAnswer
        if (userAnswer.value === correctAnswer) {
            // Step 6: Display correct feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Step 7: Display incorrect feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 8: Prompt to select an answer if none selected
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
    }
}

// Step 9: Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
