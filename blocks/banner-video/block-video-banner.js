/* eslint-disable no-undef */
/*eslint-env jquery*/

const VIDEOBANNER = {
	init : ($) => {
		'use strict';

		const video = document.getElementById('block-banner-video'),
					anchor = '#content-below-banner',
					dataValue = video.getAttribute('data-content-scroll');

		let firstLoop = true;

		if(dataValue === null) return;

		video.addEventListener('timeupdate', function() {
			const duration = video.duration,
						currentTime = video.currentTime;

			if (currentTime >= duration - 0.3 && firstLoop === true) {
				window.location.hash = anchor;
				firstLoop = false;
			}
		});

	}
};

(($) => {
	VIDEOBANNER.init($);
})(jQuery);
