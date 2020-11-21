


$(function() {
    $('.shakers__slider').slick({
        dots: false,
        arrows: true,
        nextArrow: '<span class="next"></span>',
        prevArrow: '<span class="prev"></span>',
        infinite: true,
        focusOnSelect: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {

                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });




});