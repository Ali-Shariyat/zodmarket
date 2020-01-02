
$(".menu-small-icon").click(function (e) {
    $(".menu-items").css({right: 0});
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});

$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("html").removeAttr("style");
});

$(".menu-items ul li div i.icon-font-plus-menu").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("icon-font-plus-menu");
    $(this).toggleClass("icon-font-remove-menu");
});

$('.slider-home-page').each(function () {
    var $this = $(this);
    $this.find(".slider").flickity({
        prevNextButtons: false,
        rightToLeft: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 1500
    });
    $this.find(".chevron-left").click(function () {
        $this.find(".slider").flickity('next');
    })
    $this.find(".chevron-right").click(function () {
        $this.find(".slider").flickity('previous');
    })
});
//==================
// niceScroll touch
//==================

$(window).on('ready load resize change', function () {
    if ($("[data-scroll]").length) {
        $("[data-scroll]").niceScroll({
            cursorwidth: "7px",
            touchbehavior: true,
            rtlmode: "auto"
        });
    }
});
