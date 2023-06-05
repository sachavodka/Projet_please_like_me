$(".btn").on("click", function () {

    let id = $(this).attr("id");
    console.log($('[id="' + id + '"]').find("img").attr("src") == "img/miniature_unlike.png");

    if ($('[id="' + id + '"]').find("img").attr("src") == "img/miniature_unlike.png") {
        $('[id="' + id + '"]').find("img").attr("src", "img/miniature_like.png");

        $('[id="' + id + '"]').find("span").css({
            color: "#9cb8d4"
        })

        $('[id="' + id + '"]').mouseover(function() {
            $(this).find("span").css("color","#9cb8d4");
        }).mouseout(function() {
            $(this).find("span").css("color","#9cb8d4");
        });

    } else {
        $('[id="' + id + '"]').find("img").attr("src", "img/miniature_unlike.png");

        $('[id="' + id + '"]').find("span").css({
            color: "white"
        })

        $('[id="' + id + '"]').mouseover(function() {
            $(this).find("span").css("color","white");
        }).mouseout(function() {
            $(this).find("span").css("color","rgb(77, 73, 73)");
        });

    }

});

