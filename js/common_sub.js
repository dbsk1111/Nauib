$(function(){
  // 스크롤에 따른 카운터 작동
  let wHeight = $(window).innerHeight();
  countFunc();
  $(window).scroll(function(){
    countFunc()
  })
  function countFunc(){
    let thisScrollTop = $(this).scrollTop();
    // 스크롤 조작 시 카운터 작동
    $('.counter').each(function(){
      
    })
  }


  // const addTop = 150;
  // //section offset top 값으로 class 추가
  // let wHeight = $(window).innerHeight();
  // $(window).scroll(function(){
  //   let thisScrollTop = $(this).scrollTop();
  //   $(".counter").each(function(){
  //     let thisOffset = $(this).offset();
  //     if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
  //       $(this).addClass("active");
  //     }
  //   });
  // });
})
