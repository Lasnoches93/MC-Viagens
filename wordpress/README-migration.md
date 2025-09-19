# Migration du contenu vers WordPress (Headless ou Thème)

Ce dossier contient:
- mc-viagens-cpt/ : plugin WordPress ajoutant le CPT « destination », la taxonomie « region » et les métadonnées exposées au REST.
- content/pages/*.html : extraits HTML des contenus statiques du site à coller dans des Pages WordPress.

## Étapes (Headless)
1. Installez/activez le plugin `mc-viagens-cpt` via le tableau de bord WordPress.
2. Créez les pages suivantes dans WordPress:
   - Slug: `about` (À propos)
   - Slug: `about-me` (À propos de Moi)
   - Slug: `my-journey` (Ma Trajectoire)
   Copiez/collez le contenu depuis `content/pages/*.html` (ou adaptez).
3. (Optionnel) Contact Form 7: créez un formulaire, copiez l'ID.
4. Dans `frontend/.env`, configurez:
   - REACT_APP_WORDPRESS_API_URL=https://votre-site/wp-json
   - REACT_APP_WP_CF7_FORM_ID=ID_FORMULAIRE
5. Redémarrez le frontend: `sudo supervisorctl restart frontend`.

## Étapes (Thème WordPress classique)
1. Dites-nous le nom du thème et le text-domain souhaités.
2. Nous générerons un thème (_s + Tailwind) avec:
   - Templates: front-page.php, page-about.php, page-about-me.php, page-my-journey.php, archive-destination.php, single-destination.php
   - Menu Header/Footer, couleurs #0E0F11 & #D4AF37, polices Montserrat/Poppins
   - Shortcode Contact (CF7)
3. Collez les contenus dans les pages correspondantes.

## CPT Destination
- Créez des « Destinations » et assignez des « Regions ».
- Renseignez les métadonnées dans « Champs personnalisés » (ou installez ACF pour un meilleur back-office) :
  - price_eur, original_price_eur, rating, reviews, duration, flight_time, stops, baggage_cabin, baggage_checked, baggage_backpack, description_long, highlights (tableau)