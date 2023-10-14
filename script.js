// Get references to form elements and the popup
const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const summary = document.getElementById('summary');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    displayPopup();
});

// Function to display the popup
function displayPopup() {
    // Get values from form fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;

    // Get selected gender values
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = Array.from(genderElements).map(g => g.value);

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Create a summary message with the collected values
    const summaryMessage = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderValues.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    // Display the summary message in the popup
    summary.innerHTML = summaryMessage;

    // Show the popup
    popup.style.display = 'block';
}

// Close the popup when the close button is clicked
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Reset the form when the popup is closed
closePopup.addEventListener('click', function() {
    form.reset();
});
