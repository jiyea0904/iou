//select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				//$(this).prev('.txt').text($(this).val());
				$(this).prev('.txt').text($(this).children("option:selected").text());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 2 + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		//self.text(self.next('select ').val());
		self.text(self.next('select').children("option:selected").text());
	});
});

//submenu
$(function(){
	$(".gnb li, .submenu").mouseover(function(){
		$(".submenu").css('display', 'block');			
	});

	$(".gnb li, .submenu").mouseout(function(){
		$(".submenu").css('display', 'none');			
	});	
});


//submenu rolling
$(document).ready(function(){

	var timer = setInterval(function () {
		if (ImageChangeIndex > ImageChangeTotal) { ImageChangeIndex = 1; } else { ImageChangeIndex++; }
			Popup_Common(strPopupbtnList, ImageChangeIndex);
		}
		, 5000);


	var strPopupObj = ".popup_warp > div";
	var strPopupbtnList = ".navi_pop > a";
	var strRollingList = ".rolling_img > a";
	var ImageChangeIndex = 1;
	var ImageChangeTotal = $(strPopupObj).length - 1;

	// stop
	$(".popup_btn_stop").click(function () {
		clearInterval(timer);
		$(".popup_btn_play").attr('tabindex','0').focus();		
	});
	// play
	$(".popup_btn_play").click(function () {
		timer = setInterval(function () {
		if (ImageChangeIndex > ImageChangeTotal) { ImageChangeIndex = 1; } else { ImageChangeIndex++; }
			Popup_Common(strVisualbtnList, ImageChangeIndex, ImageChangeTotal);
		}
		, 5000);
		$(".popup_btn_stop").attr('tabindex','0').focus();
	});

	// btnVisualList button
	$(strPopupbtnList).click(function () {
		var getIdx = $(strPopupbtnList).index(this) + 1;
		$(strPopupbtnList).removeClass("on");
		$(this).addClass("on");
		$(".popup_con").hide();
		$("#pimg0"+getIdx).show();
	});
});

function Popup_Common(strPopupbtnList, ImageChangeIndex, ImageChangeTotal){
	$(strPopupbtnList).removeClass("on");
	$(".popup_con").hide();
	$("#paimg0"+ImageChangeIndex).addClass("on");
	$("#pimg0"+ImageChangeIndex).show();
}


