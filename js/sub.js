!window.jQuery && document.write(unescape('%3Cscript src="js/minified/jquery-1.9.1.min.js"%3E%3C/script%3E'))

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
	$(".mypage, .menu_mypage").mouseover(function(){
		$(".menu_mypage").css('display', 'block');			
	});

	$(".mypage, .menu_mypage").mouseout(function(){
		$(".menu_mypage").css('display', 'none');			
	});	
});

//MyPageMenu
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

//layer_popup_pwchange
function openpopup_pwchange(){
	$('#popup_pwchange').css('display', 'block');	
}

function closepopup_pwchange(){
	$('#popup_pwchange').css('display', 'none');
}

//layer_popup_term
function openpopup_term_01(){
	$(".scroll").mCustomScrollbar("destroy");
	$('#popup_term').css('display', 'block');
	$('#popup_term .pop_content div').removeClass('m1', 'm2', 'm3');	
	$('#popup_term .pop_content > div').addClass('m1');
	$(".scroll").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
    });
}

function openpopup_term_02(){
	$(".scroll").mCustomScrollbar("destroy");
	$('#popup_term').css('display', 'block');
	$('#popup_term .pop_content div').removeClass('m1', 'm2', 'm3');	
	$('#popup_term .pop_content > div').addClass('m2');
	$(".scroll").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
    });
}


function openpopup_term_03(){
	$(".scroll").mCustomScrollbar("destroy");
	$('#popup_term').css('display', 'block');	
	$('#popup_term .pop_content div').removeClass('m1', 'm2', 'm3');	
	$('#popup_term .pop_content > div').addClass('m3');
	$(".scroll").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
    });
}


function closepopup_term(){
	$('#popup_term').css('display', 'none');
	$('#popup_term .pop_content div').removeClass('m1');
	$('#popup_term .pop_content div').removeClass('m2');
	$('#popup_term .pop_content div').removeClass('m3');	
}


//term_menu
jQuery(function($){
	var tab = $('.term_menu');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.term_menu:first').attr('class', 'term_menu '+myClass);
		tab.css('height', t.next('div').height());
		$(".scroll").mCustomScrollbar("destroy");
		$(".scroll").mCustomScrollbar({
            scrollButtons:{
               enable:true
            }
        });
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});


(function($){
   $(window).load(function(){
      try {
         $(".scroll").mCustomScrollbar({
            scrollButtons:{
               enable:true
            }
         });
      } catch (e) {
         // TODO: handle exception
      }
   });
})(jQuery);

// ip-exchange table slide
$(document).ready(function () {
	$(window).load(function(){
        $("#a1").slideDown("slow");
		$("#a2").slideDown("slow");
		$("#a3").slideDown("slow");
		$("#a4").slideDown("slow");
		$("#a5").slideDown("slow");

        return false;
    });
});


//layer_popup_detailinfo
function openpopup_detailinfo(){
	$('#popup_detailinfo').css('display', 'block');	
}

function closepopup_detailinfo(){
	$('#popup_detailinfo').css('display', 'none');
}



