$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:10,
       
        autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:3,
              
            },
            1000:{
                items:5,
            }
        }
    })
  });