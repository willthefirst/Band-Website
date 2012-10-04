var BLOG = {

	stickTheNav: function() { 
		var stickyTop = ($('.js_sticky').offset().top + 120);

		$(window).scroll(function() {
			var windowTop = $(window).scrollTop();

			if (stickyTop < windowTop) {
				$('.js_sticky').css({
					position: 'fixed',
					top: '-120px'
				});

				$('.anchorLink').css({
					top: '155px'
				});
			}
			else {
				$('.js_sticky').css({
					position: 'static'
				});

				$('.anchorLink').css({
					top: '110px'
				});
			}
		});

		$(window).resize(function() {
			stickyTop = ($('.js_sticky').offset().top + 120);
		});
	}

};


$(function() {
	BLOG.stickTheNav();
});