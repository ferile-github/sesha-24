<?php
/*
 * Template Name: Components Template
 * Description: Components Template
 */


$context = Timber::context();
$timber_post = Timber::get_post();
$context['post'] = $timber_post;
Timber::render( array( 'page-components.twig' ), $context );
