var BLOG = {

	stickTheNav: function() {
		var stickyTop, stickyText;

		var setTops = function() {
			console.log('resetTop');
			stickyTop = ($('.js_sticky').offset().top + 120);
			stickyText = stickyTop - 45;
		};

		setTops();
		console.log(stickyTop);

		$(window).scroll(function() {
			var windowTop = $(window).scrollTop();

			if (stickyTop < windowTop) {
				$('.js_sticky').css({
					position: 'fixed',
					top: '180px'
				});
			}

			else {
				$('.js_sticky').css({
					position: 'absolute',
					top: '100%'
				});
			}

			if (stickyText < windowTop) {
				$('.anchorLink').css({
					position: 'fixed',
					top: '35px',
					left: '50%',
					'margin-left': '-55px'
				});
			}

			else {
				$('.anchorLink').css({
					position: '',
					top: '',
					left: '',
					'margin-left': ''
				});
			}
		});

		$(window).resize(function() {
			setTops();
		});
	}

};


$(function() {
	BLOG.stickTheNav();
});