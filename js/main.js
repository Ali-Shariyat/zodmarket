
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

$('[data-slider]').each(function () {
    var $this = $(this);
    var option = {
        cellAlign: "left",
        contain: true,
        groupCells: eval($this.attr("data-disable-number")),
        wrapAround: eval($this.attr("data-loop")),
        setGallerySize: false,
        resize: true,
        prevNextButtons: false,
        cellSelector: ".item",
        pageDots: eval($this.attr("data-items-nav")),
        autoPlay: eval($this.attr("data-autoPlay")),
        pauseAutoPlayOnHover: eval($this.attr("data-pauseAutoPlayOnHover")),
        rightToLeft: true
    };
    $this.find(".this-slider").flickity(option);
    setTimeout(function () {
        $this.height($this.find(".item").outerHeight(true));
        $this.find(".this-slider").height($this.find(".item").outerHeight(true));
    }, 10);
    $this.find(".chevron-left").click(function () {
        $this.find(".this-slider").flickity('next');
    });
    $this.find(".chevron-right").click(function () {
        $this.find(".this-slider").flickity('previous');
    });
    $(window).on('ready load resize orientationchange', function () {
        $this.height($this.find(".item").outerHeight(true));
        $this.find(".this-slider").height($this.find(".item").outerHeight(true));

        if ($(this).width() <= 600) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-s"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 601 && $(this).width() < 991) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-m"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() >= 992) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-l"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() > 1200) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xl"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }

        }
    });
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
