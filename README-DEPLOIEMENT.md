# 📦 MC Viagens - Déploiement WordPress

## 🔗 Liens de Téléchargement

### Installation Rapide - Fichiers ZIP Prêts

| Composant | Lien de Téléchargement | Chemin Serveur | Taille |
|-----------|------------------------|----------------|--------|
| **Thème Complet** | `https://your-deployment-host/mc-viagens-theme.zip` | `/app/mc-viagens-theme.zip` | ~45KB |
| **Plugin CPT** | `https://your-deployment-host/mc-viagens-cpt.zip` | `/app/mc-viagens-cpt.zip` | ~15KB |
| **Bundle Complet** | `https://your-deployment-host/mc-viagens-wp-bundle.zip` | `/app/mc-viagens-wp-bundle.zip` | ~120KB |

---

## 🎯 Installation en 3 Étapes

### 1️⃣ Téléchargement
```bash
# Option A: Fichiers séparés
wget https://your-deployment-host/mc-viagens-theme.zip
wget https://your-deployment-host/mc-viagens-cpt.zip

# Option B: Bundle complet (recommandé)
wget https://your-deployment-host/mc-viagens-wp-bundle.zip
```

### 2️⃣ Installation WordPress
1. **Plugin** : Téléverser `mc-viagens-cpt.zip` via `Extensions > Ajouter`
2. **Thème** : Téléverser `mc-viagens-theme.zip` via `Apparence > Thèmes`
3. **Activer** les deux composants

### 3️⃣ Import des Données
- Importer `mc-viagens-demo.xml` via `Outils > Importer`
- Configurer la page d'accueil dans `Réglages > Lecture`

---

## 📋 Contenu des Archives

### 🎨 mc-viagens-theme.zip
```
wordpress/themes/mc-viagens-theme/
├── style.css (Thème principal)
├── functions.php (Fonctionnalités ACF)
├── front-page.php (Page d'accueil)
├── single-destination.php (Pages destinations)
├── archive-destination.php (Liste destinations)
├── page-*.php (Pages spéciales)
├── header.php & footer.php
├── assets/css/theme.css (Styles personnalisés)
└── languages/ (Traductions FR/EN/PT)
```

### 🔧 mc-viagens-cpt.zip
```
wordpress/mc-viagens-cpt/
├── mc-viagens-cpt.php (Plugin principal)
└── languages/ (Traductions plugin)
```

### 📦 mc-viagens-wp-bundle.zip
```
wordpress/
├── themes/mc-viagens-theme/ (Thème complet)
├── mc-viagens-cpt/ (Plugin CPT)
├── demo/ (Données de démonstration)
│   ├── mc-viagens-demo.xml
│   └── mc-viagens-demo-attachments.xml
├── content/pages/ (Contenu HTML statique)
└── README-migration.md
```

---

## 🌐 Données de Démonstration Incluses

### 📍 Destinations (16 destinations)
- **Amérique du Sud** : Machu Picchu, Patagonie, La Paz, Rio, Buenos Aires, Montevideo
- **Europe** : Paris, Rome, Athènes, Madrid, Genève, Londres, Lisbonne
- **Asie** : Tokyo, Bangkok, Hanoï, Pékin
- **Océanie** : Sydney, Auckland
- **Îles Paradisiaques** : Maldives, Punta Cana, Réunion, Maurice
- **Amérique Centrale** : Cancún, San José
- **Amérique du Nord** : New York, Toronto

### 🏷️ Régions (Taxonomies)
- Amérique du Nord, Centrale, du Sud
- Europe, Asie, Océanie
- Îles Paradisiaques

### 📄 Pages Pré-configurées
- Accueil, À Propos, Contact
- Mentions Légales, Politique de Confidentialité
- Ma Trajectoire, À Propos de Moi

---

## ⚡ Configuration Automatique

Le thème configure automatiquement :
- ✅ Champs ACF pour les destinations
- ✅ Menu principal avec liens
- ✅ Pages légales
- ✅ Support multilingue
- ✅ Responsive design
- ✅ Optimisation SEO

---

## 📱 Compatibilité

### WordPress
- ✅ WordPress 5.8+
- ✅ PHP 7.4+
- ✅ MySQL 5.7+

### Plugins Recommandés
- 🔧 **Advanced Custom Fields** (Requis)
- 📧 **Contact Form 7** (Optionnel)
- 🌍 **WPML/Polylang** (Multilingue)

### Thèmes
- 🎨 Compatible avec tous les thèmes WordPress
- 🎯 Remplace complètement le thème actuel
- 🔄 Retour possible vers ancien thème

---

## 🔄 Mode Headless (React Frontend)

Le site peut aussi fonctionner en mode headless :
- **Frontend React** : Déjà configuré à `/app/frontend/`
- **Backend WordPress** : Utilise les mêmes données
- **API REST** : Exposée automatiquement
- **Images** : Optimisées pour les deux modes

---

## 🛡️ Sécurité et Performance

### Optimisations Incluses
- ✅ Code minifié
- ✅ Images optimisées
- ✅ Cache-friendly
- ✅ SEO-optimized

### Bonnes Pratiques
- 🔒 Permissions fichiers correctes
- 🚫 Pas de code malveillant
- 🔍 Code reviewé et testé
- 📊 Performance optimisée

---

## 📞 Support Technique

### En Cas de Problème
1. Vérifier les **prérequis** (WordPress, PHP, plugins)
2. Consulter le **GUIDE-INSTALLATION-WORDPRESS.md**
3. Vérifier les **logs d'erreur** WordPress
4. Contacter le support si nécessaire

### Logs Utiles
```bash
# Logs WordPress
tail -f wp-content/debug.log

# Logs serveur
tail -f /var/log/apache2/error.log
# ou
tail -f /var/log/nginx/error.log
```

---

## 🎯 Démarrage Rapide (5 minutes)

```bash
# 1. Télécharger le bundle
wget https://your-deployment-host/mc-viagens-wp-bundle.zip

# 2. Extraire
unzip mc-viagens-wp-bundle.zip

# 3. Installer dans WordPress
# - Plugin : Téléverser mc-viagens-cpt.zip
# - Thème : Téléverser mc-viagens-theme.zip
# - Data : Importer mc-viagens-demo.xml

# 4. Configurer
# - Activer thème et plugin
# - Définir page d'accueil statique
# - Régénérer permaliens

# ✅ Site opérationnel !
```

---

**🚀 Votre site MC Viagens est prêt en quelques minutes ! 🚀**