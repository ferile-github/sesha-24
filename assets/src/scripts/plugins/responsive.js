/*eslint-env jquery*/
/* global, ga, google */

/*
	Responsive Screen detect ver 3.0
	andyfairlie.com
*/
export class Responsive {
	breakpoints = {
		'isXS' : false,
		'isSM' : false,
		'isMD' : false,
		'isLG' : false,
	}

	constructor($) {
		this.init($)
		$(window).on('resize', () => {
			this.init($)
		})
	}

	init() {
		this.breakpoints.isXS = this.detect('#RESPONSIVE_XS');
		this.breakpoints.isSM = this.detect('#RESPONSIVE_SM');
		this.breakpoints.isMD = this.detect('#RESPONSIVE_MD');
		this.breakpoints.isLG = this.detect('#RESPONSIVE_LG');

		$(window).data('responsive', this.breakpoints);
	}

	detect(id) {
		if ($(id).css('display') === 'block' ) {
			return true;
		} else {
			return false;
		}
	}

}
