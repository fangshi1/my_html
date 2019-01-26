$(function() {
	//				事件触发限制	
	var moveity = true;
	scroll_();
	//			监听滚轴事件
	$(window).scroll(function(event) {
		scroll_();
	});

	function scroll_() {
		var kd_width = document.documentElement.clientWidth; //屏幕宽度
		document.documentElement.clientHeight;
		var sumheight = $(document).height() //当前文档总高度
		var winPos = $(window).scrollTop(); //滚动高度
		var winheight = $(window).height(); //当前可视屏幕高度
		var winmax = winPos + winheight; //滚动位置=滚动高度+当前可视屏幕高度
		var winvvv = sumheight % winmax;
		moveid("delayeds", "delay_img",winmax); //调用
	}

	function moveid(uid,g,winmax) {
		var that = $('#' + uid).offset().top; //当前区域离顶部位置
		var thatheight = $('#' + uid).height(); //区块本身高度
		var imgheight = $('#' + g).height(); //区块本身高度
		//					console.log("....滚轴高度"+winmax);
		//					console.log("....当前区块高度"+that);
		if(winmax <= (that + imgheight)) {
			$('.ganglay').removeClass("faroth");
			//						console.log("上部")
		} else {
			$('.ganglay').addClass("faroth");
			//						console.log("下部1111")
		}

	}

})