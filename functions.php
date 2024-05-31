<?php
/**
 * Sesha - WordPress Starter Theme
 * Built using Timber
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

require_once( 'inc/timber.php' );
require_once( 'inc/site.php' );
require_once( 'inc/acf.php' );
require_once( 'inc/google-font.php' );
require_once( 'inc/local-font.php' );

new SeshaTimber();

// Use a Google font...
// new SeshaGoogleFont('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap');
// OR a local font. Dont use both
new SeshaLocalFont();

new SeshaSite();
new SeshaACF();
