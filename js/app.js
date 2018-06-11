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

    //Кнопка Наверх
    $(function () {
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

    });

});