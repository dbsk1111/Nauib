$(function(){
  // gnb 호버시 메뉴 노출
  $('#gnb').mouseenter(function(){
    $('#lnb').slideDown()
  })
  $('header').mouseleave(function(){
    if( !$('.menu_btn').hasClass('on') ){
      $('#lnb').slideUp('fast')
    }
  })

  // 윈도우 크기에 따른 모바일 메뉴 노출
  $(window).resize(function(){
    if( $(window).width() >= 1400 ){
        $('.menu_btn').removeClass('on')
    }
  })

  // 모바일 메뉴 눌렀을 때 메뉴 노출
  $('.menu_btn').click(function(){
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

  $(window).resize(function(){
    if( $(this).width() > 1400 ){
      $('.category_btn').removeClass('on')
      $('#mobile_lnb').css('display','none')
    }
  })



    // if( $(this).hasClass('on') == true ){
    //   $(this).removeClass('on')
    //   $(this).next().slideUp('fast')
    // }else{
    //   $(this).addClass('on')
    //   $(this).next().slideDown()
    // }


})
