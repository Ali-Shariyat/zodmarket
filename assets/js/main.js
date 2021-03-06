/*-------------------------------------------*\
   main.js
   - black page of menu
   - menu btn
   - slider
   - scrollbar
   - shop small
   - drop down
   - advanced search
   - close btn
   - sort select
   - page loader
   - light gallery
   - rating
   - tab click
   - toggle class
   - change class
   - form validate
   - count down timer
   - hover item
   - switch disabled
   - profile tabs
   - sidebar tab
   - nice number
\*-------------------------------------------*/

//==================
// black page of menu
//==================
$(".black-page , .close-menu i").click(function () {
    $(".menu-items").css({right: -300});
    $(".black-page").fadeOut();
    $("[data-close-btn]").trigger("click")
    $("html").removeAttr("style");
});
$("[data-open-black-page]").click(function(){
    $(".black-page").fadeIn();
})
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
    if ($this.siblings(".slider-title").find(".chevron-left").length) {
        $this.siblings(".slider-title").find(".chevron-left").click(function () {
            $(this).parents(".slider-title").siblings("[data-slider]").find(".this-slider").flickity('next');
        });
    } else {
        $this.find(".chevron-left").click(function () {
            $this.find(".this-slider").flickity('previous');
        });
    }
    if ($this.siblings(".slider-title").find(".chevron-right").length) {
        $this.siblings(".slider-title").find(".chevron-right").click(function () {
            $(this).parents(".slider-title").siblings("[data-slider]").find(".this-slider").flickity('previous');
        });
    } else {
        $this.find(".chevron-right").click(function () {
            $this.find(".this-slider").flickity('previous');
        });
    }
    $(window).on('ready load resize orientationchange', function () {
        $this.height($this.find(".item").outerHeight(true));
        $this.find(".this-slider").height($this.find(".item").outerHeight(true));


        if ($(this).width() <= 350) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xxs"));
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
        if ($(this).width() > 350 && $(this).width() < 450) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xs"));
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
        if ($(this).width() > 450 && $(this).width() < 767) {
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
        if ($(this).width() > 767 && $(this).width() < 991) {
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
// scrollbar
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

if ($(".chat-list-parent").length) {
    var this_div = $(".chat-list-parent ul").outerHeight(true);
    $(".chat-list-parent[data-scroll-no-touch]").animate({"scrollTop": this_div}, 500);
}
//==================
// shop small
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
    $(".black-page").fadeOut();
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
    $this.parents("[data-tab-click]").siblings("[data-tab-items]").find(" > li").eq($this.index()).addClass("active").siblings().removeClass("active");
});

//==================
// toggle class
//==================
$(document).on("click", "[data-toggle-class]", function (e) {
    var $this = $(this);
    if ($("[data-toggle-class-popup],[data-toggle-class-popup-select]").length) {
        $("[data-toggle-class-popup],[data-toggle-class-popup-select]").removeClass("active");
    }
    $this.toggleClass($this.attr("data-toggle-class"));
    if ($this.hasClass($this.attr("data-toggle-class"))) {
        $this.find(".text-changer").text($this.attr("data-after-text"));
        $("[data-toggle-class-popup=" + $this.attr("data-toggle-class-popup-select") + "]").addClass("active");
    } else {
        $this.find(".text-changer").text($this.attr("data-before-text"));
        $("[data-toggle-class-popup=" + $this.attr("data-toggle-class-popup-select") + "]").removeClass("active");
    }
    if($this.hasClass("btn-view-purchase-invoice")){
        $this.parent().siblings(".view-purchase").toggleClass("active");
    }
    e.stopPropagation();
    e.preventDefault();
});
$(window).click(function () {
    $("[data-toggle-class]").each(function () {
        $("[data-toggle-class]." + $(this).attr("data-toggle-class")).removeClass($(this).attr("data-toggle-class"));
    });
    $("[data-toggle-class-popup]").each(function () {
        $("[data-toggle-class-popup]").removeClass("active");
    });
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
if ($('[data-countdown]').length) {
    $('[data-countdown]').countdowntimer({
        hours: 3,
        minutes: 10,
        seconds: 10,
        size: "lg"
    });
}
//==================
// hover item
//==================
$("[data-hover] .item").hover(function () {
    var $this = $(this);
    $this.parents("[data-hover]").siblings("[data-hover-main]").find(".item-main").eq($this.index()).addClass("active").siblings(".item-main").removeClass("active")
});
//==================
// switch disabled
//==================
$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};
$(document).on("click", "[data-switch-disabled]", function (e) {
    var $this = $(this);

    if ($("[data-remove-disabled=" + $this.attr("data-switch-disabled") + "] .item-disabled").hasAttr("disabled")) {
        $("[data-remove-disabled=" + $this.attr("data-switch-disabled") + "] .item-disabled").removeAttr("disabled");
    } else {
        $("[data-remove-disabled=" + $this.attr("data-switch-disabled") + "] .item-disabled").attr("disabled", "disabled");
    }
    e.preventDefault();
    e.stopPropagation();
});
//==================
// profile tabs
//==================
$(".profile-main").height($("[data-main-tab].active").outerHeight(true));
$("[data-main-tab].active").parent("ul").find("> li:not(.active)").css("height", "0");

$("[data-main-tab].active").css("height", "");
$('[data-main-tab] textarea').mousemove(function () {
    var $this = jQuery(this);
    console.log($this.outerHeight());
    $(".profile-main").height($("[data-main-tab].active").outerHeight(true));
});
//==================
// sidebar tab
//==================
// window.location.hash = $("[data-sidebar-tab].active").attr("data-sidebar-tab");
$(document).on("click", "[data-sidebar-tab]", function (e) {
    var _self = $(this);
    var _get_data_val = _self.attr("data-sidebar-tab");
    window.location.hash = _self.attr("data-sidebar-tab");
    if (!_self.hasClass("active")) {
        $(".profile-main").animate({
            scrollTop: 0
        }, 0);
        $(".profile-sidebar-main").find("[data-sidebar-tab=" + _get_data_val + "]").addClass("active").siblings("[data-sidebar-tab]").removeClass("active");
        $("[data-main-tab=" + _get_data_val + "]").addClass("active").siblings("[data-main-tab]").removeClass("active");
        $("[data-main-tab=" + _get_data_val + "].active").parent("ul").find("> li:not(.active)").css("height", "0");
        $("[data-main-tab=" + _get_data_val + "].active").css("height", "");
        $(".profile-main").height($("[data-main-tab=" + _get_data_val + "].active").outerHeight(true));
    }

    e.stopPropagation();
    e.preventDefault();
});
if ($("[data-sidebar-tab]").length) {
    if (window.location.hash !== "") {
        $("[data-sidebar-tab=" + window.location.hash.replace("#", "") + "]").trigger("click");
    }else{
        $("[data-sidebar-tab]:first").trigger("click");
    }
}
//==================
//nice number
//==================
$('[data-number-spinner]').niceNumber({
    autoSize: false,
    autoSizeBuffer: 1,
});
$(document).on("click", ".nice-number", function (e) {
    e.stopPropagation();
});

//==================
//shop small btn
//==================
$(".shop-small-btn").click(function (e) {
    var $this = $(this);
    $this.parents(".shop-small").find(".shop-list-popup").stop().slideToggle();
    e.preventDefault()
});
