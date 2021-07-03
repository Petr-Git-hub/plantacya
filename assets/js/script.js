$(document).ready(function () {


    // scroll
    $('.catalog-menu__dropdown-scroll').scrollbar();

    //Открытие меню
    $('.catalog-menu__button').click(function () {
        $(this).toggleClass('open');
    });
    //Открытие меню mob
    $('.menu-mobile-button').click(function () {
        $(this).toggleClass('active');
        $("body").toggleClass('mobile-open');
        $(".menu-mobile").toggleClass('open');
    });

    //Закрытие меню по клику вне элемента
    $(document).on('mouseup', function (e) {
        if (!$(e.target).closest(".catalog-menu").length) {
            $(".catalog-menu__button").removeClass('open');
        }
        e.stopPropagation();
    });


    $('.card-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            769: {
                items: 3
            },
            1100: {
                items: 4
            }
        }
    })

    $('.instagram-slider').owlCarousel({
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            575: {
                items: 2,
            },
            880: {
                items: 3,
                loop: true,
            },
            1100: {
                items: 4
            }
        }
    })

    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
    })

    $(".phone").mask("+7(999) 999-99-99");

    // аккордион вопросы
    $(".questions-box__title").click(function () {
        if ($(this).parents(".questions-box").hasClass("active")) {
            $(this).parents(".questions-box").removeClass("active");
            $(this).parents(".questions-box").find(".priceBox-description").slideUp();
        } else {
            $(".questions-box__description").slideUp();
            $(".questions-box").removeClass("active");
            $(this).parents(".questions-box").addClass("active");
            $(this).parents(".questions-box").find(".questions-box__description").slideDown();
        }
    })

    if ($(window).width() < 575) {
        $('.article-slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: true,
            dots: true,
        })
    } else {

    }


    // menu-category
    $(".menu-category__click").click(function () {
        if ($(this).parents(".menu-category__category").hasClass("open")) {
            $(this).parents(".menu-category__category").removeClass("open");
            $(this).parents(".menu-category__category").find(".menu-category__subcategory").slideUp();
        } else {
            $(".menu-category__subcategory").slideUp();
            $(".menu-category__category").removeClass("open");
            $(this).parents(".menu-category__category").addClass("open");
            $(this).parents(".menu-category__category").find(".menu-category__subcategory").slideDown();
        }
    })

    // menu-subcategory
    $(".menu-subcategory__title").click(function () {
        $(".menu-subcategory__body").slideToggle(100);
        $(this).parents(".menu-subcategory").toggleClass("open");
    })

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

