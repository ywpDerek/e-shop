//选项卡 
var oTabBox = document.getElementById('tab-box');
var aLi = oTabBox.getElementsByTagName('li');
var aDiv = getClass('tab-item',oTabBox);
for(var i=0; i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onclick = function(){
		for(j=0 ; j<aDiv.length;j++){
			aDiv[j].style.display = 'none';
			aLi[j].className = '';
		}
		this.className = 'active';
		aDiv[this.index].style.display = 'block';
	}
}

//下拉
var oOption = document.getElementById('option');
var oUp = getClass('up',oOption)[0];
var oUl = oOption.getElementsByTagName('ul')[0];
var aLiTwo = oUl.getElementsByTagName('li');
var oLeft = getClass('left')[0];
var oRight = getClass('right')[0];

	oUp.onmousedown = function(){
		oOption.className = 'option selected';
	}	
	oUp.onmouseup = function(){
		oOption.className = 'option';

		if(oUl.style.display == 'none'||oUl.style.display ==""){
			oUl.style.display = 'block';
		}else{
			oUl.style.display = 'none';
		}
	}
	for(var i=0; i<aLiTwo.length;i++){
		aLiTwo[i].onclick = function(){
			oLeft.innerHTML = this.innerHTML;//innerHTML能取到文字
			oUl.style.display = 'none';
		}
	}
	//事件冒泡
	//取到body的点击事件
	document.body.onclick = function(e){
	//e代表事件 e.target代表事件源，代表你点的是什么标签,ie浏览器取不到
	//ie浏览器的事件源用event.srcElement
		var target = e.target || event.srcElement;

		if(target != oUp && target != oLeft && target != oRight){
			oUl.style.display = 'none';
		}
	}	
