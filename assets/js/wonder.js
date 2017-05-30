$(document).ready(function () {
    setTimeout(function () {
      //  $(".logo-contain").addClass('fadeout');
    }, 2000);
    //window.sr = new scrollReveal();
    //sr.reveal('#intro h1', { duration: 200, origin: 'bottom', easing: 'ease-in-out' })
    
    window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50;
                
            if (distanceY > shrinkOn) {
                $(".logo-contain").removeClass('fadebackin');
                $(".logo-contain").addClass('fadeout');
                
                $("#intro h1").addClass('fadein');
            } else {
                 
                
                $("#intro h1").removeClass('fadein');
                $(".logo-contain").addClass('fadebackin');
                
            }
        });
});
