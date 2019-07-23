jQuery(function ($) {
  $('#top-image').bgswitcher({
    images: ['img/top-img1.png', 'img/top-img2.png', 'img/top-img3.png', 'img/top-img4.png', 'img/top-img5.png'],
    interval: 4000,
    effect: "fade",
    duration: 1000,
    easing: "swing",
  });
});

$(function() {
	var height = $(window).height();
	var $eyeCatch = $("#eyeCatch");
	//iPhone・iPad背景画像バグ対処
	var device = navigator.userAgent;
	if (device.indexOf('iPhone') !== -1 || device.indexOf('iPad') !== -1) {
		//iPhoneかiPadならば
		$("#eyeCatch li").css({ "background-position": "top center",
					"background-size": "auto " + height + "px" });
	}
});

$(function() {
  $(".nav-toggle").click(function() {
    $(".nav-toggle div").toggleClass("active");
  });
});

$(function() {
  $(".gnav__link").click(function() {
    $(".nav-toggle div").toggleClass("active");
  });
});

$(function() {
  $(".nav-toggle").click(function() {
    $(".gnav").toggleClass("open");
  });
});

$(function() {
  $(".gnav__link").click(function() {
    $(".gnav").toggleClass("open");
  });
});

$(function() {
  var topBtn = $('#page_top');
  topBtn.hide();

  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){

    var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 1200; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm + 200;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});
