<?php get_header(); ?>
<section class="hero">
  <div class="container">
    <h1 class="title"><?php bloginfo('name'); ?></h1>
    <p class="subtitle"><?php bloginfo('description'); ?></p>
    <a class="btn gold" href="<?php echo esc_url( get_post_type_archive_link('destination') ); ?>">Découvrir nos Destinations</a>
  </div>
</section>

<section class="home-destinations">
  <div class="container">
    <h2 class="section-title">Nos Voyages <span class="gold">Internationaux</span></h2>
    <div class="grid">
      <?php
      $q = new WP_Query([
        'post_type' => 'destination',
        'posts_per_page' => 6,
      ]);
      if ($q->have_posts()):
        while ($q->have_posts()): $q->the_post();
          $price = get_post_meta(get_the_ID(), 'price_eur', true);
          $orig = get_post_meta(get_the_ID(), 'original_price_eur', true);
          $rating = get_post_meta(get_the_ID(), 'rating', true);
          $reviews = get_post_meta(get_the_ID(), 'reviews', true);
      ?>
        <article class="card">
          <a href="<?php the_permalink(); ?>" class="thumb">
            <?php if (has_post_thumbnail()) { the_post_thumbnail('large'); } ?>
          </a>
          <div class="card-body">
            <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <div class="price">
              <?php if ($price) : ?><span class="current">€<?php echo esc_html($price); ?></span><?php endif; ?>
              <?php if ($orig) : ?><span class="old">€<?php echo esc_html($orig); ?></span><?php endif; ?>
            </div>
            <?php if ($rating): ?>
            <div class="rating">★ <?php echo esc_html($rating); ?> <span class="muted">(<?php echo esc_html($reviews); ?>)</span></div>
            <?php endif; ?>
          </div>
        </article>
      <?php endwhile; wp_reset_postdata(); endif; ?>
    </div>
    <div class="center mt">
      <a class="btn outline" href="<?php echo esc_url( get_post_type_archive_link('destination') ); ?>">Voir toutes les destinations</a>
    </div>
  </div>
</section>

<section class="home-blog">
  <div class="container">
    <h2 class="section-title">Blog <span class="gold">Voyage</span></h2>
    <div class="grid">
      <?php
      $q = new WP_Query(['post_type' => 'post', 'posts_per_page' => 3]);
      if ($q->have_posts()): while ($q->have_posts()): $q->the_post(); ?>
        <article class="card">
          <a href="<?php the_permalink(); ?>" class="thumb"><?php if (has_post_thumbnail()) the_post_thumbnail('large'); ?></a>
          <div class="card-body">
            <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <p class="excerpt"><?php echo wp_kses_post( wp_trim_words( get_the_excerpt(), 18 ) ); ?></p>
            <a class="btn small gold" href="<?php the_permalink(); ?>">Lire l'article</a>
          </div>
        </article>
      <?php endwhile; wp_reset_postdata(); endif; ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>