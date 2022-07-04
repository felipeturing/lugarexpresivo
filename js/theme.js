
 /*
Project:	    Construction - One Page Parallax.
Version:	    1.0.0
Assigned to:	Templatemonster
Primary use:	The Multi-Purpose Onepage Template
*/
(function($) {
    'use strict';
    var mainslider = jQuery('#main_slider');
    var fancybox = jQuery('.fancybox');
    var fancyboxIframe = jQuery('.fancybox-iframe');
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';

    if (mainslider.length) {
        mainslider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            autoplay: true,
            Education: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    }

    //=========================
    // Mixer
    //=========================
    if ($('.filterCont').length > 0) {
        $('.filterCont').themeWar();
    }

    
    //===================================
    // Fixed Header
    //===================================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 80) {
            $("header").addClass('fixedHeader animated fadeInUp');
        } else {
            $("header").removeClass('fixedHeader animated fadeInUp');
        }
    });


    //========================
    // Mobile Menu
    //========================
    if ($('.mobileMenu').length > 0) {
        $('.mobileMenu').on('click', function() {
            $(this).toggleClass('active');
            $('.mainnav > ul').slideToggle('slow');
        });
        if ($(window).width() < 768) {
            $(".has-menu-items .drop_menu").on('click', function() {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }

    }

    //========================
    // Back To Top
    //========================
    if ($('#backToTop').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#backToTop').addClass('showit');
                } else {
                    $('#backToTop').removeClass('showit');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#backToTop').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    //========================
    // Loader 
    //========================
    $(window).load(function() {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

	 //=======================================================
    // Navigation
    //=======================================================
 $('.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    //=======================================================
    // magnificPopup
    //=======================================================
    if ($('a.popUp').length > 0) {
        $("a.popUp").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    if ($('.skills').length > 0) {
        $('.skills').appear(function() {
            $('.progress').each(function() {
                $('.progress-bar').css('width', function() {
                    return ($(this).attr('data-percentage') + '%')
                });
            });
        }, {
            accY: -100
        });
    }
    $(".search-btn").click(function() {
        $(".search").toggleClass("search-open");
    });
})(jQuery);