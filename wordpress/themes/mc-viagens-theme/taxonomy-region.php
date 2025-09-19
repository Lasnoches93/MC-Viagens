<?php get_header(); ?>
<section class="archive">
  <div class="container">
    <h1 class="section-title">Région: <span class="gold"><?php single_term_title(); ?></span></h1>
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
        <p>Aucune destination trouvée dans cette région.</p>
      <?php endif; ?>
    </div>
    <div class="pagination">
      <?php the_posts_pagination(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>