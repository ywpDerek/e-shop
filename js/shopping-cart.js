var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var oCheckAll = document.getElementById('checkall');
var aInPut = getClass('input',oTbody);

for(var i=0; i<aTr.length;i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		if(this.className =='selectable selecting'){
			this.className = 'selectable';
			oCheck.checked = false;
		}else{
			this.className = 'selectable selecting';
			oCheck.checked = true;
		}

		//判断是否全勾上
		var aCheckTr = getClass('selecting',oTbody);
		if(aCheckTr.length ==aTr.length){
			oCheckAll.checked = true;
		}else{
			oCheckAll.checked = false;
		}
	}
}

//全选按钮点击
// oCheckAll.onclick = function(){
// 	for(var i=0; i<aTr.length;i++){
// 		if(this.checked == true){
// 			aTr[i].className = 'selectable selecting';
// 		}else{
// 			aTr[i].className = 'selectable';
// 		}
// 		aInPut[i].checked = this.checked;
// 	}
// }

var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];

oTr.onclick = function(e){  //事件冒泡问题
	var target = e.target || event.srcElement;
	if(target != oCheckAll){
		oCheckAll.checked = !oCheckAll.checked;
	}
	for(var i=0; i<aTr.length;i++){
	if(oCheckAll.checked == true){
			aTr[i].className = 'selectable selecting';
		}else{
			aTr[i].className = 'selectable';
		}
		aInPut[i].checked = oCheckAll.checked;
	}
}