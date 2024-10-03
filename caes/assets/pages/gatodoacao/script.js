$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<img src='./imgs/setaesquerda.png' alt='Esquerda'>",
          "<img src='./imgs/setadireita.png' alt='Direita'>"
        ],
        autoplay: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1 
          }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  var backButton = document.getElementById("backButton");
  backButton.addEventListener("click", function() {
      history.back();
  });
});