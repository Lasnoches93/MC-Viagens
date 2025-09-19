<?php
/**
 * Plugin Name: MC Viagens CPT
 * Description: Custom Post Type "destination" + Taxonomy "region" + REST-exposed meta for MC Viagens.
 * Version: 1.0.0
 * Author: MC Viagens
 */

if (!defined('ABSPATH')) { exit; }

add_action('init', function () {
    // Register CPT: destination
    register_post_type('destination', [
        'labels' => [
            'name' => __('Destinations', 'mc-viagens'),
            'singular_name' => __('Destination', 'mc-viagens'),
            'add_new' => __('Add New', 'mc-viagens'),
            'add_new_item' => __('Add New Destination', 'mc-viagens'),
            'edit_item' => __('Edit Destination', 'mc-viagens'),
            'new_item' => __('New Destination', 'mc-viagens'),
            'view_item' => __('View Destination', 'mc-viagens'),
            'search_items' => __('Search Destinations', 'mc-viagens'),
            'not_found' => __('No destinations found', 'mc-viagens'),
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-airplane',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest' => true,
        'rest_base' => 'destination',
        'rewrite' => ['slug' => 'destination'],
    ]);

    // Register Taxonomy: region
    register_taxonomy('region', ['destination'], [
        'labels' => [
            'name' => __('Regions', 'mc-viagens'),
            'singular_name' => __('Region', 'mc-viagens'),
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rest_base' => 'regions',
        'rewrite' => ['slug' => 'region'],
    ]);
});

add_action('init', function () {
    // Helper to register meta with REST
    $register_meta = function ($key, $type = 'string', $single = true, $schema = []) {
        $args = [
            'type' => $type,
            'single' => $single,
            'show_in_rest' => true,
            'auth_callback' => function() { return current_user_can('edit_posts'); },
        ];
        if (!empty($schema)) {
            $args['show_in_rest'] = [ 'schema' => $schema ];
        }
        register_post_meta('destination', $key, $args);
    };

    // Numeric pricing & stats
    $register_meta('price_eur', 'number');
    $register_meta('original_price_eur', 'number');
    $register_meta('rating', 'number');
    $register_meta('reviews', 'number');

    // Strings
    $register_meta('duration', 'string');
    $register_meta('flight_time', 'string');
    $register_meta('stops', 'string');
    $register_meta('baggage_cabin', 'string');
    $register_meta('baggage_checked', 'string');
    $register_meta('baggage_backpack', 'string');
    $register_meta('description_long', 'string');

    // Array: highlights
    $register_meta('highlights', 'array', true, [
        'type' => 'array',
        'items' => ['type' => 'string'],
    ]);
});