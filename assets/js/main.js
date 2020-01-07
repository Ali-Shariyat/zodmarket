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
        cellAlign: $this.attr("data-cell-align"),
        asNavFor: $this.attr("data-nav-select"),
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
        fade: eval($this.attr("data-fade")),
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
                rtlmode: "auto", railalign: "left",
                background: $this.attr("data-scroll-rail-color"),
                cursorcolor: $this.attr("data-scroll-cursor-color"),
                cursorborder: "none",
                autohidemode: false
            });
        })
    }
});

$(window).on('ready load resize change', function () {
    if ($("[data-scroll-no-touch]").length) {
        $("[data-scroll-no-touch]").each(function () {
            var $this = $(this);
            $this.scrollbar();
        });
    }
});

if ($(".original-category").length) {
    var this_div = $(".original-category ul").width() / 2;
    $(".original-category").animate({"scrollLeft": 500}, 500);
}
//==================
// shop-small
//==================
$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= 100) {
        $(".header-big").addClass("active-fixed");
        $(".shop-small").fadeIn();
    } else {
        $(".header-big").removeClass("active-fixed");
        $(".shop-small").fadeOut();
    }
});

//==================
// drop down
//==================
$("[data-drop-down]").each(function () {
    var $this = $(this);
    $this.find("[data-drop-down-header]").click(function () {
        if (!$this.hasClass("active")) {
            $this.addClass("active");
            $this.find("[data-drop-down-content]").stop().slideDown();
        } else {
            $this.removeClass("active");
            $this.find("[data-drop-down-content]").stop().slideUp();
        }
    });
});

//==================
// advanced search
//==================
$("[data-open-popup]").click(function (e) {
    $("[data-select-popup=" + $(this).attr("data-open-popup") + "]").stop().fadeIn();
    e.stopPropagation();
    e.preventDefault();
});

//==================
// close btn
//==================
$("[data-close-btn]").click(function () {
    $(this).parents("[data-close-selector]").stop().fadeOut();
});

//==================
// sort select
//==================
$("[data-sort-select]").change(function () {
    $("[data-sort-text=" + $(this).attr("data-sort-select") + "] span").text($(this).find("input:checked").siblings("label").text());
    // console.log($(this).find("input:checked").siblings("label").text());
    $(this).find("[data-close-btn]").trigger("click");
});

//==================
// page loader
//==================
$(window).on("load", function () {
    setTimeout(function () {
        if ($(".loader-page")[0]) {
            $(".loader-page").fadeOut();
        }
    }, 150);
});

//==================
// light gallery
//==================
'use strict';
/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */
(function ($) {
    // Init empty gallery array
    var container = [];
    // Loop over gallery items and push it to the array
    $('#gallery').find('li').each(function () {
        var $link = $(this).find('a'),
            item = {
                src: $link.attr('href'),
                w: $link.data('width'),
                h: $link.data('height'),
                title: $link.data('caption')
            };
        container.push(item);
    });
    // Define click event on gallery item
    $('#gallery a').click(function (event) {
        // Prevent location change
        event.preventDefault();
        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
                index: $(this).parent('li').index(),
                bgOpacity: 0.85,
                showHideOpacity: true
            };
        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
    });
}(jQuery));


//==================
// rating
//==================
$(document).on("click", ".rating", function () {
    var check_number = $(this).find(".br-current").attr("data-rating-value") == undefined ? 0 : $(this).find(".br-current").attr("data-rating-value");
    $(this).find("[data-set-rating-number]").text(check_number + "/5");
    console.log($(this).find(".br-current").attr("data-rating-value"));
});
if ($('[data-rating]').length) {
    $('[data-rating]').barrating({
        onSelect: function (t, e, n) {
            $(n.currentTarget).parents(".rating").trigger("click");
        }
    });
}

//==================
// tab click
//==================
$(document).on("click", "[data-tab-click] li", function () {
    var $this = $(this);
    $this.removeClass($(this).parents("[data-siblings-add]").attr("data-siblings-add").replace(/\./g, ' ')).addClass($(this).parents("[data-tab-click]").attr("data-tab-click").replace(/\./g, ' ')).siblings("li").addClass($(this).parents("[data-siblings-add]").attr("data-siblings-add").replace(/\./g, ' ')).removeClass($(this).parents("[data-tab-click]").attr("data-tab-click").replace(/\./g, ' '));
    $this.parents("[data-tab-click]").siblings("[data-tab-items]").find("li").eq($this.index()).addClass("active").siblings().removeClass("active");
});

//==================
// toggle class
//==================
$(document).on("click", "[data-toggle-class]", function (e) {
    var $this = $(this);
    $this.toggleClass($this.attr("data-toggle-class"));
    if($this.hasClass($this.attr("data-toggle-class"))){
        $this.find(".text-changer").text($this.attr("data-after-text"));
    }else{
        $this.find(".text-changer").text($this.attr("data-before-text"));
    }
    e.stopPropagation();
    e.preventDefault();
});

//==================
// change class
//==================
$(document).on("click", "[data-change-class]", function (e) {
    var $this = $(this);
    var _get_after_attr_value = $this.attr("data-after-class").replace(/\./g, ' ');
    var _get_before_attr_value = $this.attr("data-before-class").replace(/\./g, ' ');
    if ($this.is($this.attr("data-before-class"))) {
        $this.addClass(_get_after_attr_value).removeClass(_get_before_attr_value);
    } else {
        $this.removeClass(_get_after_attr_value).addClass(_get_before_attr_value);
    }
    e.stopPropagation();
    e.preventDefault();
});

//==================
// form validate
//==================
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//==================
// count down timer
//==================
$('[data-countdown]').countdowntimer({
    hours : 3,
    minutes :10,
    seconds : 10,
    size : "lg"
});