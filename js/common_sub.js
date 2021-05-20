$(function(){
  // // 스크롤에 따라 액티브 클래스 반응
  // const addTop = 150;
  // let wHeight = $(window).innerHeight();
  //
  // // $('.page_title').addClass("active");
  //
  //
  // $(window).scroll(function(){
  //   let thisScrollTop = $(this).scrollTop();
  //   $(".page_title").each(function(){
  //
  //     let thisOffset = $(this).offset();
  //     console.log(thisOffset);
  //     // if( (thisScrollTop + wHeight) >= thisOffset.top ){
  //     // // if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
  //     //   $(this).removeClass("active");
  //     // }
  //     if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
  //       $(this).addClass("active");
  //     }
  //   })
  // })

  // if( $(this).scrollTop().top <= $('.page_title').offset().top + $(window).innerHeight() ){
  // console.log($('.page_title').offset().top)
  // if( $(window).scrollTop() < $('.page_title').offset().top + $(window).innerHeight() ){

  // $(window).scroll(function(){
  //   if( $(window).scrollTop() + $(window).innerHeight() > $('.page_title').offset().top && $(window).scrollTop() < $(window).innerHeight() + $('.page_title').offset().top){
  //     $(".page_title").addClass("active");
  //   }
  // })

  let wHeight = $(window).innerHeight();

  function activeFunc(){
    let thisScrollTop = $(this).scrollTop();
    console.log("스크롤 높이: "+thisScrollTop+"컨텐츠 높이: "+$('.page_title').offset().top+", 창 크기: "+ wHeight)
     // thisOffset.top + wHeight
    $(".page_title").each(function(){
      let thisOffset = $(this).offset();
      // if(  thisScrollTop <= thisOffset.top + wHeight ){
      if( thisOffset.top <= thisScrollTop + wHeight && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    })
  }
  activeFunc();
  $(window).scroll(function(){
    activeFunc();
  })


})
