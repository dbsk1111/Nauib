$(function(){
  // 함수 따로 만들어서 호출
  activeFunc();
  function activeFunc(){
    let wHeight = $(window).innerHeight();
    let addHeight = wHeight*0.1;
    let thisScrollTop = $(this).scrollTop();
    $(".ts").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= (thisScrollTop + wHeight - addHeight) && thisScrollTop < thisOffset.top ){
        $(this).addClass("active");
      }
    })
  }
  $(window).scroll(function(){
    activeFunc();
  })

  // 로컬 메뉴 노출
  $('.local_menu > ul > li').click(function(){
    $(this).find('.local_submenu').stop()
    if( $(this).hasClass('on') == true ){
      $(this).removeClass('on')
      $(this).find('.local_submenu').slideUp('fast')
    }else{
      $(this).addClass('on')
      $(this).find('.local_submenu').slideDown()
    }
  })
})
