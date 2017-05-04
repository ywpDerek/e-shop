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

//弹层
var oSmallImg = getClass('small-img')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass('dialog-box')[0];
var oDialogBody = getClass('dialog-body')[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass('dialog-close',oDialogBox)[0];
var oDialogPrev = getClass('dialog-prev',oDialogBox)[0];
var oDialogNext = getClass('dialog-next',oDialogBox)[0];
var oSlideBtn = getClass('slide-btn',oDialogBox)[0];
var oContent = getClass('content',oDialogBox)[0];
var iNow = 0;
for(var i=0; i<aDialogLi.length; i++){
	aDialogLi[i].index = i;
	aDialogLi[i].onclick = function(){
		var oImg = this.getElementsByTagName('img')[0];
		oDialogBox.style.display = 'block';
		oDialogImg.src = oImg.src;

		oContent.style.animation = 'show 1s ease forwards';
		iNow = this.index;
	}
}
//关闭弹曾
oDialogBox.onclick = function(e){
	var target = e.target || event.srcElement;
	//事件源就是点哪个div身上就会在谁身上发生  不会发生冒泡现象
	if(target == oDialogBox || target == oDialogClose){
		oDialogBox.style.display = 'none';
	}
}
oDialogPrev.onclick = function(){
	iNow--;
	if(iNow == -1){
		iNow = aDialogLi.length-1;
	}
	slideNext();
	// oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
}
oDialogNext.onclick = function(){
	iNow++;
	iNow = iNow%aDialogLi.length;
	slideNext();
	// oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
}
function slideNext(){
	//取到下一个li
	var nextLi = aDialogLi[iNow];
	//取到下一个li里的图片的src属性
	var nextSrc = nextLi.getElementsByTagName('img')[0].src;
	//创建一个新的img
	var oImg = document.createElement('img');
	oImg.src = nextSrc;
	//获取到原有图片
	var oldImg = oDialogBody.children[0];
	//插入一张新图，在原有图片前边
	oDialogBody.insertBefore(oImg,oldImg);
	//原有图片动画隐藏
	oldImg.style.animation = 'hide 1s ease forwards';
	//原有图片动画隐藏后 remove掉
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000)
}
var timer = '';
oSlideBtn.onclick = function(){
	if(timer){
		clearInterval(timer);
		timer = '';
	}else{
		timer = setInterval(function(){
			oDialogNext.onclick();
		},1000)
	}
}