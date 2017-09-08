jQuery(function ($) {
    $(".content").click(function () {
        $(this).addClass("active");
        //console.log($(this).data("pop")); 
        $("#pen").addClass("open");
        $("#pen .inner").html($(this).data("pop"))
    });

    $("#pen #close").click(function (e) {
        $(".content.active").removeClass("active");
        $("#pen").removeClass("open");
        //$("#pen .inner").html('');
        e.stopPropagation();
    });


    $(document).mouseup(function (e) {
        var container = $("#pen");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("open");
        }
    });
});