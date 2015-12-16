var intro_count = 0;
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['intro', 'work', 'about', 'contact'],
        menu: '#navigator',
        loopHorizontal: false,
        scrollOverflow: true,
        slidesNavigation: true,
        slidesNavPosition: 'top',

        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            var white_logo = "img/Logo_white.svg";
            var black_logo = "img/Logo.svg";
            //using anchorLink
            if (anchorLink == 'intro') {
                //$('#my-logo img').attr("src",white_logo);
                if (intro_count == 1) {
                    $('.menu').addClass('menu_down');
                    $('.menu').removeClass('menu_up');
                }
                $('.logo-wrapper').show(1000);
            } else {
                //$('#my-logo img').attr("src",black_logo);
                $('.menu').removeClass('menu_down');
                $('.menu').addClass('menu_up');
                $('.logo-wrapper').hide(1000);
                intro_count = 1;
            }
            if (anchorLink == 'work') {
                $('#work-nav').removeClass("title");
                $('#work-nav').addClass("title-alive");
                $('#work-icon path').addClass("icon-alive");
            } else {
                $('#work-nav').removeClass("title-alive");
                $('#work-nav').addClass("title");
                $('#work-icon').removeClass("icon-alive");
            }
            if (anchorLink == 'about') {
                $('#about-nav').removeClass("title");
                $('#about-nav').addClass("title-alive");
                $('#about-icon').addClass("icon-alive");
            } else {
                $('#about-nav').removeClass("title-alive");
                $('#about-nav').addClass("title");
                $('#work-icon').removeClass("icon-alive");
            }
            if (anchorLink == 'contact') {
                $('#contact-nav').removeClass("title");
                $('#contact-nav').addClass("title-alive");
                $('#contact-icon').addClass("icon-alive");
            } else {
                $('#contact-nav').removeClass("title-alive");
                $('#contact-nav').addClass("title");
                $('#work-icon').removeClass("icon-alive");
            }
        }
    });
});
