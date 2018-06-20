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
        const $content = $('#loadMoreDivs .card');
        const $button = $('#loadMore');

        $content.slice(0, 6).show();
        $button.on('click', function (e) {
            e.preventDefault();
            $content.filter(':hidden').slice(0, 6).slideDown();
            if ($content.filter(':hidden').length === 0) {
                $button.fadeOut('slow');
            }
        });
    })();

    //fixedNavbar
    (function () {
        const $navbar = $(".tm-navbar-main");
        const initialNavTop = $navbar.offset().top;

        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= initialNavTop) {
                $navbar.addClass("fixedNav");
            } else {
                $navbar.removeClass("fixedNav");
            }
        });

    })();

});