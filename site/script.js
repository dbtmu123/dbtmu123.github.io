function getName() {
    var name = prompt("Please enter your name:");
    document.getElementById("displayName").innerHTML = "Hello, " + name + "!";
}

function enlargeImage() {
    var img = document.getElementById("placeholderimage");
    img.style.width = "500px";
}
