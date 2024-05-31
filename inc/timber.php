<?php
require_once __DIR__ . '../../vendor/autoload.php';
Timber\Timber::init();
Timber::$dirname = [ 'templates', 'views' ];
use Timber\Site;
class SeshaTimber extends Site {
	public function __construct() {
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		parent::__construct();
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		global $wp;
		$context['canonical'] = home_url( $wp->request ).'/';
		$context['title'] = get_the_title();
		$context['options'] = get_fields('option');
		$context['mainnav']  = Timber::get_menu('main-nav');
		$context['utilitynav']  = Timber::get_menu('utility-nav');
		$context['footernav']  = Timber::get_menu('footer-nav');
		$context['sidebarwidgets'] = Timber::get_widgets('sidebar');
		$context['footerwidgets'] = Timber::get_widgets('footer');
		$context['site']  = $this;
		return $context;
	}

}
