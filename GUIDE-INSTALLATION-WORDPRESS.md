# 🌎 MC Viagens - Guide d'Installation WordPress

## 📦 Fichiers de Téléchargement

### Option 1: Installation Séparée
- **Thème MC Viagens** : `https://your-deployment-host/mc-viagens-theme.zip`
- **Plugin CPT** : `https://your-deployment-host/mc-viagens-cpt.zip`

### Option 2: Bundle Complet
- **Pack Complet** : `https://your-deployment-host/mc-viagens-wp-bundle.zip`

---

## 🚀 Installation Étape par Étape

### Pré-requis
- WordPress 5.8+ installé
- PHP 7.4+ 
- Plugin **Advanced Custom Fields (ACF)** installé et activé
- Plugin **Contact Form 7** installé et activé (optionnel)

---

### 📋 ÉTAPE 1: Installation du Plugin CPT

1. **Télécharger** le fichier `mc-viagens-cpt.zip`
2. Dans l'admin WordPress : `Extensions > Ajouter`
3. Cliquer sur **"Téléverser une extension"**
4. Sélectionner `mc-viagens-cpt.zip`
5. Cliquer **"Installer maintenant"**
6. **Activer** l'extension

✅ **Résultat**: Vous verrez maintenant "Destinations" dans le menu admin

---

### 🎨 ÉTAPE 2: Installation du Thème

1. **Télécharger** le fichier `mc-viagens-theme.zip`
2. Dans l'admin WordPress : `Apparence > Thèmes`
3. Cliquer sur **"Ajouter"**
4. Cliquer sur **"Téléverser un thème"**
5. Sélectionner `mc-viagens-theme.zip`
6. Cliquer **"Installer maintenant"**
7. **Activer** le thème

✅ **Résultat**: Votre site aura maintenant le design MC Viagens

---

### 📊 ÉTAPE 3: Import des Données de Démonstration

#### Option A: Import Simple (recommandé)
1. Aller dans `Outils > Importer`
2. Installer l'**"Importateur WordPress"** si nécessaire
3. Télécharger le fichier `mc-viagens-demo.xml` depuis le bundle
4. L'importer via l'outil d'import WordPress

#### Option B: Import avec Images Automatiques
1. Télécharger `mc-viagens-demo-attachments.xml`
2. L'importer via l'outil d'import WordPress
3. ✅ Les images seront automatiquement assignées comme images à la une

---

### ⚙️ ÉTAPE 4: Configuration

#### 4.1 Pages Principales
Le thème créera automatiquement ces pages :
- **Accueil** (Page d'accueil)
- **À Propos** 
- **À Propos de Moi**
- **Contact**
- **Ma Trajectoire**
- **Mentions Légales**
- **Politique de Confidentialité**

#### 4.2 Menu Principal
1. Aller dans `Apparence > Menus`
2. Le menu **"Menu Principal"** sera créé automatiquement
3. Vérifier qu'il est assigné à l'emplacement **"Primary Menu"**

#### 4.3 Configuration de la Page d'Accueil
1. Aller dans `Réglages > Lecture`
2. Sélectionner **"Une page statique"**
3. **Page d'accueil** : Choisir "Accueil"

---

### 🌍 ÉTAPE 5: Configuration Multilingue (Optionnel)

#### 5.1 Installation WPML ou Polylang
```bash
# Pour WPML (payant) ou Polylang (gratuit)
# Suivre les instructions du plugin choisi
```

#### 5.2 Fichiers de Traduction Inclus
- 🇫🇷 Français (fr_FR)
- 🇬🇧 Anglais (en_US)  
- 🇧🇷 Portugais (pt_BR)

---

### 📧 ÉTAPE 6: Configuration Contact Form 7

1. Installer et activer **Contact Form 7**
2. Créer un nouveau formulaire de contact
3. Noter l'**ID du formulaire**
4. Dans le fichier `wp-config.php`, ajouter :
```php
define('CF7_FORM_ID', 123); // Remplacer 123 par votre ID
```

---

## 🛠️ Configuration Avancée

### Personnalisation des Couleurs
Le thème utilise ces couleurs principales :
- **Bleu Foncé** : `#0E0F11`
- **Or** : `#D4AF37`
- **Bleu Accent** : `#1E40AF`

Modifiez dans `Apparence > Personnaliser > Couleurs`

### Ajout de Nouvelles Destinations
1. Aller dans `Destinations > Ajouter`
2. Remplir les champs ACF :
   - Prix (EUR)
   - Durée
   - Temps de vol
   - Nombre d'escales
   - Note
   - Nombre d'avis
   - URL de l'image
3. Assigner à une **Région** (taxonomie)

---

## 🔧 Support Technique

### Logs et Debugging
```php
// Ajouter à wp-config.php pour debug
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

### Vérification des Permissions
```bash
# Permissions recommandées
chmod 755 wp-content/themes/mc-viagens-theme/
chmod 644 wp-content/themes/mc-viagens-theme/*
```

---

## 📱 Mode Headless (Optionnel)

### Configuration API REST
Le plugin expose les endpoints suivants :
- `GET /wp-json/wp/v2/destination`
- `GET /wp-json/wp/v2/region`

### Configuration CORS
```php
// Ajouter à functions.php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

---

## ✅ Checklist Post-Installation

- [ ] Plugin CPT activé
- [ ] Thème MC Viagens activé
- [ ] Données de démo importées
- [ ] Menu principal configuré
- [ ] Page d'accueil définie
- [ ] Contact Form 7 configuré (optionnel)
- [ ] Permaliens régénérés (`Réglages > Permaliens > Enregistrer`)

---

## 🆘 Problèmes Courants

### "Les destinations n'apparaissent pas"
**Solution** : Vérifier que le plugin CPT est activé et régénérer les permaliens

### "Les images ne s'affichent pas"
**Solution** : Vérifier les permissions du dossier `wp-content/uploads/`

### "Le menu ne fonctionne pas"
**Solution** : Aller dans `Apparence > Menus` et assigner le menu à l'emplacement "Primary Menu"

### "Les traductions sont manquantes"
**Solution** : Vérifier que les fichiers `.po` sont dans `/languages/` et que WPML/Polylang est configuré

---

## 📞 Contact Support

Pour toute question technique :
- 📧 Email : support@mc-viagens.com
- 💬 Discord : https://discord.gg/mc-viagens
- 📖 Documentation : https://docs.mc-viagens.com

---

## 🔄 Mises à Jour

Vérifiez régulièrement les mises à jour :
- Thème MC Viagens
- Plugin CPT MC Viagens
- WordPress Core
- Plugins tiers (ACF, CF7)

---

**✨ Votre site MC Viagens est maintenant prêt à accueillir vos visiteurs ! ✨**