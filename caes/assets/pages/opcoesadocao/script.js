document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
        history.back();
    });
});