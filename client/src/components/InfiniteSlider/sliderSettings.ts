const sliderSettings = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
};

export default sliderSettings;