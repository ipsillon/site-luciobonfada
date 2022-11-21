// var altura = window. screen. height ;
var altura = document.getElementById('navbar-container').clientHeight;

console.log(altura);

// Funcao JQuery para o menu mobile
$(document).ready(function(){
  $(window).bind('scroll', function(){
    var gap = 50;
    if ($(window).scrollTop() > gap) {
      $('#nav-home').addClass('active-scroll');
    }else{
      $('#nav-home').removeClass('active-scroll');
    }
  });
});

