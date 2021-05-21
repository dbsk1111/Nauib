
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
        if(this.activeIndex == 0){
          $('header').addClass('main')
        }else{
          $('header').removeClass('main')
        }
        if( this.activeIndex == 2 ){
          $('.swiper-pagination.vSwiper .swiper-pagination-bullet').addClass('black')
          let wHeight = $(window).innerHeight();
          let thisScrollTop = $(window).scrollTop();
          $('.counter').each(function(){
            if( !$(this).hasClass('on') ){
              let thisOffset = $(this).offset();
              if( (thisScrollTop + wHeight) >= thisOffset.top && !$(this).is(':animated') || (thisScrollTop + wHeight) >= $('#aum').offset().top ){
                $(this).prop('number',0).animate({Counter: $(this).text()},{
                  duration: 2000,
                  easing: 'linear',
                  step: function(now){
                    $(this).addClass('on');
                    let commaNum = Math.ceil(now);
                    if( $(this).hasClass('comma') ){
                      $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    }else{
                      $(this).text(Math.ceil(commaNum))
                    }
                  }
                })
              }
            }
          })
        }else{
          $('.swiper-pagination.vSwiper .swiper-pagination-bullet').removeClass('black')
        }
      },
    },
  })

  let hSwiper_type1 = new Swiper(".hSwiper_type1", {
      slidesPerView: "auto",
      centeredSlides: false,
      followFinger: false,
      on: {
        afterInit: function(){
          this.disable();
        },
      },
    })

  let hSwiper_type2 = new Swiper(".hSwiper_type2",{
      slidesPerView: "auto",
      centeredSlides: true,
      speed: 400,
      followFinger: true,
      pagination: {
        el: ".hSwiper",
        clickable: true,
      },
    })

  hswiperFunc();

  function hswiperFunc(){
    if( $(window).outerWidth() > 1400 ){
      $('.hSwiper_type1').css('display','block')
      $('.hSwiper_type2').css('display','none')
    }else{
      $('.hSwiper_type1').css('display','none')
      $('.hSwiper_type2').css('display','block')
    }
  }

  $(window).resize(function(){
    if( $(window).outerWidth() > 1400 ){
      hswiperFunc();
    }else{
      hswiperFunc();
    }
  })
})
