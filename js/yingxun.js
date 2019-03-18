/*
* @Author: 77235
* @Date:   2019-03-02 21:14:00
* @Last Modified by:   77235
* @Last Modified time: 2019-03-17 22:03:36
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


$('.zhankai').click(function(){
	$('.top2').slideToggle(300);
	$(this).toggleClass('zhankaiblue');
	$(this).children().toggleClass('zhankaiblue:after');
})


$('.msp').hover(function(){
	$('.mspb').slideToggle(600);
})

/*$('.lyk-main').scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
            if ($(this).scrollTop() >=1) {
                $(".natiaoxian").css("display","none");
            }else{
                $(".natiaoxian").css("display","block");//也可能是absolute等，反正就是你原来的值
           }
           /*if ($(this).scrollTop() >= 150) {
                $("div.log").css("position","fixed");
            }else{
                $("div.log").css("position","relative");//也可能是absolute等，反正就是你原来的值
           }*/

 $(function () {            
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 10900) {
                    $(".natiaoxian").css("display","none");
                }
                else {
                  	$(".natiaoxian").css("display","block");
                } 
            });
        })