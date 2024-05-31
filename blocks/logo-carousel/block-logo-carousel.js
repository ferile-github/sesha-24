/* eslint-disable no-undef */
/*eslint-env jquery*/

const LOGOCAROUSEL = {
	init : ($) => {
		'use strict';

		$('.js-logo-carousel').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 0,
			cssEase: 'linear',
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			mobileFirst: true,
			pauseOnHover: true,
			speed: 1000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 8,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 6,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 4,
					}
				}
			]
		});
	}
};

(($) => {
	LOGOCAROUSEL.init($);
})(jQuery);
