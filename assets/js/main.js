
document.addEventListener("DOMContentLoaded", function(event) {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<span class="arrow arrow-left"><</span>',
        prevArrow: '<span class="arrow arrow-right">></span>',
    });
    $('.infiniteSlider').slick({
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows:false,
        infinite: true
    });
    lightbox.option({
        showImageNumberLabel:false
      })


});