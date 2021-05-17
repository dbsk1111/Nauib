var vswiper = new Swiper(".vSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  speed: 700,
  followFinger: false,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: function(){
      if(vswiper.activeIndex == 0){
        $('header').addClass('main')
      }else{
        $('header').removeClass('main')
        // vswiper.destroy(true, false)
        // vswiper.pagination.destroy()
        // vswiper.navigation.destroy()
        // vswiper.scrollbar.destroy ()
        // $ ('.swiper-slide, .swiper-wrapper').attr( 'style', '' )

      }
      if( vswiper.activeIndex == 2 ){
        $('.swiper-pagination-bullet').addClass('black')
      }else{
        $('.swiper-pagination-bullet').removeClass('black')
      }
    }
  }

})

// var wswiper = new Swiper(".wSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//   el: ".swiper-pagination",
//     clickable: true,
//   },
// });
