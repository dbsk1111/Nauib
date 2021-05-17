$(function(){
  // 스와이프에 따른 서브 메뉴 등장
  $('#gnb').mouseenter(function(){
    $('header').removeClass('main')
  })
  $('header').mouseleave(function(){
    if( vswiper.activeIndex == 0 ){
      $('header').addClass('main')
    }
  })

  // 공지사항 마우스 오버 반응
  $('.notice_area .notice_list a').mouseenter(function(){
    $('.notice_area .notice_list a').removeClass('on')
    $(this).addClass('on')
  })
  $(window).one('load',function(){
    $('#home').addClass('on')
  })

  // 섹션3 숫자 카운트
  $('.counter').each(function(i){
   $(this).prop('number',0).animate({Counter: $(this).text()},{
     duration: 2000,
     easing: 'linear',
     step: function(now){
       $(this).text(Math.ceil(now))
     }
   })
  })




  $(window).resize(function(){
    if( $(this).width() <= 1400 ){
      vswiper.disable()
      $('vSwiper').addClass('destroy')
    }else{
      vswiper.enable()
      vswiper.removeClass('destroy')
    }
  })

})
