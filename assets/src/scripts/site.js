/* eslint-disable no-undef */
/*eslint-env jquery*/

export const SITE = {
	init : ($) => {
		'use strict';

		$('iframe[src*="youtube"], iframe[src*="vimeo"]').wrap('<div class="video-container"></div>');

	}
};
