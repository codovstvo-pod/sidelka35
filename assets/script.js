$(document).ready(function () {



    $('#about').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.about-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });

    $('#care').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.care-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });

    $('#prices').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.prices-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });

    $('#descr').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.description-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });

    $('#footer').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.footer-wrapper').offset().top + "px"
        }, {
            duration: 1E3
        });
    });



    $('.mobile-nav__logo').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.start-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('#nav-icon3').removeClass('open')
        $('.mobile-nav-list').removeClass('active')
    });

    $('#mobile-care').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.care-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('#nav-icon3').removeClass('open')
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });

    $('#mobile-about').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.about-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });

    $('#mobile-prices').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.prices-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });

    $('#mobile-descr').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.description-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });

    $('#mobile-footer').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.footer-wrapper').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });



    $('#mobile-care').on('click', function () {
        let hh = $('.mobile-nav__logo').innerHeight()
        $('html,body').animate({
            scrollTop: ($('.care-block').offset().top - 2.5 * hh) + "px"
        }, {
            duration: 1E3
        });
        $('.mobile-nav-list').removeClass('active')
        $('#nav-icon3').removeClass('open')
    });



    $('.phone-btn').on('click', function (e) {
        $('.phone-btn-animation').toggleClass('active')
        $('.phone-btn-number').toggleClass('active')
    })

    $('#nav-icon3').on('click', function (e) {
        $(this).toggleClass('open');
        $('.mobile-nav-list').toggleClass('active')
    })




})