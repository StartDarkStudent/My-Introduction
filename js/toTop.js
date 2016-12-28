// 回到顶部箭头
$(document).ready(function() {
	//实现回到顶部
	var topBtn=$('#toTop');
	topBtn.click(function(){
		$('html,body').animate({
			scrollTop: 0
		}, 1000);

	});
	//控制按钮的显示与否
	$(window).scroll(function(){
		//计算滚动条走了多少 
		var sTop = $(window).scrollTop();
		if (sTop >= 160) {
			topBtn.fadeIn('slow');
		} else {
			topBtn.fadeOut('slow');
		}
	});
	
});
