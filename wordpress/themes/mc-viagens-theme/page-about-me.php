<?php /* Template: Page About Me (slug: about-me) */ get_header(); ?>
<section class="page">
  <div class="container">
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
      <h1 class="section-title"><?php the_title(); ?></h1>
      <article class="content card" style="padding:24px;">
        <div class="entry">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>