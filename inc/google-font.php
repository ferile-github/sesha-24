<?php
class SeshaGoogleFont {
	public $font = '';

	function __construct($font) {
		$this->font = $font;

		add_action( 'admin_enqueue_scripts', array($this, 'enqueue_google_fonts') );
		add_action( 'wp_enqueue_scripts', array($this, 'enqueue_google_fonts') );
	}

	public function enqueue_google_fonts() {
		wp_enqueue_style( 'google-fonts', $this->font, array(), null );
	}
}
