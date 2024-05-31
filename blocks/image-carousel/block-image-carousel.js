/* eslint-disable no-undef */
/*eslint-env jquery*/

const CAROUSEL = {
	init : ($) => {
		'use strict';

		$('.js-image-carousel').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 0,
			cssEase: 'linear',
			draggable: false,
			infinite: true,
			mobileFirst: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 4000,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});
	}
};

(($) => {
	CAROUSEL.init($);
})(jQuery);
