<?php
if (!defined('ABSPATH')) { exit; }

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');

    register_nav_menus([
        'primary' => __('Primary Menu', 'mc-viagens'),
        'footer'  => __('Footer Menu', 'mc-viagens'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    $ver = wp_get_theme()->get('Version');
    wp_enqueue_style('mc-viagens-theme', get_template_directory_uri() . '/assets/css/theme.css', [], $ver);
});

// ACF Local Fields for Destination meta (if ACF active)
add_action('init', function () {
    if (!function_exists('acf_add_local_field_group')) return;

    acf_add_local_field_group([
        'key' => 'group_mcviagens_destination',
        'title' => 'Destination Details',
        'fields' => [
            [ 'key' => 'field_price_eur', 'label' => 'Price (EUR)', 'name' => 'price_eur', 'type' => 'number', 'step' => 1 ],
            [ 'key' => 'field_original_price_eur', 'label' => 'Original Price (EUR)', 'name' => 'original_price_eur', 'type' => 'number', 'step' => 1 ],
            [ 'key' => 'field_duration', 'label' => 'Duration', 'name' => 'duration', 'type' => 'text' ],
            [ 'key' => 'field_flight_time', 'label' => 'Flight Time', 'name' => 'flight_time', 'type' => 'text' ],
            [ 'key' => 'field_stops', 'label' => 'Stops', 'name' => 'stops', 'type' => 'text' ],
            [ 'key' => 'field_rating', 'label' => 'Rating', 'name' => 'rating', 'type' => 'number', 'step' => '0.1' ],
            [ 'key' => 'field_reviews', 'label' => 'Reviews', 'name' => 'reviews', 'type' => 'number' ],
            [ 'key' => 'field_baggage_cabin', 'label' => 'Baggage Cabin', 'name' => 'baggage_cabin', 'type' => 'text' ],
            [ 'key' => 'field_baggage_checked', 'label' => 'Baggage Checked', 'name' => 'baggage_checked', 'type' => 'text' ],
            [ 'key' => 'field_baggage_backpack', 'label' => 'Baggage Backpack', 'name' => 'baggage_backpack', 'type' => 'text' ],
            [ 'key' => 'field_description_long', 'label' => 'Long Description', 'name' => 'description_long', 'type' => 'wysiwyg' ],
            [ 'key' => 'field_highlights', 'label' => 'Highlights', 'name' => 'highlights', 'type' => 'repeater',
                'sub_fields' => [ [ 'key' => 'field_highlight_item', 'label' => 'Item', 'name' => 'item', 'type' => 'text' ] ],
            ],
        ],
        'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'destination' ] ] ],
        'position' => 'acf_after_title',
        'style' => 'default',
        'active' => true,
    ]);
});