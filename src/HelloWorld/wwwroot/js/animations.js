document.addEventListener("DOMContentLoaded", function() {
    var scubaDiver = document.getElementById("scuba-diving-animation");

    function swim() {
        scubaDiver.style.left = Math.random() * window.innerWidth + "px";
        scubaDiver.style.top = Math.random() * window.innerHeight + "px";
    }

    setInterval(swim, 2000);

    scubaDiver.addEventListener("click", function() {
        alert("You clicked the scuba diver!");
    });

    scubaDiver.addEventListener("mouseover", function() {
        scubaDiver.style.transform = "scale(1.2)";
    });

    scubaDiver.addEventListener("mouseout", function() {
        scubaDiver.style.transform = "scale(1)";
    });
});
