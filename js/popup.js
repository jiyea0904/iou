!window.jQuery && document.write(unescape('%3Cscript src="js/minified/jquery-1.9.1.min.js"%3E%3C/script%3E'))

//select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).val());
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
		self.text(self.next('select').val());
	});
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
