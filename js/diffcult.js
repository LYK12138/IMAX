/*
* @Author: 77235
* @Date:   2019-03-02 21:14:00
* @Last Modified by:   hp
* @Last Modified time: 2019-03-18 15:12:10
*/


var n=0;
var m=0;


/*除了菜单和搜索外的那三个东西，设置鼠标移入移出让p的高变化*/
$('.hover').mouseenter(function(event) {
	$(this).children('.hpz').height(60)
});
$('.hover').mouseleave(function(event) {
	$(this).children('.hpz').height(0)
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
})

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





/*文字简介的缩放效果*/
$('.jianjie').click(function(){
/*	$('.bigback').toggleClass('bigbackb');*/
	$('.bigback').slideToggle(800);

	$('.lleft').toggleClass('lleftb');
	$('.lright').toggleClass('lrightb');

})




$('.bluemore').mouseenter(function(event) {
	$(this).children('.whitep').toggleClass('whitepb')
});
$('.bluemore').mouseleave(function(event) {
	$(this).children('.whitep').toggleClass('whitepb')
});


$('.moresp').mouseenter(function(event) {
	$(this).children('.morep').toggleClass('morepb')
});
$('.moresp').mouseleave(function(event) {
	$(this).children('.morep').toggleClass('morepb')
});



$('.col-xs-6').mouseenter(function(event) {
	$(this).children('.huise').css('opacity','0')
	$(this).children('.thumbnail').children('.suofang').css('transform',' scale(1.07)')
});
$('.col-xs-6').mouseleave(function(event) {
	$(this).children('.huise').css('opacity','0.4');
	$(this).children('.thumbnail').children('.suofang').css('transform',' scale(1.04)')
});

$('.lyk-tp').mouseenter(function(event) {
	$(this).children('.huisebig').css('opacity','0')
	$(this).children('.suofangb').css('transform',' scale(1.07)')
});
$('.lyk-tp').mouseleave(function(event) {
	$(this).children('.huisebig').css('opacity','1');
	$(this).children('.suofangb').css('transform',' scale(1)')
});



$('.fr13').click(function(){
	$('.fr14').slideToggle(700);
	$(this).children('.jiacu').children('.xx1').toggleClass('rotate1');
	$(this).children('.jiacu').children('.xx2').toggleClass('rotate2')

})


/*鼠标移入gif图片时重新赋值src值*/
$('.gif').mouseenter(function(event) {
	var newsrc=$(this).attr("src");
	console.log(newsrc)
	$(this).attr("src",newsrc)

});



$(window).scroll(function() { 
		var topjuli=$(window).scrollTop()
		console.info(topjuli); 


		if(topjuli>40){
			$('.xia').css('opacity','0');
		}



		if(topjuli<400){
			$('.jumu2').css('opacity','0');
		}
		
		if(topjuli>=360){
			$('.jumu2').css('opacity','0.6');
			if(topjuli=700){
				$('.jumu2').css('opacity','1');
			}

			if(topjuli>=1000){
				$('.jumu2').css('opacity','0.6');
				if(topjuli>=1400){
					$('.jumu2').css('opacity','0')
				}
			}
		}
		
})

