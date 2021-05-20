
$(function(){
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
      el: ".vSwiper",
      clickable: true,
    },
    on: {
      afterInit: function(){
        if( $(window).width() <= 1400 ){
          this.disable();
          $('.swiper-container.vSwiper').addClass('disable')
          $('html, body').css('height','initial')
        }else{
          this.enable();
          $('.swiper-container.vSwiper').removeClass('disable')
          $('html, body').css('height','100%')
        }
      },
      resize: function(){
        if( $(window).width() <= 1400 ){
          this.disable();
          $('.swiper-container.vSwiper').addClass('disable')
          $('html, body').css('height','initial')
        }else{
          this.enable();
          $('.swiper-container.vSwiper').removeClass('disable')
          $('html, body').css('height','100%')
        }
      },
      slideChangeTransitionStart: function(){
        // let sildeaa = this.activeIndex;
        // let thisSlide = this;
        // '.swiper-container.vSwiper'
        // if(this.activeIndex == 0){
        //   $('header').addClass('main')
        // }else{
        //   $('header').removeClass('main')
        // }

        if( this.activeIndex == 2 ){
          $('.swiper-pagination.vSwiper .swiper-pagination-bullet').addClass('black')
        }else{
          $('.swiper-pagination.vSwiper .swiper-pagination-bullet').removeClass('black')
        }
      },
    },
  })


  // var hswiper = new Swiper(".hSwiper", {
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   pagination: {
  //   el: ".hSwiper",
  //     clickable: true,
  //   },
  //   on: {
  //     update: function(){
  //       console.log('불러오기22');
  //       if( $(window).width() <= 1400 ){
  //           this.disable();
  //           // $('.swiper-container.vSwiper').addClass('disable')
  //           // $('html, body').css('height','auto')
  //         }else{
  //           this.enable();
  //           // $('.swiper-container.vSwiper').removeClass('disable')
  //           // $('html, body').css('height','100%')
  //         }
  //     },
  //     resize: function(){
  //       if( $(window).width() <= 1400 ){
  //           this.disable();
  //           // $('.swiper-container.vSwiper').addClass('disable')
  //           // $('html, body').css('height','auto')
  //         }else{
  //           this.enable();
  //           // $('.swiper-container.vSwiper').removeClass('disable')
  //           // $('html, body').css('height','100%')
  //         }
  //     },
  //   }
  // })





  // var vswiper = new Swiper(".hSwiper", {
  //   slidesPerView: "auto",
  //   // centeredSlides: true,
  //   speed: 700,
  //   pagination: {
  //     el: ".hSwiper",
  //     clickable: true,
  //   },
  //   on: {
  //     afterInit: function(){
  //       // console.log('불러오기3');
  //       // if( $(window).width() <= 1400 ){
  //       //   // this.enable();
  //       //
  //       //   vswiper = new Swiper(".hSwiper", {
  //       //     slidesPerView: "auto",
  //       //     centeredSlides: true,
  //       //     speed: 700,
  //       //     pagination: {
  //       //       el: ".hSwiper",
  //       //       clickable: true,
  //       //     },
  //       //   })
  //       }else{
  //         this.disable();
  //       }
  //     },
  //     resize: function(){
  //       this.enable();
  //       if( $(window).width() <= 1400 ){
  //
  //       }else{
  //         this.disable();
  //       }
  //     },
  //   },
  // })


  // var hswiper = new Swiper(".hSwiper", {
  //   slidesPerView: "auto",
  //   // centeredSlides: true,
  //   speed: 700,
  //   pagination: {
  //     el: ".hSwiper",
  //     clickable: true,
  //   },
  // })

//   let hswiper;
//
//   hswiperLoad();
//   function hswiperLoad(){
//     if( $(window).width() <= 1400 ){
//       hswiper = new Swiper(".hSwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         speed: 700,
//         pagination: {
//           el: ".hSwiper",
//           clickable: true,
//         },
//       })
//     }else{
//       hswiper = new Swiper(".hSwiper", {
//         slidesPerView: "auto",
//         speed: 700,
//         pagination: {
//           el: ".hSwiper",
//           clickable: true,
//         },
//         on: {
//           afterInit: function(){
//             this.disable();
//           },
//         },
//       })
//     }
//   }
//   $(window).resize(function(){
//     hswiperLoad();
//   })
//


  let  hswiper = new Swiper(".hSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      speed: 700,
      pagination: {
        el: ".hSwiper",
        clickable: true,
      },
      on: {
        afterInit: function(){
          if( $(window).width() > 1400 ){
            this.disable();
          }
        },
      },
    })

  let hswiper2 = new Swiper(".hSwiper", {
      slidesPerView: "auto",
      speed: 700,
      followFinger: false,
      pagination: {
        el: ".hSwiper",
        clickable: true,
      },
      on: {
        afterInit: function(){
          if( $(window).width() <= 1400 ){
            this.disable();
          }else{
            
          }
        },
      },
    })

})
