
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

$(".menu-items ul li div i.fas.fa-plus").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});