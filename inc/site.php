<?php
class SeshaSite {
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_action( 'after_setup_theme', array( $this, 'register_menus' ) );
		add_action( 'after_setup_theme', array( $this, 'add_media_sizes' ) );
		add_action( 'widgets_init', array( $this, 'register_sidebars' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_assets' ) );
		add_action( 'login_enqueue_scripts', array( $this, 'register_login_stylesheet' ) );
		add_filter( 'body_class', array($this,'add_body_classes') );
		add_filter( 'allowed_block_types_all',  array($this, 'disable_default_blocks'), 25, 2 );


		add_filter('manage_work_posts_columns', array($this, 'featured_image_column'));
		add_action('manage_work_posts_custom_column', array($this, 'featured_image_column_display'), 10, 2);

		add_filter('manage_post_posts_columns', array($this, 'featured_image_column'));
		add_action('manage_post_posts_custom_column', array($this, 'featured_image_column_display'), 10, 2);

		add_filter('manage_team_posts_columns', array($this, 'featured_image_column'));
		add_action('manage_team_posts_custom_column', array($this, 'featured_image_column_display'), 10, 2);

		add_action('admin_head', array($this, 'admin_inline_styles') );

	}

	public function add_body_classes( $classes ) {

		return $classes;
	}

	public function register_menus() {
		register_nav_menus(
			array(
				'main-nav' => __( 'The Main Menu', 'sesha' ),   // Main nav in header
				'footer-nav' => __( 'The Footer Menu', 'sesha' ), // Secondary nav in footer
				'utility-nav' => __( 'Utility Menu', 'sesha' ),   // Utility navigation
			)
		);
	}

	function register_login_stylesheet() {
		wp_enqueue_style( 'sesha-login', get_stylesheet_directory_uri() . '/assets/dist/login.css' );
	}

	public function register_sidebars() {
		register_sidebar( array(
			'name' => __( 'Sidebar', 'sesha' ),
			'id' => 'sidebar',
			'description' => __( 'Widgets that appear in the blog sidebar', 'sesha' ),
			'before_widget' => '<div id="%1$s" class="sidebar__item %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="sidebar__heading">',
			'after_title'   => '</h2>',
		) );

		register_sidebar( array(
			'name' => __( 'Footer', 'sesha' ),
			'id' => 'footer',
			'description' => __( 'Widgets that appear in the Footer', 'sesha' ),
			'before_widget' => '<div id="%1$s" class="footer__item / %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2 class="footer__title">',
			'after_title'   => '</h2>',
		) );
	}

	public function register_assets() {
		wp_enqueue_style('sesha-child-styles', get_template_directory_uri() . '/assets/dist/main.css', array(), filemtime(get_template_directory() . '/assets/dist/main.css'), false);

		wp_register_script( 'sesha-js-child', get_stylesheet_directory_uri() . '/assets/dist/main.bundle.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/dist/main.bundle.js'), true );
		wp_enqueue_script( 'sesha-js-child' );
	}

	public function add_media_sizes() {
		add_image_size( 'mobile', 800, 800 );
		add_image_size( 'small', 1024, 1024 );
		add_image_size( 'banner', 3000, 3000 );
	}

	public function theme_supports() {
		add_theme_support('automatic-feed-links');
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
		add_theme_support('html5',array('comment-form','comment-list','gallery','caption'));
		add_theme_support('post-formats', array('aside','image','video','quote','link','gallery','audio'));
		add_theme_support('editor-styles');
		add_editor_style('assets/dist/editor.css');
		add_theme_support('wp-block-styles');
		add_theme_support('responsive-embeds');
	}

	function disable_default_blocks( $allowed_blocks, $editor_context ) {
		$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
		unset( $blocks[ 'core/columns' ] ); // Columns - replaced with our own custom block
		unset( $blocks[ 'core/cover' ] ); // Columns - replaced with our own custom block
		unset( $blocks[ 'core/media-text' ] ); // Columns - replaced with our own custom block
		unset( $blocks[ 'core/buttons' ] ); // Columns - replaced with our own custom block
		unset( $blocks[ 'core/spacer' ] ); // Spacer - replaced with our own custom block

		if( isset($editor_context->post->post_type) ) {
			// Only on post pages
			if( 'post' !== $editor_context->post->post_type ) {
				unset( $blocks[ 'acf/blog-intro' ] ); // Blog Intro
			}

			// Disabled blocks for post type
			if( 'post' === $editor_context->post->post_type ) {
				unset( $blocks[ 'acf/container' ] ); // Content Container
				unset( $blocks[ 'acf/video-banner' ] ); // Video Banner
				unset( $blocks[ 'acf/banner' ] ); // Banner
				unset( $blocks[ 'acf/page-title' ] ); // Page Title
			}
		}

		return array_keys( $blocks );
	}


	// Add featured image column to admin post list
	function featured_image_column($columns) {
		$featuredImage = array('featured_image' => 'Featured Image');
		return array_slice($columns, 0, 1, true) + $featuredImage + $columns;

		return $columns;
	}

	// Display featured image in the custom column
	function featured_image_column_display($column_name, $post_id) {
		if ($column_name == 'featured_image') {
			$thumbnail = get_the_post_thumbnail($post_id, 'thumbnail');
			echo $thumbnail ? $thumbnail : 'No Featured Image';
		}
	}
	// Add inline styles to the WordPress admin area
	function admin_inline_styles() {
		echo '<style>
				.column-featured_image  {
					width: 250px;
				}
				.column-featured_image img {
					width: 250px;
					height: auto;
				}
		</style>';
	}




}
