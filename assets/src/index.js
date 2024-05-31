/* eslint-disable no-undef */
/*eslint-env jquery*/

import './css/main.css'

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

import { Responsive } from './scripts/plugins/responsive'

import { SCROLLEVENTS } from './scripts/scroll-events'
import { SITE } from './scripts/site'
import { MASTHEAD } from './scripts/masthead'

(($) => {
	new Responsive($)
	SCROLLEVENTS.init($)
	SITE.init($)
	MASTHEAD.init($)
})(jQuery);
