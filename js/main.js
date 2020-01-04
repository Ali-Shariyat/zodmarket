//==================
// black page of menu
//==================
$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("html").removeAttr("style");
});

//==================
// menu btn
//==================
$(".menu-items ul li div i.icon-font-plus-menu").click(function () {
    $(this).parents("ul li").find("ul.menu-down").stop().slideToggle();
    $(this).toggleClass("icon-font-plus-menu");
    $(this).toggleClass("icon-font-remove-menu");
});

$(".menu-small-icon").click(function (e) {
    $(".menu-items").css({right: 0});
    $(".black-page").fadeIn();
    $("html").css({overflow: "hidden"});
    e.stopPropagation();
    e.preventDefault();
});

//==================
// slider
//==================
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
        rightToLeft: true,
        fade: eval($this.attr("data-fade"))
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
        $("[data-scroll]").each(function () {
            var $this = $(this);
            $this.niceScroll({
                cursorwidth: "7px",
                touchbehavior: true,
                rtlmode: "auto",railalign:"left",
                background:$this.attr("data-scroll-rail-color"),
                cursorcolor:$this.attr("data-scroll-cursor-color"),
                cursorborder: "none",
                autohidemode:false,
            });
        })
    }
});
$(window).on('ready load resize change', function () {
    if ($("[data-scroll-no-touch]").length) {
    }
});
$("[data-scroll-no-touch]").each(function () {
    var $this = $(this);
    $this.scrollbar();
})
if ($(".original-category").length) {
    var this_div = $(".original-category ul").width()/2;
    $(".original-category").animate({"scrollLeft": this_div}, 200);
}
//==================
// shop-small
//==================
$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= 100) {
        $(".shop-small").fadeIn();
    } else {
        $(".shop-small").fadeOut();
    }
});

//==================
// drop down
//==================
$("[data-drop-down]").each(function () {
    var $this = $(this);
    $this.find("[data-drop-down-header]").click(function () {
        if(!$this.hasClass("active")){
            $this.addClass("active");
            $this.find("[data-drop-down-content]").stop().slideDown();
        }else{
            $this.removeClass("active");
            $this.find("[data-drop-down-content]").stop().slideUp();
        }
    });
});

//==================
// advanced search
//==================
$(".advanced-search-btn").click(function (e) {
    $(".category-sidebar-right").stop().fadeIn();
    e.stopPropagation();
    e.preventDefault();
});

//==================
// close btn
//==================
$("[data-close-btn]").click(function () {
    $(this).parents("[data-close-selector]").stop().fadeOut();
});
