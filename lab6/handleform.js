// event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevents page reload

    // gather data from the form fields
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.value);
    const country = document.getElementById("country").value;
    const dob = document.getElementById("dob").value;

    // call function to save data to localStorage
    saveToLocalStorage(name, message, contactMethod, interests, country, dob);
});

// event listener for form reset
document.getElementById("contactForm").addEventListener("reset", function() {
    // clear data from localStorage and reset form fields
    clearLocalStorage();
});
