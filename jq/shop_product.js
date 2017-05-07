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
})
