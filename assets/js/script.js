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
                nav:false,
                dots:true,
            },
            575:{
                items:2,
                nav:false,
                dots:true,
            },
            767:{
                items:3
            },
            1100:{
                items:4
            }
        }
    })

});

$(window).resize(function () {

});

