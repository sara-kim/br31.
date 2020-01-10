
$(document).ready(function(){
  //nav
  $('.btn_menu').on('click',function(){
    var $gnb = $('#gnb');

    if ($(this).hasClass('active')) { //close
    $gnb.stop().animate({left: '100%'},300,function(){
      $(this).css({visibility: 'hidden'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
    })
  } else {
    $(this).addClass('active').find('blind').text('메뉴닫기');
    $gnb.css({visibility: 'visible'}).stop().animate({left: 0},300,function (){
    });
  };

  $gnb.find('ul>li>a').on('click', function (){
   if ($(this).next().size() == 0){
     location.href=$(this).attr("href");
   } else {
     $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
   }
   return false;
  });
});

//footer slide
var $otherMenu=$("#article .ot_menu");
var $btn=$otherMenu.find("a").first();
var $text=$otherMenu.find("span");
var tgHref;
$btn.on("click",function  (e) {
  e.preventDefault();
  $(this).next().stop().slideDown();
  $(this).next().on("click",function  () {
    $(this).stop().slideUp();
  });
  $otherMenu.find(">ul>li>a").on("click",function  (e) {
    e.preventDefault();
    var tgTxt=$(this).text();
    tgHref=$(this).attr("href");
    $btn.find($text).text(tgTxt).closest("a").next().stop().slideUp();
  });
});

});