$(function () {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-button"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-button"></button>'
    });

    $('select').styler();

    $('.header__btn-menu').click(function () {
        $('.menu ul').slideToggle();
    });

});

