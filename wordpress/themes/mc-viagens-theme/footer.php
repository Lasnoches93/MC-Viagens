<?php /* Footer */ ?>
</main>
<footer class="mc-footer">
  <div class="container">
    <div class="footer-top">
      <div class="brand footer-brand"><span class="gold">MC</span> Viagens</div>
      <?php wp_nav_menu(['theme_location' => 'footer', 'container' => false, 'menu_class' => 'menu']); ?>
    </div>
    <div class="footer-bottom">
      <p>&copy; <?php echo date('Y'); ?> MC Viagens. Tous droits réservés.</p>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>