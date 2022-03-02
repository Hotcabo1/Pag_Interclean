// METODO STICKY Y ANIMACION  con las clases nav-area
$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('.nav-area').outerHeight();
    var navHeight = $('.nav-area-icono').outerHeight();
    var navHeight = $('.nav-area-tel').outerHeight();


    $(window).scroll(function(){

        var scrolled = $(document).scrollTop();
        if(scrolled > navHeight){
            $('.nav-area').addClass('animate');
            $('.nav-area-icono').addClass('animate');
            $('.nav-area-tel').addClass('animate');
        }else{
            $('.nav-area').removeClass('animate');
            $('.nav-area-icono').removeClass('animate');
            $('.nav-area-tel').removeClass('animate');
        }

        if(scrolled > scroll){
            $('.nav-area').removeClass('sticky');
            $('.nav-area-icono').removeClass('sticky');
            $('.nav-area-tel').removeClass('sticky');


        }else{
            $('.nav-area').addClass('sticky');
            $('.nav-area-icono').addClass('sticky');
            $('.nav-area-tel').addClass('sticky');
        }

        scroll =$(document).scrollTop();
    });
});

