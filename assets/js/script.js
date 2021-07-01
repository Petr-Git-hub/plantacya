$(document).ready(function () {


    //Открытие меню
    $('.catalog-menu__button').click(function () {
        $(this).toggleClass('open');
    });
    //Открытие меню mob
    $('.menu-mobile-button').click(function () {
        $(this).toggleClass('active');
        $(".menu-mobile").toggleClass('open');
    });

    //Закрытие меню по клику вне элемента
    $(document).on('mouseup', function (e) {
        if (!$(e.target).closest(".catalog-menu").length) {
            $(".catalog-menu__button").removeClass('open');
        }
        e.stopPropagation();
    });


    $('.discounts-slider').owlCarousel({
        loop:true,
        margin:21,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            769:{
                items:3
            },
            1100:{
                items:4
            }
        }
    })
    $('.banner-slider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:false,
        dots:true,
    })

    $(".phone").mask("+7(999) 999-99-99");


});
$(window).scroll(function () {

    var heightScrollTop = $(window).scrollTop(),
        heightHeader = $("header");

    if (heightScrollTop > 1) {
        heightHeader.addClass('fixed');

    } else {
        $('header').removeClass('fixed');
    }
});
$(window).resize(function () {

});

