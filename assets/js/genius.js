var pos;
jQuery(function ($) {
    $(".content").click(function () {
        $(".content.active").removeClass("active");
        $(this).addClass("active");
        //console.log($(this).data("pop")); 
        $("#pen").addClass("open");
        $("#pen .inner #meaning").html($(this).data("pop"));
        $("#pen").css('height', $('#lyrics').outerHeight());
        pos = $(this).offset().top;

        if (pos < 800) {
            $('.annotation_sidebar_arrow').css('margin-top', pos - 350);
            $('#pen .inner').css('margin-top', pos - 400);
        } else {
            $('.annotation_sidebar_arrow').css('margin-top', pos - 350);
            $('#pen .inner').css('margin-top', pos - 450);
        }
    });

    $("#pen #close").click(function (e) {
        $(".content.active").removeClass("active");
        $("#pen").removeClass("open");
        //$("#pen .inner").html('');
        // e.stopPropagation();
    });


    $(document).mouseup(function (e) {
        var container = $("#pen");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("open");

            $(".content.active").removeClass("active");
        }
    });
});
