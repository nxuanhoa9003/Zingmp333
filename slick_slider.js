const $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq(".artist__body").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    prevArrow:
      '<button class="artist__btn artist__btn--prev slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="artist__btn artist__btn--next slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});

// radio section
const $radioSection = jQuery.noConflict();
$radioSection(document).ready(function () {
  $radioSection(".section__body-container").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    prevArrow:
      '<button class="radio__btn btn-prev"><i class="fa-light fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="radio__btn btn-next"><i class="fa-light fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});

// new music section
const $newMusicSection = jQuery.noConflict();
$newMusicSection(document).ready(function () {
  $newMusicSection(".section__newmusic--container").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button class="radio__btn new-music-btn btn-prev"><i class="fa-light fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="radio__btn new-music-btn btn-next"><i class="fa-light fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});
