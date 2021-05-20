$(function(){
  // 스크롤에 따라서 헤더 색 변경, 노출
  $(window).one('load',function(){
    $('#home').addClass('on')
  })

  // 헤더 노출
  let wHeight = $(window).innerHeight();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    console.log(thisScrollTop)
    if(thisScrollTop == 0 ){
      $('header').addClass('main')
    }else{
      $('header').removeClass('main')
    }
  })

  // 스와이프에 따른 서브 메뉴 등장
  $('#gnb').mouseenter(function(){
    $('header').removeClass('main')
  })
  $('header').mouseleave(function(){
    if( $(this).scrollTop() == $('#home').offset().top && $(window).outerWidth() > 1400 ){
      $('header').addClass('main')
    }
  })

  // 공지사항 윈도우 크기에 따른 노출
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
})
