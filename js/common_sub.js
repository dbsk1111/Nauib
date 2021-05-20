$(function(){
  const addHeight = 200;
  let wHeight = $(window).innerHeight();

  // 함수 따로 만들어서 호출
  activeFunc();
  function activeFunc(){
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

  // 스크롤 메서드 바로 활용
  // $(window).scroll(function(){
  //   let thisScrollTop = $(this).scrollTop();
  //   $(".ts").each(function(){
  //     let thisOffset = $(this).offset();
  //     if( thisOffset.top <= (thisScrollTop + wHeight - addHeight) && thisScrollTop < thisOffset.top ){
  //       $(this).addClass("active");
  //     }
  //   })
  // })


  $('.local_menu > ul > li').click(function(){
    $(this).hasClass('on')
  })
})
