console.log('Hello World');

// var altura = window. screen. height ;
var altura = document.getElementById('navbar-container').clientHeight;

console.log(altura);


// jQuery(window).scroll(function () {
//   var top = jQuery(document).scrollTop();
//   var height = 200;

//   if (top > height) {
//       //sticky-top or fixed-top
//       jQuery('.sticky-top').addClass('bg-opacity-75');
//   } else {
//       jQuery('.sticky-top').removeClass('bg-opacity-75');
//   }
// });

// 
// $(document).ready(function(){
//     $(window).scroll(
//         {
//             previousTop: 0
//         }, 
//         function () {
//         var currentTop = $(window).scrollTop();
//         if (currentTop < this.previousTop) {
//             //$(".sidebar em").text("Up"); /* optional for demo */
//             $(".nav").css({ opacity: 0.5 });
//         } else {
//             //$(".sidebar em").text("Down");
//             $(".nav").css({ opacity: 0 });
//         }
//         this.previousTop = currentTop;
//     });

// });
