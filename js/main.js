/*===========preloader======*/
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

$(function(){
    /*===========Owl carousel======*/
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });   
    
});
