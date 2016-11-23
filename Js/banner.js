$(document).ready(function(){
		var slidee=$(".slidee");
		var wid=$(".slidee li").eq(0).width();
		var btn=$(".slidebtn>li");
		var iNow=0;
		btn.on("click",function(){
			$(this).addClass('on').siblings().removeClass('on');
			var index=$(this).index();
				slidee.animate({
				"left":-wid*index,
				},
				1000);	
		});
		var timer=null;
		timer=setInterval(function(){
			iNow++;
			if(iNow>btn.length-1){
				iNow=0;
			}
			btn.eq(iNow).trigger('click');
		},2000);


		$.get('http://121.42.51.3/xpple/fruit?areaId=1', function(data) {
			
			for (var i = 0; i < data.data.fruits.length; i++) {
				var src=data.data.fruits[i].Picture;
				var name=data.data.fruits[i].Name;
				var price=data.data.fruits[i].Price;
				var unit=data.data.fruits[i].Unit;
				$(".pics").append('<div></div>');
				var pic=$(".pics>div:last");
				pic.addClass('pic');
				pic.append('<img src="'+src+'"/>');
				pic.append('<span>'+name+price+"元 /"+unit+'</span>');
			}
			
		});
		var picwid =$(".pic").width;
		var cols=$(window).width/picwid;
		

	
		
		
});
