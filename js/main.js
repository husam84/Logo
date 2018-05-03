/*===========preloader======*/
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut();
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
    
    /*===========Progress bars======*/    
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1300, "linear");
        });
        this.destroy();
    }, {offset: "bottom-in-view"
    });
    
    /*===========Timeline=====*/         
    $(".timeline-container").each(function(){
        var self = $(this);
        $(this).waypoint(function(){            
             self.animate({opacity: 1}, 300);                     
             this.destroy();
        }, {offset: "bottom-in-view"});
    });
    
    /*===========responsive tabs=====*/   
    $("#service-tabs").responsiveTabs({
        animation: 'slide'
    });
    
    
});


















