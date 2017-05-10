//下拉框
$('.up').on('mousedown',function(){
	$('#option').addClass('selected');
});
$('.up').on('mouseup',function(){
	$('#option').removeClass('selected');
	$('.down').toggle();
});
$('.down li').on('click',function(){
	$('.left').html($(this).html());
	$('.down').hide();
});
$(document).on('click',function(e){
	if(e.target != $('.up')[0] && e.target != $('.left')[0] && e.target != $('.right')[0]){
		$('.down').hide();
	}
})

//选项卡
$('.btn-box li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.tab-item').eq($(this).index()).show().siblings().hide();
});
//弹层
var iNow = 0;
$('.small-img li').on('click',function(){
	$('.dialog-box').show();
	$('.content').animate({
		top:'50%'
	},1000);
	$('.dialog-body').find('img').attr('src',$(this).find('img').attr('src'));
	// console.log($('.dialog-body').find('img').attr('scr'))
	iNow = $('.small-img li').index();
});
$('.dialog-box').on('click',function(e){
	if(e.target == $('.dialog-close')[0] || e.target == $('.dialog-box')[0]){
		$('.dialog-box').hide();
		$('.content').stop().css('top','-249px');
	}
});
$('.dialog-next').on('click',function(){
	iNow++;
	iNow = iNow%$('.small-img li').length;

	var $NextImgSrc = $('.small-img img').eq(iNow).attr('src');
	$('.dialog-body img').eq(0).before('<img src="'+$NextImgSrc+'"/>');
	$('.dialog-body img').eq(0).siblings('img').fadeOut(1000,function(){
		$(this).remove();
	});
});
$('.dialog-prev').on('click',function(){
	iNow--;
	if(iNow == -1){
		iNow = $('.small-img li').length-1;
	}
	var $PrevImgSrc = $('.small-img img').eq(iNow).attr('src');
	$('.dialog-body img').eq(0).before('<img src="'+$PrevImgSrc+'"/>');
	$('.dialog-body img').eq(0).siblings('img').fadeOut(1000,function(){
		$(this).remove();
	});
})
