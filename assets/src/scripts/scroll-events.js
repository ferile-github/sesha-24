/* eslint-disable no-undef */
/*eslint-env jquery*/

import { ScrollClass } from './plugins/scrollClass'
// https://github.com/virgiliud/scrollClass.js?files=1

export const SCROLLEVENTS = {
	cache : {},
	updateCache : ($) => {
		SCROLLEVENTS.cache = {
			body: 		$('body'),
			content: 	$('#site-content'),
			footer: 	$('#site-footer'),
		};
	},
	init : ($) => {
		'use strict';

		SCROLLEVENTS.updateCache($);

		// Window scroll
		// ------------------------------------------------------------------
		$(window).on('scroll', () => {
			var scrollposition = $(window).scrollTop()
			// Get the height of the entire document
			var documentHeight = document.documentElement.scrollHeight
			// Get the height of the viewport
			var viewportHeight = window.innerHeight
			// Calculate how far the user has scrolled from the top
			var scrollableHeight = documentHeight - viewportHeight

			// Show the reduced header
			if (scrollposition > 100) {
				SCROLLEVENTS.cache.body.addClass('has-reduced-menu')
			} else {
				SCROLLEVENTS.cache.body.removeClass('has-reduced-menu')
			}

		});



		// Animate Elements on scroll entrance
		// ------------------------------------------------------------------
		document.addEventListener('DOMContentLoaded', function() {
			document.querySelectorAll('[data-scroll-class]').forEach(function(element) {
				new ScrollClass(element, {
					offsetTop: 80,
					threshold: 0
				});
			});
		});

	}
};

