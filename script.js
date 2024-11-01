document.addEventListener("DOMContentLoaded", function() {
    displayWelcomeMessage();
});

function displayWelcomeMessage() {
    alert("Welcome to My Website!");
}

document.getElementById("myButton").addEventListener("click", function() {
    handleButtonClick();
});

function handleButtonClick() {
    alert("Button clicked!");
}
