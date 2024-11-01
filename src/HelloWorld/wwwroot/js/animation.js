document.addEventListener("DOMContentLoaded", function() {
    var character = document.getElementById("character-animation");

    function moveCharacter() {
        character.style.left = Math.random() * window.innerWidth + "px";
        character.style.top = Math.random() * window.innerHeight + "px";
    }

    setInterval(moveCharacter, 1000);
});
