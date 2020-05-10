$('.slick-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2, 
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:true,
  responsive: [
    { breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    { breakpoint: 550,
      settings: {
        slidesToShow: 1,
        rows: 1, 
        arrows:false,
      }
    }]
});
