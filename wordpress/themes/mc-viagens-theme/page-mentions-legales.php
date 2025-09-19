<?php /* Template: Mentions légales (slug: mentions-legales) */ get_header(); ?>
<section class="page">
  <div class="container">
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
      <h1 class="section-title"><?php echo esc_html__('Mentions légales', 'mc-viagens'); ?></h1>
      <article class="content card" style="padding:24px;">
        <p class="muted" style="margin-top:0;">
          <?php echo esc_html__('Dernière mise à jour :', 'mc-viagens'); ?>
          <?php echo esc_html( get_the_modified_date( get_option('date_format') ) ); ?>
        </p>
        <div class="entry">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>