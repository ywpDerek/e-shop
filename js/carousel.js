var btnBox =getClass('carousel-btns')[0];
var aBtns = btnBox.getElementsByTagName('li');
var aItem = getClass('carousel-item');
var oImgBox = getClass('carousel-imgs')[0];
var oCarousel = getClass('carousel')[0];
var timer;
var iNow = 0;

// for(var i=0; i<aBtns.length;i++){
// 	aBtns[i].index = i;
// 	aBtns[i].onclick = function(){
// 		// for(var j=0 ; j<aBtns.length;j++){
// 		// 	aBtns[j].className = '';
// 		// }
// 		change(this.index);
// 		iNow = this.index;
// 	oImgBox.style.left = -aItem[0].offsetWidth *this.index+"px";
// 		this.className = 'selected';
// 	}
// }

for(var i=0; i<aBtns.length; i++){
	aBtns[i].index = i;
	aBtns[i].onclick = function(){
		change(this.index);
		iNow = this.index;
	}
}
function change(idx){
	for(var j=0; j<aBtns.length;j++){
		aBtns[j].className = '';
	}
	// animate(oImgBox,{
	// 	left:-aItem[0].offsetWidth * idx
	// });
	//这是个用js写的动画效果，一般会用css
	oImgBox.style.left = -aItem[0].offsetWidth *idx+"px";
	aBtns[idx].className = 'selected';
}
oCarousel.onmouseover = function(){
	clearInterval(timer);
}
oCarousel.onmouseout = function(){
	run();
}
function run(){
	timer = setInterval(function(){
		iNow++;
		if(iNow == aBtns.length){
			iNow = 0;
		}
		change(iNow);
	},2000);
}
run();
