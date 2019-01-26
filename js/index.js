//		教育成果切换
		$(".infor_text").eq(0).css("display", "block");
		$(".infor_title_list").click(function() {
			$(".infor_title_list").removeClass("actery_infor");
			$(this).addClass("actery_infor");
			var that = $(this).attr("data-id");
			$(".infor_text").css("display", "none");
			$(".infor_text").eq(that).css("display", "block");
		});
//		教育成果切换		
//		关于我们文章切换
		$(".about_max").eq(0).css("display", "block");
		$(".shang_about_listnaw span").click(function() {
			$(".shang_about_listnaw span").removeClass("actlistnaw");
			$(this).addClass("actlistnaw");
			var that = $(this).attr("data-text");
			var thaturl = $(this).attr("data-href");
			var thatsrc = $(this).attr("data-src");
			$(".shang_about_pull_text").text(that);
			$("#listnaw_url").attr("href", thaturl);
			$(".about_max_left img").attr("src", thatsrc);
			
		});
//		关于我们文章切换

//		返回顶部
				$("#up_top").click(function() {
					$('html').animate({
						scrollTop: 0
					}, 500);
				});
var the_length = $(".rotate_list span").length; //总条数
var initial = 0; //当前位置
//		图片点击选择
$(".rotate_list span").click(function() {
	mumbe_(this, 0);
	initial = $(this).attr("data-id");
});
//		按钮点击选择
$(".rotate_right_loat span").click(function() {
	var kthe = $(this).attr("data-id");
	if(kthe == '0') {
		reduce_();
	} else {
		plus_();
	}
});
//		数据实现方法
function mumbe_(e, q) {
	$(".rotate_list span").removeClass("rotatelor");
	if(q == '1') {
//		console.log(e)
		var data_href = $(".rotate_list span").eq(e).attr("data-href");
		var data_url = $(".rotate_list span").eq(e).attr("data-url");
		var data_name = $(".rotate_list span").eq(e).attr("data-name");
		var data_lab = $(".rotate_list span").eq(e).attr("data-lab");
		var data_desc = $(".rotate_list span").eq(e).attr("data-desc");
		var data_num = $(".rotate_list span").eq(e).attr("data-num");
		$(".rotate_list span").eq(e).addClass("rotatelor");
	} else {
		var data_href = $(e).attr("data-href");
		var data_url = $(e).attr("data-url");
		var data_name = $(e).attr("data-name");
		var data_desc = $(e).attr("data-desc");
		var data_lab = $(e).attr("data-lab");
		var data_num = $(e).attr("data-num");
		$(e).addClass("rotatelor");
	}
	$(".rotate_left a").attr("href", data_href);
	$(".rotate_left a img").attr("src", data_url);
	$(".rotate_boxlibe").text(data_lab);
	$(".rotate_boxtite").text(data_name);
	$(".rotate_right_text").text(data_desc);
	$(".rotate_data_num").text(data_num);
}
//		向右走
function plus_() {
	if(initial < the_length) {
		initial++;
		if(initial == the_length) {
			initial = 0;
		}
		mumbe_(initial, 1);
	}
}
//		向左走		
function reduce_() {
	if(initial >= 0) {
		if(initial == 0) {
			initial = the_length;
		}
		initial--;
		mumbe_(initial, 1);
	}
}
//		计时器
//var thai = setInterval("plus_()", 2000);
//		鼠标进入
//$(".rotate").mousemove(function() {
//	clearInterval(thai)
//})
//		鼠标离开
//$(".rotate").mouseout(function() {
//	thai = setInterval("plus_()", 2000);
//})