$('.splash-half').click(function () {
            var selected = $(this).attr('id');

            setTheme(selected);
        });


        function setTheme(theme) {
            $('#page-content').removeClass();
            $('#page-content').addClass(theme);
            $('.splash-half').fadeOut(1000);
            setTimeout(function () {
                $('#splash').fadeOut(1000);
                //$('#page-content').fadeIn(500);
                $('body').css('overflow', 'auto');
                $('#page-content').css('opacity', 1);
            }, 1000);


        }
        
        $("#switch").click(function (){
            //$('#page-content').fadeOut(500);
            $('body').css('overflow', 'hidden');
            $('#page-content').css('opacity', 0);
            $('#splash').fadeIn(1000);
            setTimeout(function () {
                $('.splash-half').fadeIn(1000);
            }, 1000);
        });