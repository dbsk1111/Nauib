$(function(){
  // 스크롤에 따라서 헤더 색 변경, 노출
  $(window).one('load',function(){
    $('#home').addClass('on')
  })
  // 스와이프에 따른 서브 메뉴 등장
  $('#gnb').mouseenter(function(){
    $('header').removeClass('main')
  })
  $('header').mouseleave(function(){
    if( $(this).scrollTop() == 0 && $(window).width() > 1400 ){
      $('header').addClass('main')
    }
  })

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
    // if( !$('.counter').hasClass('on') ){
    //   $('.counter').each(function(){
    //     let thisOffset = $(this).offset();
    //     if( thisScrollTop <= thisOffset.top + wHeight ){
    //       $(this).prop('number',0).animate({Counter: $(this).text()},{
    //         duration: 2000,
    //         easing: 'linear',
    //         step: function(now){
    //           let commaNum = Math.ceil(now);
    //           $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    //           $(this).addClass('on');
    //         }
    //       })
    //     }
    //   })
    // }
  })
})
