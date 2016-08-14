/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            //SCROLL SCRIPT
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
		//scrollReveal scripts
            window.scrollReveal = new scrollReveal();
            

            /*====================================
            WRITE YOUR SCRIPTS BELOW
            ======================================*/







        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
  
        
        mainApp.main_fun();
        
        
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 150,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                $('#logo').addClass('shift');
                $('#menu').addClass('shrink');
                //$('#menu h1.hidden').removeClass('hidden');
            } else {
                $('#logo').removeClass('shift');
                $('#menu').removeClass('shrink');
                //$('#menu h1').addClass('hidden');
            }
        });
    });
    
    
    /*$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('#logo').addClass('shift');
    }
});*/

}(jQuery));
