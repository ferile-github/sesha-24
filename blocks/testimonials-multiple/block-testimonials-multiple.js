/* eslint-disable no-undef */
/*eslint-env jquery*/

const MULTIPLETESTIMONIALS = {
	init : ($) => {
		'use strict';

		const PREVARROW = `<button type="button" class="slick-prev">
			<svg xmlns="http://www.w3.org/2000/svg" width="30.29" height="24.112" viewBox="0 0 30.29 24.112">
				<g transform="translate(0.707 0.707)">
					<path class="carousel__arrow" d="M107.625,0H78.542" transform="translate(-78.542 11.349)" fill="none" stroke-linecap="round" stroke-width="1"/>
					<g transform="translate(0)" style="isolation: isolate">
					<line class="carousel__arrow" x1="11.349" y2="11.349" transform="translate(0)" fill="none" stroke-linecap="round" stroke-width="1"/>
					<line class="carousel__arrow" x1="11.349" y1="11.349" transform="translate(0 11.349)" fill="none" stroke-linecap="round" stroke-width="1"/>
					</g>
				</g>
			</svg>
		</button>`;

		const NEXTARROW = `<button type="button" class="slick-next">
			<svg xmlns="http://www.w3.org/2000/svg" width="31.079" height="23.414" viewBox="0 0 31.079 23.414">
				<g transform="translate(1.5 0.358)">
					<path class="carousel__arrow" d="M78.542,0h29.083" transform="translate(-79.542 11.349)" fill="none" stroke-linecap="round" stroke-width="1"/>
					<g transform="translate(17.734 0)" style="isolation: isolate">
					<line class="carousel__arrow" x2="11" y2="11" transform="translate(0.139 0.349)" fill="none" stroke-linecap="round" stroke-width="1"/>
					<line class="carousel__arrow" y1="11" x2="11" transform="translate(0.139 11.349)" fill="none" stroke-linecap="round" stroke-width="1"/>
					</g>
				</g>
			</svg>
		</button>`;

		$('.js-multiple-testimonials').slick({
			arrows: true,
			appendArrows: '.js-multiple-testimonials-arrows',
			prevArrow: PREVARROW,
			nextArrow: NEXTARROW,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'ease-in-out',
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: 'unslick'
				}
			]
		});
	}
};

(($) => {
	MULTIPLETESTIMONIALS.init($);
})(jQuery);

