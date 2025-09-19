<?php /* Template: Page Contact (slug: contact) */ get_header(); ?>
<section class="page">
  <div class="container">
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
      <h1 class="section-title"><?php the_title(); ?></h1>
      <div class="grid" style="grid-template-columns: 1fr 1fr; gap:24px;">
        <article class="content card" style="padding:24px;">
          <div class="entry">
            <?php the_content(); ?>
          </div>
        </article>
        <aside class="card" style="padding:24px;">
          <h3>Contactez-nous</h3>
          <div class="muted">Remplissez le formulaire, nous vous répondrons sous 24h.</div>
          <div class="mt">
            <?php
              // Utilisez l'ID de votre formulaire CF7
              $cf7_id = defined('MCV_CF7_ID') ? MCV_CF7_ID : 0; // définissez MCV_CF7_ID dans wp-config.php ou functions.php
              if ($cf7_id) {
                echo do_shortcode('[contact-form-7 id="' . intval($cf7_id) . '"]');
              } else {
                echo '<p class="muted">Configurez l\'ID CF7 en définissant la constante MCV_CF7_ID.</p>';
              }
            ?>
          </div>
        </aside>
      </div>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>