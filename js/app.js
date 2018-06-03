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
});