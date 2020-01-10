$(document).ready(function(){
	//cashbox
	var $button = $('#article .menu_wrap .f_r_txt button');
	$button.on('click', function (){
		alert();
	});

	//m_ice slide
	var $menu=$("#article1 .ot_menu");
	var $btn=$menu.find("a").first();
	var $text=$menu.find("span");
	var tgHref;
	$btn.on("click",function  (e) {
		e.preventDefault();
		$(this).next().stop().slideDown();
		$(this).next().on("click",function  () {
			$(this).stop().slideUp();
		});
		$menu.find(">ul>li>a").on("click",function  (e) {
			e.preventDefault();
			var tgTxt=$(this).text();
			tgHref=$(this).attr("href");
			$btn.find($text).text(tgTxt).closest("a").next().stop().slideUp();
		});
	});

	//index section2 
	var $inBtn = $('.search .searchtag ul li button');
	$inBtn.on('click',function (){
		/* var tghref = $(this).attr('data-href');
		$(this).toggleClass('on').prev('a').attr($inBtn);
		$('.search .searchbar span').text($(this).text());
		if($(this).is('.on')) $('.search .searchbar span').text($(this).text());
		else $('.search .searchbar span').empty();
		console.log(tghref);
		var $gobtn = $('.search .searchbar img');
		$gobtn.on('click',function (e){
			e.preventDefault();
			location.href = '../'+ tghref;
		}); */
		var tghref = $(this).attr('data-href');
		$(this).toggleClass('on');
		if($(this).is('.on')) $(this).siblings().removeClass('on');
		
		if($(this).is('.on')) $('.search .searchbar span').text($(this).text());
		else $('.search .searchbar span').empty();
		console.log(tghref);
		
		var $gobtn = $('.search .searchbar a');
		$gobtn.on('click',function (e){
			e.preventDefault();
			location.href = 'menu/'+tghref;
		});
	});
	//a_history
	var $scBtn = $('#article1 .timeline_box button');
	$scBtn.on("click", function(e){
		e.preventDefault();
		$(this).toggleClass('on').next().next('.scroll_box').slideToggle();
	} );

	//swiper
	var mySwiper1 = new Swiper ('.scroll_box .swiper-container', {
		// 필요한 옵션을 추가함
		//direction: 'vertical',    //horizontal(기본), vertical
		loop: true,               //가장 처음과 마지막에서 무한 롤링 true, false(기본)
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		  hideOnClick: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  type: 'fraction',   //bullets(동그라미아이콘), fraction (현재/전체)
		  clickable: true,    //클릭하여 슬라이더 이동
		},
	  });
});