<?php
class SeshaACF {
	function __construct() {
		$this->createAcfOptionsPage();

		add_action( 'init', array( $this, 'register_acf_blocks' ), 5 );
		add_filter( 'block_categories_all', array( $this, 'block_category' ), 10, 2 );
	}


	function createAcfOptionsPage() {
		if( function_exists('acf_add_options_page') ) {
			acf_add_options_page(array(
				'page_title'    => 'Theme General Settings',
				'menu_title'    => 'Theme Settings',
				'menu_slug'     => 'theme-general-settings',
				'capability'    => 'edit_posts',
				'redirect'      => false
			));
		}
	}

	function register_acf_blocks() {
		$blocks_location = __DIR__.'/../blocks';
		$blocks = scandir($blocks_location);

		foreach ($blocks as $block) {
			register_block_type(__DIR__.'/../blocks/'.$block );
		}
	}

	function block_category( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'sesha',
					'title' => __( 'Sesha', 'sesha' ),
					'icon'  => null,
				)
			);
		}
		return $block_categories;
	}
}



function add_block_props($block, $is_preview, $content = false) {
	$array = [];

	$array['content'] = $content ? true : false;

	$array['is_preview'] = $is_preview;

	// Support custom "anchor" values.
	$array['anchor_id'] = '';
	if ( ! empty( $block['anchor'] ) ) {
		$array['anchor_id'] = 'id="' . esc_attr( $block['anchor'] ) . '" ';
	}

	// Block Classname - generated from block name/title
	$array['classname'] = esc_attr('block__'.strtolower(str_replace(' ', '-', $block['title'] )).' / ');

	// Custom classes
	if ( ! empty( $block['className'] ) ) {
		$array['classname'] .= esc_attr(' ' . $block['className'].' /');
	}

	// Font Size
	if ( ! empty( $block['fontSize'] ) ) {
		$array['classname'] .= esc_attr(' font-' . $block['fontSize']);
	}

	// Background color
	if ( ! empty( $block['backgroundColor'] ) ) {
		$array['classname'] .= esc_attr(' has-' . $block['backgroundColor'].'-background-color');
	}

	// Text color
	if ( ! empty( $block['textColor'] ) ) {
		$array['classname'] .= esc_attr(' has-' . $block['textColor'].'-color');
	}

	// Alignment
	if ( ! empty( $block['align'] ) ) {
		$array['classname'] .= esc_attr(' align' . $block['align']);
	}

	// Text Alignment
	if ( ! empty( $block['alignText'] ) ) {
		switch ($block['alignText']) {
			case 'left':
				$array['classname'] .= ' text-start';
				$array['classname'] .= ' justify-start';
			break;
			case 'center':
				$array['classname'] .= ' text-center';
				$array['classname'] .= ' justify-center';
			break;
			case 'right':
				$array['classname'] .= ' text-end';
				$array['classname'] .= ' justify-end';
			break;
		}
	}

	if ( !empty( $block['fullHeight'] ) && $block['fullHeight']) {
		$array['classname'] .= ' is-fullheight';
	}

	$animated = get_field('animation');

	if( $animated !== 'no-animation' ) {
		$array['classname'] .= " animated {$animated}-pre";
		$array['animated'] = "data-scroll-class='{$animated}'";
	}

	return $array;
}
