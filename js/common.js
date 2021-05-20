$(function(){
  // gnb 호버시 메뉴 노출
  $('#gnb').mouseenter(function(){
    $('#lnb').stop()
    $('#lnb').slideDown()
  })
  $('header').mouseleave(function(){
    $('#lnb').stop()
    if( !$('.menu_btn').hasClass('on') ){
      $('#lnb').slideUp('fast')
    }
  })

  // 윈도우 크기에 따른 모바일 메뉴 노출
  $(window).resize(function(){
    if( $(window).width() > 1400 ){
      $('.menu_btn').removeClass('on')
      $('.category_btn').removeClass('on')
      $('#mobile_lnb').css('display','none')
    }
  })

  // 모바일 메뉴 눌렀을 때 메뉴 노출
  $('.menu_btn').click(function(){
    $('#mobile_lnb').stop()
    if( $(this).hasClass('on') == true ){
      $(this).removeClass('on')
      $('#mobile_lnb').slideUp('fast')
    }else{
      $(this).addClass('on')
      $('#mobile_lnb').slideDown()
    }
  })

  // 모바일 서브 메뉴 노출
  $('.category_btn').click(function(){
    if( !$(this).hasClass('on') ){
      $('.category_btn').removeClass('on')
      $('.category_btn').next().slideUp()
      $(this).addClass('on')
      $(this).next().slideDown()
    }
  })

  $('.back_to_top a').click(function(){
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $('html,body').animate({scrollTop : offsetElem.top},300);
  })


  // 스크롤에 따른 카운터 작동
  // let wHeight = $(window).innerHeight();
  // countFunc();
  // $(window).scroll(function(){
  //   countFunc()
  // })
  // function countFunc(){
  //   let thisScrollTop = $(this).scrollTop();
  //   // 스크롤 조작 시 카운터 작동
  //   $('.counter').each(function(){
  //     if( !$(this).hasClass('on') ){
  //       let thisOffset = $(this).offset();
  //       if( (thisScrollTop + wHeight) >= thisOffset.top && !$(this).is(':animated') ){
  //         $(this).prop('number',0).animate({Counter: $(this).text()},{
  //           duration: 2000,
  //           easing: 'linear',
  //           step: function(now){
  //             $(this).addClass('on');
  //             let commaNum = Math.ceil(now);
  //             if( $(this).hasClass('comma') ){
  //               $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  //             }else{
  //               $(this).text(Math.ceil(commaNum))
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // }

  // 스크롤 조작 시 카운터 작동
  let wHeight = $(window).innerHeight();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $('.counter').each(function(){
      if( !$(this).hasClass('on') ){
        let thisOffset = $(this).offset();
        if( (thisScrollTop + wHeight) >= thisOffset.top && !$(this).is(':animated') ){
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
  })
})
