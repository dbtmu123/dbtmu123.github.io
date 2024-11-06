function getName() {
    var name = prompt("Please enter your name:");
    document.getElementById("displayName").innerHTML = "Hello, " + name + "!";
}

function enlargeImage() {
    var img = document.getElementById("placeholderimage");
    if (img.style.width === "200px" || img.style.width === "") {
        img.style.width = "300px"; // Enlarged size
    } else {
        img.style.width = "200px"; // Back to original size
    }
}

function showWelcomeMessage() {
    var nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
        document.getElementById("welcomeMessage").innerHTML = "Hello, " + nameInput + "! Welcome to my portfolio site.";
        setTimeout(function() {
            window.location.href = 'portfolio.html';
        }, 2000);
    } else {
        document.getElementById("welcomeMessage").innerHTML = "Please enter your name.";
    }
}