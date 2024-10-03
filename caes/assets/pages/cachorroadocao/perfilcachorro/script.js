document.addEventListener("DOMContentLoaded", function() {
    var dogBackgrounds = {
        "jully": "./imgs/JULLY.PNG",
        "bella": "./imgs/BELLA.PNG",
        "silva": "./imgs/SILVA.PNG",
        "chico": "./imgs/CHICO.PNG",
        "dom": "./imgs/DOM.PNG",
        "general": "./imgs/GENERAL.PNG",
        "galak": "./imgs/GALAK.PNG",
        "giancarlo": "./imgs/GIANCARLO.PNG",
        "alfredo": "./imgs/ALFREDO.PNG",
        "gaia": "./imgs/GAIA.PNG",
        "chokito": "./imgs/CHOKITO.PNG",
        "junior": "./imgs/JUNIOR.PNG",
        "marvin": "./imgs/MARVIN.PNG",
        "mia": "./imgs/MIA.PNG",
        "mauna": "./imgs/MAÚNA.PNG",
        "mila": "./imgs/MILA.PNG",
        "cookie": "./imgs/COOKIE.PNG",
        "cibele": "./imgs/CIBELE.PNG",
        "leleca": "./imgs/LELECA.PNG",
        "miley": "./imgs/MILEY.PNG",
        "lobo": "./imgs/LOBO.PNG",
        "mufasa": "./imgs/MUFASA.PNG",
        "amora": "./imgs/AMORA.PNG",
        "ariel": "./imgs/ARIEL.PNG",
        "aran": "./imgs/ARAN.PNG",
        "babi": "./imgs/BABI.PNG",
        "nick": "./imgs/NICK.PNG",
        "rafa": "./imgs/RAFA.PNG",
        "oprah": "./imgs/OPRAH.PNG",
        "ruan": "./imgs/RUAN.PNG",
        "perola": "./imgs/PÉROLA.PNG",
        "regina": "./imgs/REGINA.PNG",
        "sofia": "./imgs/SOFIA.PNG",
        "lila": "./imgs/LILA.PNG",
        "macaco": "./imgs/MACACO.PNG",
        "lucy": "./imgs/LUCY.PNG",
        "mariaflor": "./imgs/MARIAFLOR.PNG",
        "safo": "./imgs/SAFO.PNG",
        "xuxa": "./imgs/XUXA.PNG",
        "shawn": "./imgs/SHAWN.PNG",
        "zafir": "./imgs/ZAFIR.PNG",
        "thor": "./imgs/THOR.PNG",
        "zeus": "./imgs/ZEUS.PNG",
        "yellow": "./imgs/YELLOW.PNG",
        "zorro": "./imgs/ZORRO.PNG",
        "jasmine": "./imgs/JASMINE.PNG",
        "joseleonardo": "./imgs/JOSÉLEONARDO.PNG",
        "kid": "./imgs/KID.PNG",
        "camelia": "./imgs/CAMÉLIA.PNG",
        "brownie": "./imgs/BROWNIE.PNG",
        "capi": "./imgs/CAPI.PNG",
        "negresco": "./imgs/NEGRESCO.PNG",
        "noah": "./imgs/NOAH.PNG",
        "nicole": "./imgs/NICOLE.PNG",
        "paris": "./imgs/PARIS.PNG",
        "zira": "./imgs/ZIRA.PNG",
        "giancarlo2": "./imgs/COSTELINHA.PNG"
    };

    var dogName = window.location.search.substring(1);

    if (dogName && dogBackgrounds[dogName]) {
        document.body.style.backgroundImage = "url(" + dogBackgrounds[dogName] + ")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat"
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
        history.back();
    });
});