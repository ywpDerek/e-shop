$('tbody tr').on('click',function(){
	if($(this).hasClass('selecting')){
		$(this).removeClass('selecting').find(':checkBox').prop('checked',false);
	}else{
		$(this).addClass('selecting').find(':checkBox').prop('checked',true);
	}
	$('#checkall').prop('checked',$('tbody tr').length == $('tbody tr').filter('.selecting').length)

})
$('#checkall').on('click',function(){
	$('tbody tr').find(':checkBox').prop('checked',$(this).prop('checked'));
	if($(this).prop('checked')){
		$('tbody tr').addClass('selecting');
	}else{
		$('tbody tr').removeClass('selecting');
	}
})
