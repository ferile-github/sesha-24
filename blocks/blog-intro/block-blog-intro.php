<?php
/**
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or its parent block.
 */



$context = Timber::context();
$fields = get_fields() ? get_fields() : [];
$context['post_thumbnail'] = get_the_post_thumbnail();
$props = add_block_props($block, $is_preview);
Timber::render('block-blog-intro.twig', array_merge($props, $block, $fields, $context ));

