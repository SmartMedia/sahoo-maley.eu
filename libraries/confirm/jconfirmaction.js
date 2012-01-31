/*
 * jQuery Plugin : jConfirmAction
 * 
 * by Hidayat Sagita
 * http://www.webstuffshare.com
 * Licensed Under GPL version 2 license.
 *
 */
(function($){

	jQuery.fn.jConfirmAction = function (options) {
		
		// Some jConfirmAction options (limited to customize language) :
		// question : a text for your question.
		// yesAnswer : a text for Yes answer.
		// cancelAnswer : a text for Cancel/No answer.
		var theOptions = jQuery.extend ({
			question: "Opravdu smazat ?",
			yesAnswer: "Ano",
			cancelAnswer: "Ne"
		}, options);
		
		return this.each (function () {
			
			$(this).bind('click', function(e) {
				
				
				e.preventDefault();
				thisHref	= $(this).attr('href');
				
				var elem = this;
				
				if($(this).next('.question').length <= 0)
					$(this).after('<div class="question">'+theOptions.question+'<br/> <span class="yes">'+theOptions.yesAnswer+'</span><span class="cancel">'+theOptions.cancelAnswer+'</span></div>');
				
				$(this).next('.question').animate({opacity: 1}, 300);
				
				if ($(this).attr('rel') != "nohref") {
					$('.yes').bind('click', function(){
						window.location = thisHref;
					});
				} else {
					$('.yes').bind('click', function(){
						$(elem).trigger("click2");
						$(this).parents('.question').fadeOut(300, function() {
							$(this).remove();
						});
					});
				}
				
		
				$('.cancel').bind('click', function(){
					$(this).parents('.question').fadeOut(300, function() {
						$(this).remove();
					});
				});
				
			});
			
		});
	}
	
})(jQuery);