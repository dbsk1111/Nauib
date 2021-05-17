$(function(){
  $('#gnb').mouseenter(function(){
    $('#lnb').slideDown()
  })
  $('header').mouseleave(function(){
    $('#lnb').slideUp('fast')
  })

  $('.menu_btn').click(function(){
    if( $(this).hasClass('on') == true ){
      $(this).removeClass('on')
      $('#lnb').slideUp('fast')
    }else{
      $('#lnb').slideDown()
      $(this).addClass('on')
    }
  })
})
