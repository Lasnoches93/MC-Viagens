<?php
if (!defined('ABSPATH')) { exit; }

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');

    load_theme_textdomain('mc-viagens', get_template_directory() . '/languages');

    register_nav_menus([
        'primary' => __('Primary Menu', 'mc-viagens'),
        'footer'  => __('Footer Menu', 'mc-viagens'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    $ver = wp_get_theme()->get('Version');
    wp_enqueue_style('mc-viagens-theme', get_template_directory_uri() . '/assets/css/theme.css', [], $ver);
});

// Contact info helper with filter to override in child theme or plugin
function mcviagens_get_contact_info() {
    $defaults = [
        'phone_label' => __('Téléphone', 'mc-viagens'),
        'email_label' => __('Email', 'mc-viagens'),
        'address_label' => __('Adresse', 'mc-viagens'),
        'hours_label' => __('Horaires', 'mc-viagens'),
        'phone'  => '+55 11 91468-6123',
        'email'  => 'turismomc799@gmail.com',
        'address'=> __('Rua Quinze de Novembro 228- 2° andar - Centro historico de Sao Paulo/SP - 01013-911 - Brasil São Paulo', 'mc-viagens'),
        'hours'  => [
            __('Lun–Ven: 09:00–18:00', 'mc-viagens'),
            __('Sam: 10:00–14:00', 'mc-viagens')
        ],
        'cta_title' => __('Contactez-nous', 'mc-viagens'),
        'cta_desc'  => __('Remplissez le formulaire, nous vous répondrons sous 24h.', 'mc-viagens'),
    ];
    return apply_filters('mcviagens_contact_info', $defaults);
}

// ACF Local Fields for Destination meta (if ACF active)
add_action('init', function () {
    if (!function_exists('acf_add_local_field_group')) return;

    acf_add_local_field_group([
        'key' => 'group_mcviagens_destination',
        'title' => __('Destination Details', 'mc-viagens'),
        'fields' => [
            [ 'key' => 'field_price_eur', 'label' => __('Price (EUR)', 'mc-viagens'), 'name' => 'price_eur', 'type' => 'number', 'step' => 1 ],
            [ 'key' => 'field_original_price_eur', 'label' => __('Original Price (EUR)', 'mc-viagens'), 'name' => 'original_price_eur', 'type' => 'number', 'step' => 1 ],
            [ 'key' => 'field_duration', 'label' => __('Duration', 'mc-viagens'), 'name' => 'duration', 'type' => 'text' ],
            [ 'key' => 'field_flight_time', 'label' => __('Flight Time', 'mc-viagens'), 'name' => 'flight_time', 'type' => 'text' ],
            [ 'key' => 'field_stops', 'label' => __('Stops', 'mc-viagens'), 'name' => 'stops', 'type' => 'text' ],
            [ 'key' => 'field_rating', 'label' => __('Rating', 'mc-viagens'), 'name' => 'rating', 'type' => 'number', 'step' => '0.1' ],
            [ 'key' => 'field_reviews', 'label' => __('Reviews', 'mc-viagens'), 'name' => 'reviews', 'type' => 'number' ],
            [ 'key' => 'field_baggage_cabin', 'label' => __('Baggage Cabin', 'mc-viagens'), 'name' => 'baggage_cabin', 'type' => 'text' ],
            [ 'key' => 'field_baggage_checked', 'label' => __('Baggage Checked', 'mc-viagens'), 'name' => 'baggage_checked', 'type' => 'text' ],
            [ 'key' => 'field_baggage_backpack', 'label' => __('Baggage Backpack', 'mc-viagens'), 'name' => 'baggage_backpack', 'type' => 'text' ],
            [ 'key' => 'field_description_long', 'label' => __('Long Description', 'mc-viagens'), 'name' => 'description_long', 'type' => 'wysiwyg' ],
            [ 'key' => 'field_highlights', 'label' => __('Highlights', 'mc-viagens'), 'name' => 'highlights', 'type' => 'repeater',
                'sub_fields' => [ [ 'key' => 'field_highlight_item', 'label' => __('Item', 'mc-viagens'), 'name' => 'item', 'type' => 'text' ] ],
            ],
        ],
        'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'destination' ] ] ],
        'position' => 'acf_after_title',
        'style' => 'default',
        'active' => true,
    ]);
});