// saves form data to local storage
function saveToLocalStorage(name, message, contactMethod, interests, country, dob) {
    localStorage.setItem("name", name);
    localStorage.setItem("message", message);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("interests", JSON.stringify(interests)); // convert array to json string
    localStorage.setItem("country", country);
    localStorage.setItem("dob", dob);
    alert("Form data saved successfully!"); // confirmation message
}

// clears all form data from local storage
function clearLocalStorage() {
    localStorage.clear();
    alert("Form data cleared!"); // confirmation message for clearing data
}
