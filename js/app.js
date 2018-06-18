$(document).ready(function () {
    //slider
    (function () {
        const $mainSlider = $('#sliderHead');
        const options = {
            dots: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
              }
            }
          ]
        };
        $mainSlider.slick(options);
    })();

    //toTop button
    (function () {
        const optionToTopBtn = 2;
        const showToTopBtnOn = document.documentElement.clientHeight * optionToTopBtn;

        $(window).scroll(function () {
            if ($(this).scrollTop() > showToTopBtnOn) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });

    })();

    //loadMore button
    (function () {
        const contentSelector = "#loadMoreDivs .card";
        const buttonSelector = "#loadMore";

        $(contentSelector).slice(0, 6).show();
        $(buttonSelector).on('click', function (e) {
            e.preventDefault();
            $(contentSelector + ":hidden").slice(0, 6).slideDown();
            if ($(contentSelector + ":hidden").length === 0) {
                $(buttonSelector).fadeOut('slow');
            }
            // $('html,body').animate({
            //     scrollTop: $(this).offset().top
            // }, 1500);
        });
    })();

    //fixedNavbar
    (function () {

        const navbarSelector = $(".tm-navbar-main");
        const initialNavTop = navbarSelector.offset().top;

        $(window).scroll(function () {
            if ($(this).scrollTop() >= initialNavTop) {
                navbarSelector.addClass("fixedNav");
            } else {
                navbarSelector.removeClass("fixedNav");
            }
        });

    })();

});