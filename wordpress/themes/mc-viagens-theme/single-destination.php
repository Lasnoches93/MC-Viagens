<?php get_header(); ?>
<section class="single">
  <div class="container">
    <?php if (have_posts()): while (have_posts()): the_post();
      $price = get_post_meta(get_the_ID(), 'price_eur', true);
      $orig = get_post_meta(get_the_ID(), 'original_price_eur', true);
      $duration = get_post_meta(get_the_ID(), 'duration', true);
      $flight = get_post_meta(get_the_ID(), 'flight_time', true);
      $stops = get_post_meta(get_the_ID(), 'stops', true);
      $rating = get_post_meta(get_the_ID(), 'rating', true);
      $reviews = get_post_meta(get_the_ID(), 'reviews', true);
      $b_cabin = get_post_meta(get_the_ID(), 'baggage_cabin', true);
      $b_checked = get_post_meta(get_the_ID(), 'baggage_checked', true);
      $b_backpack = get_post_meta(get_the_ID(), 'baggage_backpack', true);
      $desc_long = get_post_meta(get_the_ID(), 'description_long', true);
      $highlights = get_post_meta(get_the_ID(), 'highlights', true); // ACF repeater returns array
    ?>
    <article class="single-body">
      <div class="hero-thumb"><?php if (has_post_thumbnail()) the_post_thumbnail('full'); ?></div>
      <h1 class="title"><?php the_title(); ?></h1>
      <div class="meta">
        <?php if ($duration): ?><span class="chip">Durée: <?php echo esc_html($duration); ?></span><?php endif; ?>
        <?php if ($flight): ?><span class="chip">Vol: <?php echo esc_html($flight); ?></span><?php endif; ?>
        <?php if ($stops): ?><span class="chip">Escale: <?php echo esc_html($stops); ?></span><?php endif; ?>
      </div>
      <div class="price">
        <?php if ($price): ?><span class="current">€<?php echo esc_html($price); ?></span><?php endif; ?>
        <?php if ($orig): ?><span class="old">€<?php echo esc_html($orig); ?></span><?php endif; ?>
      </div>
      <?php if ($rating): ?><div class="rating">★ <?php echo esc_html($rating); ?> <span class="muted">(<?php echo esc_html($reviews); ?>)</span></div><?php endif; ?>
      <div class="content">
        <?php if (!empty($desc_long)) {
          echo wp_kses_post($desc_long);
        } else {
          the_content();
        } ?>
      </div>
      <?php if (!empty($highlights) && is_array($highlights)): ?>
      <div class="panel">
        <h3>Points forts</h3>
        <ul>
          <?php foreach ($highlights as $row) {
            $item = is_array($row) && isset($row['item']) ? $row['item'] : (is_string($row) ? $row : '');
            if ($item) echo '<li>' . esc_html($item) . '</li>';
          } ?>
        </ul>
      </div>
      <?php endif; ?>
      <div class="panel">
        <h3>Bagages inclus</h3>
        <ul>
          <?php if ($b_cabin): ?><li><?php echo esc_html($b_cabin); ?></li><?php endif; ?>
          <?php if ($b_checked): ?><li><?php echo esc_html($b_checked); ?></li><?php endif; ?>
          <?php if ($b_backpack): ?><li><?php echo esc_html($b_backpack); ?></li><?php endif; ?>
        </ul>
      </div>
    </article>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>