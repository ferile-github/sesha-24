/* eslint-disable no-undef */
/*eslint-env jquery*/

export const MASTHEAD = {
	cache : {},
	updateCache : ($) => {
		MASTHEAD.cache = {
			body: 		$('body'),
			navigation: $('#site-navigation'),
			header:		$('#site-masthead'),
			content: 	$('#site-content'),
			contact: 	$('#get-in-touch'),
		};
	},
	init : ($) => {
		'use strict';

		MASTHEAD.updateCache($);

		console.log('MASTHEAD Loaded');
		const RESPONSIVE = $(window).data('responsive');

		// Window scroll - navbar animation
		// ------------------------------------------------------------------
		$(window).on('scroll', () => {
			var scrollposition = $(window).scrollTop();

			if (scrollposition > 400) {
				MASTHEAD.cache.body.addClass('has-reduced-menu');
			} else {
				MASTHEAD.cache.body.removeClass('has-reduced-menu');
			}
		});


		// Overlays
		// ------------------------------------------------------------------
		$('.main-menu-overlay').on('click', () => {
			MASTHEAD.cache.body.removeClass('has-navigation-active');
			MASTHEAD.cache.body.removeClass('has-contact-active');
		});

		// Navigation menu
		// ------------------------------------------------------------------
		// Show the off canvas menu
		MASTHEAD.cache.header.on('click', '.js-toggle-offcanvas-menu', () => {
			MASTHEAD.cache.body.toggleClass('has-navigation-active');
			MASTHEAD.cache.body.removeClass('has-search-active');
		});

		MASTHEAD.cache.header.on('click', '.js-toggle-offcanvas-contact', () => {
			MASTHEAD.cache.body.toggleClass('has-contact-active');
			MASTHEAD.cache.body.removeClass('has-navigation-active');
		});


		// Search Dropdown toggle
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		MASTHEAD.cache.header.on('click', '.js-toggle-dropdown', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parents('.search__dropdown');

			if($el.hasClass('search__toggle') ) {
				MASTHEAD.cache.body.toggleClass('has-search-active');
				MASTHEAD.cache.body.removeClass('has-cart-active');
				$parent.find('input[type=search]').focus();
			} else {
				MASTHEAD.cache.body.toggleClass('has-cart-active');
				MASTHEAD.cache.body.removeClass('has-search-active');
			}

			MASTHEAD.cache.body.removeClass('has-navigation-active');

			return false;
		});


		// Search field focus
		// ------------------------------------------------------------------
		// If a user clicks on the search toggle button for mobile
		MASTHEAD.cache.header.on('focus', '.search__input', () => {
			if (RESPONSIVE.isMD || RESPONSIVE.isLG) {
				if(MASTHEAD.cache.body.hasClass('has-standard-search')) {
					MASTHEAD.cache.body.addClass('has-search-active');
				}
			}
		});


		// Mobile Flyout menu
		// -----------------------------------------------------------
		var cascadeLevel = 1;
		MASTHEAD.cache.navigation.on('click', '.menu-item-has-children > .menu-link', (event) => {
			const $el = $(event.currentTarget),
				$parent = $el.parent('li');

			// Force next navigation level to be shown
			$parent.addClass('is-expanded').siblings().removeClass('is-expanded');

			cascadeLevel++;
			MASTHEAD.cache.navigation.addClass('cascade-level-' + cascadeLevel);

			if (RESPONSIVE.isLG === false) {
				return false;
			}
		});

		// Back Button - Mobile Flyout menu
		// -----------------------------------------------------------
		MASTHEAD.cache.navigation.on('click', '.js-menu-back-button', () => {
			MASTHEAD.cache.navigation.removeClass('cascade-level-' + cascadeLevel);
			cascadeLevel--;
			MASTHEAD.cache.navigation.addClass('cascade-level-' + cascadeLevel);

			return false;
		});


		// Scale Youtube clips nicely
		// ------------------------------------------------------------------
		$('iframe[src*="youtube"], iframe[src*="vimeo"]').wrap('<div class="video-container"></div>');

	}
};
