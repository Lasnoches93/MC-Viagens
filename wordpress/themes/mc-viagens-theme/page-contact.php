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
          <div class="panel" style="margin-top:16px;">
            <h3><?php echo esc_html( __('Informations', 'mc-viagens') ); ?></h3>
            <p class="muted"><?php echo esc_html( __('Vous pouvez aussi nous joindre via téléphone, email, ou nous rendre visite.', 'mc-viagens') ); ?></p>
          </div>
        </article>
        <aside class="card" style="padding:24px;">
          <?php $info = mcviagens_get_contact_info(); ?>
          <h3><?php echo esc_html($info['cta_title']); ?></h3>
          <div class="muted"><?php echo esc_html($info['cta_desc']); ?></div>
          <div class="mt">
            <?php
              $cf7_id = defined('MCV_CF7_ID') ? MCV_CF7_ID : 0;
              if ($cf7_id) {
                echo do_shortcode('[contact-form-7 id="' . intval($cf7_id) . '"]');
              } else {
                echo '<p class="muted">' . esc_html__('Configurez l\'ID CF7 en définissant la constante MCV_CF7_ID.', 'mc-viagens') . '</p>';
              }
            ?>
          </div>
          <hr style="border-color: rgba(212, 175, 55, 0.2); margin:16px 0;" />
          <div class="contact-block">
            <h4 class="gold" style="margin:8px 0;"><?php echo esc_html($info['phone_label']); ?></h4>
            <p><?php echo esc_html($info['phone']); ?></p>
            <h4 class="gold" style="margin:8px 0;"><?php echo esc_html($info['email_label']); ?></h4>
            <p><a href="mailto:<?php echo esc_attr($info['email']); ?>" class="gold"><?php echo esc_html($info['email']); ?></a></p>
            <h4 class="gold" style="margin:8px 0;"><?php echo esc_html($info['address_label']); ?></h4>
            <p class="muted"><?php echo esc_html($info['address']); ?></p>
            <h4 class="gold" style="margin:8px 0;"><?php echo esc_html($info['hours_label']); ?></h4>
            <?php if (!empty($info['hours']) && is_array($info['hours'])): ?>
              <ul class="muted" style="margin:0; padding-left:18px;">
                <?php foreach ($info['hours'] as $line): ?>
                  <li><?php echo esc_html($line); ?></li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </div>
        </aside>
      </div>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>