document.addEventListener("DOMContentLoaded", function() {
    var catBackgrounds = {
        "lily": "./imgs/LILY.PNG",
        "milo": "./imgs/MILO.PNG",
        "mike": "./imgs/MIKE.PNG",
        "mogli": "./imgs/MOGLI.PNG",
        "afrodite": "./imgs/AFRODITE.PNG",
        "blake": "./imgs/BLAKE.PNG",
        "aladdin": "./imgs/ALADDIN.PNG",
        "chocolate": "./imgs/CHOCOLATE.PNG",
        "cinderela": "./imgs/CINDERELA.PNG",
        "keanu": "./imgs/KEANU.PNG",
        "jelly": "./imgs/JELLY.PNG",
        "lilith": "./imgs/LILITH.PNG",
        "olaf": "./imgs/OLAF.PNG",
        "petit": "./imgs/PETIT.PNG",
        "panda": "./imgs/PANDA.PNG",
        "samurai": "./imgs/SAMURAI.PNG",
        "vegas": "./imgs/VEGAS.PNG",
        "tundra": "./imgs/TUNDRA.PNG"
    };

    var catName = window.location.search.substring(1);

    if (catName && catBackgrounds[catName]) {
        document.body.style.backgroundImage = "url(" + catBackgrounds[catName] + ")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
        history.back();
    });
});