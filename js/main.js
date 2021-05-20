$(function(){

  $(window).one('load',function(){
    $('#home').addClass('on')
  })

  // 스와이프에 따른 서브 메뉴 등장
  $('#gnb').mouseenter(function(){
    $('header').removeClass('main')
  })
  $('header').mouseleave(function(){
    if( this.activeIndex == 0 ){
      $('header').addClass('main')
    }
  })

  // 공지사항 마우스 오버 반응
  // $('.notice_area .notice_list a').mouseenter(function(){
  //   if( $(window).width() > 768 ){
  //     $('.notice_area .notice_list a').removeClass('on')
  //     $(this).addClass('on')
  //   }else{
  //     // $('.notice_area .notice_list a').removeClass('on')
  //   }
  // })
  function notice_list(){
    if( $(window).width() <= 768 ){
      $('.notice_area .notice_list a').removeClass('on')
    }

    $('.notice_area .notice_list a').mouseenter(function(){
      if( $(window).width() > 768 ){
        $('.notice_area .notice_list a').removeClass('on')
        $(this).addClass('on')
      }
    })
  }
  notice_list();
  $(window).resize(function(){
    notice_list()
  })





  // 섹션3 숫자 카운트
  // $('.counter').each(function(){
  //  $(this).prop('number',0).animate({Counter: $(this).text()},{
  //    duration: 2000,
  //    easing: 'linear',
  //    step: function(now){
  //      let commaNum = Math.ceil(now);
  //      $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  //    }
  //  })
  // })


  let wHeight = $(window).innerHeight();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();

    // 헤더 노출
    if(thisScrollTop == 0){
      $('header').addClass('main')
    }else{
      $('header').removeClass('main')
    }

    // 스크롤 조작 시 카운터 작동
    if( !$('.counter').hasClass('on') ){
      $('.counter').each(function(){
        let thisOffset = $(this).offset();
        if( thisScrollTop <= thisOffset.top + wHeight ){
          $(this).prop('number',0).animate({Counter: $(this).text()},{
            duration: 2000,
            easing: 'linear',
            step: function(now){
              let commaNum = Math.ceil(now);
              $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
              $(this).addClass('on');
            }
          })
        }
      })
    }
  })




  // $(window).resize(function(){
  //   if( $(this).width() <= 1400 ){
  //     console.log('작냐')
  //     vswiper.destroy(true, true);
  //     // vswiper.disable();
  //     // $('vSwiper').addClass('destroy')
  //   }else{
  //     // vswiper.enable()
  //     // vswiper.removeClass('destroy')
  //   }
  // })



  let hswiper;

  hswiperLoad();
  function hswiperLoad(){
    if( $(window).width() <= 1400 ){
      hswiper = new Swiper(".hSwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 700,
        pagination: {
          el: ".hSwiper",
          clickable: true,
        },
      })
    }else{
      hswiper = new Swiper(".hSwiper", {
        slidesPerView: "auto",
        speed: 700,
        pagination: {
          el: ".hSwiper",
          clickable: true,
        },
        on: {
          afterInit: function(){
            this.disable();
          },
        },
      })
    }
  }

  $(window).resize(function(){
    hswiperLoad();
  })

})
