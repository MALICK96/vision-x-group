$(document).ready(function() {
    // for sticky navigation
    $('.js_about_section').waypoint(function(direction){
        if (direction == 'down')
            $('nav').addClass('sticky');
        else
            $('nav').removeClass('sticky');
    }, {
        offset: '16px;'
    });
    
    // for button click
    $('.js_scroll_to_plan').click(function() {
        // to animate select
        $('html, body').animate({scrollTop: $('.js_section_plan').offset().top}, 1000)
    });

    $('.js_scroll_to_more').click(function() {
        // to animate select
        $('html, body').animate({scrollTop: $('.js_features_section').offset().top}, 1000)
    });

    // Navigation scroll
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });
    

    
    // Animate on scroll
    $('.js_wp_1').waypoint(function(direction) {
        
        $('.js_wp_1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    $('.js_wp_2').waypoint(function(direction) {
        
        $('.js_wp_2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    $('.js_wp_3').waypoint(function(direction) {
        
        $('.js_wp_3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    $('.js_wp_4').waypoint(function(direction) {
        
        $('.js_wp_4').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    // nav.addClass('sticky');
    // Mobile nav
    $('.js_nav_icon').click(function() {
        event.preventDefault();
        let nav = $('.js_main_nav');
        let icon = $('.js_nav_icon i');
        
        // Method to open and close a box
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
    })

}) ;