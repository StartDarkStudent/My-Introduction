// 圆形进度条
$(function(){

	$('#html').radialIndicator({
				radius:70,//圆形指示器内部圆半径
				barColor: '#ff675f',//刻度条背景颜色
				barWidth: 10,//宽度
				initValue: 0,//初始化的之
				roundCorner : true,//是否有圆角
				percentage: true//t显示圆形指示器的百分比数值
			});
			var radialObj1 = $('#html').data('radialIndicator');
			radialObj1.animate(80);
			//获取对象实例 动画运动时间长度

			$('#css').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#css').data('radialIndicator');
			radialObj2.animate(80);
			$('#javascript').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#javascript').data('radialIndicator');
			radialObj3.animate(70);
			$('#jquery').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj4 = $('#jquery').data('radialIndicator');
			radialObj4.animate(70);
			$('#bootstrap').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#bootstrap').data('radialIndicator');
			radialObj5.animate(70);
			$('#less').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#less').data('radialIndicator');
			radialObj6.animate(50);
			$('#ps').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#ps').data('radialIndicator');
			radialObj7.animate(30);
			$('#flash').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#flash').data('radialIndicator');
			radialObj8.animate(50);

	
})