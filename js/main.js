/**********************************
On load function
***********************************/

$(window).on('load', function(){
    /*===========preloader==============================================================================*/
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut();
    
    /*===========Isotope Filter==========================================================================*/
    
    /*===initialize===*/
    var $grid = $(".isotope-filter").isotope({});
    
    /*===on click filter===*/
    $(".buttons-filter").on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        
        /*===add and remove active button class===*/
        $(".buttons-filter").find(".active").removeClass("active");
        $(this).addClass("active");       
    });
    
    /*===========Google Maps==============================================================================*/
    /*function initMap(){
        var uluru = {lat: 51.508039, lng: -0.128069};
        var contentString = 'Trafalgar Square, London WC2N 5DN';
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          animation: google.maps.Animation.BOUNCE      
        });
        
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        
        marker.addListener('mouseover', function(){
            
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            } 
        });
        
        marker.addListener('click', function() {
            infowindow.open(map, marker);        
            
        }); 
    }
    
    initMap(); */   
});

/**********************************
Document ready function
***********************************/

$(function(){
    /*===========Owl carousel-Team============================================================*/
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            
            768: {
               items: 2               
            }
        }        
    });   
    
        
    /*===========Progress bars=================================================================*/
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1300, "linear");
        });
        this.destroy();
    }, {offset: "bottom-in-view"
    });
    
    /*===========Timeline========================================================================*/        
    $(".timeline-container").each(function(){
        var self = $(this);
        $(this).waypoint(function(){            
             self.animate({opacity: 1}, 300);                     
             this.destroy();
        }, {offset: "bottom-in-view"});
    });
    
    /*===========responsive tabs==================================================================*/
    $("#service-tabs").responsiveTabs({
        animation: 'slide'
    });
    
    /*===========magnific popup-portfolio==========================================================*/
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        
        gallery: {
            enabled: true
        }
    });    
    
    /*===========Owl carousel-Testimonial============================================================*/
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });   
    
    /*===========Counter==============================================================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    /*===========Clients==============================================================================*/
    $(".clients-list").owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            
            768: {
               items: 3
            },
            
            992 : {
               items: 4 
            }
        }
    });   
    
    /*===========Nav bar==============================================================================*/
    function showHideNav(){
        /*===Show white nav===*/
        if ( $(window).scrollTop() > 100 ){
            $("nav").addClass("navbar-fixed-white");
            
            /*===show dark logo===*/
            $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
            
            /*===show back to top button===*/
            $(".btn-back-to-top").fadeIn();
        } else {                
            /*===Hide white nav===*/ 
            $("nav").removeClass("navbar-fixed-white");
            
            /*===show light logo===*/
            $(".navbar-brand img").attr("src","img/logo/logo.png");
            
             /*===hide back to top button===*/
            $(".btn-back-to-top").fadeOut();
        }
    }
    
    /*===Call function on document load===*/
    showHideNav();
    
    /*===Call function on scroll===*/
    $(window).scroll(function(){       
       showHideNav(); 
    });
    
    /*===========Smooth scroll==============================================================================*/
   $("a.smooth-scroll").click(function(e){
       e.preventDefault();
       
       var sectionID = $(this).attr("href");
       
       $("html, body").animate({
           scrollTop: $(sectionID).offset().top - 79
       }, 1300, "easeOutExpo");      
         
   })
});


















