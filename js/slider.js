// / Slick slider №1
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        mousewheel: true,
        keyboard: true
    });

    $('.comment-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        mousewheel: true,
        keyboard: true,
        variableWidth: false
    });
    $('.slider-whywe').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        easing: 'ease',
        draggable: true,
        keyboard: true,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

