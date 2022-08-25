// Slick slider
$(document).ready(function () {
  $(".vincers-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: block;"><ion-icon name="chevron-back-outline"></ion-icon></button> ',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" aria-disabled="false"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
  });
});
// ********************************************************
