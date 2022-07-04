/*
 Theme Name: Construction - Parallax Landing Page Template
 Theme URL: http://preview.perfecthemes.com/TM/Construction/
 Author: Perfect Themes
 Author URI: http://perfecthemes.com/
 Description: 
 Version: 1.0
 */
 
(function($) {
    'use strict';

    /* COUNTER ON SCROLL */
    var a = 0;
    $(window).on('scroll', function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });



})(jQuery);