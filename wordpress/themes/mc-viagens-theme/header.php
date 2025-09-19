<?php /* Header */ ?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="mc-header">
  <div class="container flex between center">
    <div class="brand">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="logo"><span class="gold">MC</span> Viagens</a>
    </div>
    <nav class="nav">
      <?php wp_nav_menu(['theme_location' => 'primary', 'container' => false, 'menu_class' => 'menu']); ?>
    </nav>
  </div>
</header>
<main class="mc-main">