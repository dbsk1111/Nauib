$(function(){


  let wHeight = $(window).innerHeight();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();

    // // 헤더 노출
    // if(thisScrollTop == 0){
    //   $('header').addClass('main')
    // }else{
    //   $('header').removeClass('main')
    // }

    // // 스크롤 조작 시 카운터 작동
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






  // $('.counter').each(function(){
  //   $(this).prop('number',0).animate({Counter: $(this).text()},{
  //     duration: 1500,
  //     easing: 'linear',
  //     step: function(now){
  //       let commaNum = Math.ceil(now);
  //       if( $(this).hasClass('comma') ){
  //         $(this).text(commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  //       }else{
  //         $(this).text(Math.ceil(commaNum))
  //       }
  //     }
  //   })
  // })
})

// function startJs(){
// 	/* scroll */
// 	var $animation_elements = $('.ani');
// 	var $window = $(window);
//
// 	function check_if_in_view() {
// 	  var window_height = $window.height();
// 	  var window_top_position = $window.scrollTop();
// 	  var window_bottom_position = (window_top_position + window_height);
//
// 	  $.each($animation_elements, function() {
// 		var $element = $(this);
// 		var element_height = $element.outerHeight();
// 		var element_top_position = $element.offset().top+200;
// 		var element_bottom_position = (element_top_position + element_height);
// 		//console.log(element_top_position);
//
// 		//check to see if this current container is within viewport
// 		if ((element_bottom_position >= window_top_position) &&
// 		  (element_top_position <= window_bottom_position)) {
// 		  $element.addClass('in-view');
// 		} else {
// 		 //$element.removeClass('in-view');
// 		}
// 	  });
// 	}
//
// 	$window.on('scroll resize', check_if_in_view);
// 	$window.trigger('scroll');
//
//
// 	$(document).on('click', 'a[href="#none"]', function(e) {e.preventDefault()});
//
// 	if($('html').is('.ie67, .ie7, .ie8, .ie9')) {
// 		$('div.ie_alert_text').show().html('�꾩옱 �ъ씠�몃뒗 IE9 誘몃쭔�� �섏쐞釉뚮씪�곗�瑜� 吏��먰븯吏� �딆뒿�덈떎. <br />釉뚮씪�곗�瑜� 理쒖떊 踰꾩쟾�쇰줈 <b>�낅뜲�댄듃</b>�� 二쇱꽭��.');
// 	}
