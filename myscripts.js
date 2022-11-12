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

    $(".submitForm").on("click", function(){
      let formData ={};
      var full_name = $('#full_name').val();
      if(full_name){
        formData.full_name =full_name;
      }
      var email = $('#email').val();
      if(email){
        formData.email =email;
      }
      var contact_no = $('#contact_no').val();
      if(contact_no){
        formData.contact_no =contact_no;
      }
      var subject = $('#subject').val();
      if(subject){
        formData.subject =subject;
      }
      var message = $('#message').val();
      if(message){
        formData.message =message;
      }
   
      });

  });//Ready function end

