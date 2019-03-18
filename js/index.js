/*
* @Author: 77235
* @Date:   2019-03-02 21:14:00
* @Last Modified by:   hp
* @Last Modified time: 2019-03-18 18:41:14
*/


var n=0;
var m=0;
var timer;

/*网页初始时获取最开始的图片高度的值
并赋值给ul，和溢出隐藏结合使只显示一排*/
var firstheight=$('#tp1').css('height');

var firstwidth=$('#tp1').css('width');


console.log(firstheight);
console.log(firstwidth);

/*设置ul的高度为三个图片排列时图片的高*/
$('.lbtul2').css('height',firstheight);






/*获取缩放窗口时第一张图片的高度*/
/*console.log($('#tp1').css('height'));*/
$(window).resize(function(e){
	/*onsole.log($('#tp1').css('height'));*/
	var newheight=$('#tp1').css('height');

	var newwidth=$('#tp1').css('width');
	console.log(newwidth);

	/*把缩放后图片变化的高度赋给div和ul的高，宽度则靠媒体查询安排即可*/
	$('.lbt2').css('height',newheight);
	$('.lbtul2').css('height',newheight);
	/*$('.lbtli2').css('width',newwidth);*/
})








function time(){
	timer=setInterval(function(){
		m++;
		if(m>6){
			m=0;
			lykul.style.transition='all 0s';
			lykul.style.left='0px';
			setTimeout(function(){
				m=1;
				lykul.style.transition='all 1s';
				lykul.style.left=-33.333333*m+'%';
			},10)
		}else{
			lykul.style.transition='all 1s';
		}
		console.log(m)
		lykul.style.left=-33.333333*m+'%';
		console.log(lykul.style.left)
		/*让ul移动达到轮播图的效果*/
		

	},3000)

}
time();





/*网页初始巨幕消失效果*/
function xiaoshi(){
	timer=setTimeout(function(){
		n++;
		if(n=1){
			$('.big').toggleClass('black1b');
		}
	},300)	
}
xiaoshi()




/*除了菜单和搜索外的那三个东西，设置鼠标移入移出让p的高变化*/
$('.hover').mouseenter(function(event) {
	$(this).children('.hp').height(60)
});
$('.hover').mouseleave(function(event) {
	$(this).children('.hp').height(0);
});




/*分别为菜单和搜索设置鼠标移入移出事件同时做判断*/

/*搜索制作*/
$('.hoverss').mouseenter(function(event) {
	$(this).children('.hp1').height(60)


	/*判断当搜索框出现的时候*/
	if($('#ss1').hasClass('ss1bian')){
		$('#lykss').children('.hp1').height(60)
		$('#lykss').children('.ss').children('.yuan').css('border-color','white')
		$('#lykss').children('.ss').children('.xian').css('border-color','white')
	}else{
		$('#lykss').children('.hp1').height(60)
		$('#lykss').children('.ss').children('.yuan').css('border-color','white')
		$('#lykss').children('.ss').children('.xian').css('border-color','white')
	}
});
$('.hoverss').mouseleave(function(event) {
	/*$(this).children('.hp1').height(0)*/


	/*判断当搜索框出现的时候*/
	if($('#ss1').hasClass('ss1bian')){
		$('#lykss').children('.hp1').height(60)
		$('#lykss').children('.ss').children('.yuan').css('border-color','white')
		$('#lykss').children('.ss').children('.xian').css('border-color','white')
	}else{
		$('#lykss').children('.hp1').height(0)
		$('#lykss').children('.ss').children('.yuan').css('border-color','black')
		$('#lykss').children('.ss').children('.xian').css('border-color','black')
	}

});

/*菜单制作*/
$('.hovercd').mouseenter(function(event) {
	$(this).children('.hp2').height(60)


	/*判断当搜索框出现的时候*/
	if($('.lyk-fr1').hasClass('xianshi')){
		$('#lykcd').children('.hp2').height(60)
		$('#lykcd').children('.ss2').children().css('border-color','white')
		$('#lykcd').children('.ss2').children().css('border-color','white')
	}else{
		$('#lykcd').children('.hp2').height(60)
		$('#lykcd').children('.ss2').children().css('border-color','white')
		$('#lykcd').children('.ss2').children().css('border-color','white')
	}
});
$('.hovercd').mouseleave(function(event) {
	/*$(this).children('.hp1').height(0)*/


	/*判断当搜索框出现的时候*/
	if($('.lyk-fr1').hasClass('xianshi')){
		$('#lykcd').children('.hp2').height(60)
		$('#lykcd').children('.ss2').children().css('border-color','white')
		$('#lykcd').children('.ss2').children().css('border-color','white')
	}else{
		$('#lykcd').children('.hp2').height(0)
		$('#lykcd').children('.ss2').children().css('border-color','black')
		$('#lykcd').children('.ss2').children().css('border-color','black')
	}

});




$('.ss').click(function(){
	$('.xian').toggleClass('xianbian');
	$('.yuan').toggleClass('yuanbian');
	/*console.log($('.xian').hasClass('xianbian'))*/

	$('.lyk-ss1').toggleClass('ss1bian');
	$('.inp').toggleClass('inpb');
	$('.sp').toggleClass('spb1');


	if($('.lyk-fr1').hasClass('xianshi')){
		$('.lyk-fr1').removeClass('xianshi');
		$('.x1').removeClass('x1b');
		$('.x2').removeClass('x2b');
		$('.x3').removeClass('x3b');
		$('#lykcd').children('.hp2').height(0);
		$('#lykcd').children('.ss2').children().css('border-color','black')
		$('#lykcd').children('.ss2').children().css('border-color','black')
	}
})


$('.ss2').click(function(){
	$('.x1').toggleClass('x1b');
	$('.x2').toggleClass('x2b');
	$('.x3').toggleClass('x3b');
	$('.lyk-fr1').toggleClass('xianshi');


	if($('.lyk-ss1').hasClass('ss1bian')){
		$('.lyk-ss1').removeClass('ss1bian');
		$('.xian').removeClass('xianbian');
		$('.yuan').removeClass('yuanbian');
		$('.lyk-ss1').removeClass('ss1bian');
		$('.inp').removeClass('inpb');
		$('.sp').removeClass('spb1');

		$('#lykss').children('.hp1').height(0)
		$('#lykss').children('.ss').children('.yuan').css('border-color','black')
		$('#lykss').children('.ss').children('.xian').css('border-color','black')

	}
})


$('.fr13').click(function(){
	$('.fr14').slideToggle(700);
	$(this).children('.jiacu').children('.xx1').toggleClass('rotate1');
	$(this).children('.jiacu').children('.xx2').toggleClass('rotate2')

})



 $(function () {            
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 2900) {
                    $(".natiaoxian").css("display","none");
                }
                else {
                  	$(".natiaoxian").css("display","block");
                } 
            });
        })