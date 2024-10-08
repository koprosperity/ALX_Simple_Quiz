// Step 1: Get form elements
const form = document.getElementById('feedback-form');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const messageInput = document.getElementById('message');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const errorMessage = document.getElementById('error-message');

// Step 2: Function to validate email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Step 3: Function to validate age
function isValidAge(age) {
    return age >= 18 && age <= 99;
}

// Step 4: Word and character count validation for the feedback message
function validateMessage() {
    const messageText = messageInput.value;
    const words = messageText.trim().split(/\s+/);
    const wordCountValue = words.length;
    const charCountValue = messageText.length;

    // Update word and character counts in the UI
    wordCount.textContent = `Word count: ${wordCountValue}/100`;
    charCount.textContent = `Character count: ${charCountValue}/5000`;

    // Validate word count
    if (wordCountValue > 100) {
        errorMessage.textContent = "Feedback message exceeds 100 words.";
        return false;
    }

    // Validate character count
    if (charCountValue > 5000) {
        errorMessage.textContent = "Feedback message exceeds 5000 characters.";
        return false;
    }

    return true;
}

// Step 5: Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Reset error message
    errorMessage.textContent = '';

    const email = emailInput.value;
    const age = parseInt(ageInput.value);
    
    // Validate email
    if (!isValidEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate age
    if (!isValidAge(age)) {
        errorMessage.textContent = "Please enter an age between 18 and 99.";
        return;
    }

    // Validate feedback message
    if (!validateMessage()) {
        return;
    }

    // If all validations pass, submit the form (or show success message)
    alert("Feedback submitted successfully!");
});

// Step 6: Event listener for message input changes to update word and character count
messageInput.addEventListener('input', validateMessage);
