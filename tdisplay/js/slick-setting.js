$(function() {
    $('.slider').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            centerPadding: '40px',
            settings: {
                centerMode: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });



    $('.single-item').slick({
        asNavFor: '.slider',
        arrows: true,
        infinite: true,
        waitForAnimate: false
    });

});