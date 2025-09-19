<?php get_header(); ?>
<section class="archive">
  <div class="container">
    <h1 class="section-title">Toutes les <span class="gold">Destinations</span></h1>
    <div class="filters">
      <?php
      $regions = get_terms(['taxonomy' => 'region', 'hide_empty' => true]);
      if (!is_wp_error($regions) && $regions): ?>
        <ul class="menu filters-menu">
          <li class="menu-item <?php if (!is_tax()) echo 'active'; ?>"><a href="<?php echo esc_url( get_post_type_archive_link('destination') ); ?>">Toutes</a></li>
          <?php foreach ($regions as $r): ?>
            <li class="menu-item <?php if (is_tax('region', $r)) echo 'active'; ?>">
              <a href="<?php echo esc_url( get_term_link($r) ); ?>"><?php echo esc_html($r->name); ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>

    <div class="grid">
      <?php if (have_posts()): while (have_posts()): the_post();
        $price = get_post_meta(get_the_ID(), 'price_eur', true);
        $orig = get_post_meta(get_the_ID(), 'original_price_eur', true);
      ?>
        <article class="card">
          <a href="<?php the_permalink(); ?>" class="thumb"><?php if (has_post_thumbnail()) the_post_thumbnail('large'); ?></a>
          <div class="card-body">
            <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <div class="price">
              <?php if ($price): ?><span class="current">€<?php echo esc_html($price); ?></span><?php endif; ?>
              <?php if ($orig): ?><span class="old">€<?php echo esc_html($orig); ?></span><?php endif; ?>
            </div>
          </div>
        </article>
      <?php endwhile; else: ?>
        <p>Aucune destination trouvée.</p>
      <?php endif; ?>
    </div>

    <div class="pagination">
      <?php the_posts_pagination(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>