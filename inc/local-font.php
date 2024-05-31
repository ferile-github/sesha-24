<?php
class SeshaLocalFont {
	function __construct() {
		add_action( 'admin_enqueue_scripts', array($this, 'enqueue_local_fonts') );
		add_action( 'wp_enqueue_scripts', array($this, 'enqueue_local_fonts') );
	}

	public function enqueue_local_fonts() {
		wp_enqueue_style( 'local-fonts', get_stylesheet_directory_uri() . '/assets/src/fonts.css', array(), null );
	}
}
