# Landing page — Le Sang Corrompu

Landing page statique, responsive et prête pour GitHub Pages.

## Fichiers

- `index.html` — structure, SEO, contenus et CTA
- `styles.css` — direction artistique, responsive, animations
- `script.js` — menu mobile, reveal au scroll, effet 3D subtil, CTA mobile sticky
- `assets/le-sang-corrompu-cover.webp` — visuel couverture optimisé
- `assets/le-sang-corrompu-back.webp` — visuel quatrième de couverture optimisé (fourni pour variantes futures)

## Avant publication

1. Dans `index.html`, remplacez les **3 occurrences** de l’URL Amazon de recherche par l’URL exacte de la fiche produit dès que vous l’avez.
2. Remplacez la balise `canonical` par l’URL réelle de votre site GitHub Pages.
3. La section `Avis & presse` contient volontairement des placeholders. Remplacez-les uniquement par des témoignages réels et autorisés.
4. Si vous ajoutez une politique de confidentialité / mentions légales, ajoutez leurs liens au footer.

## Déploiement gratuit sur GitHub Pages

1. Créez un dépôt GitHub, par exemple `le-sang-corrompu`.
2. Déposez tous les fichiers de ce dossier **à la racine du dépôt**.
3. Sur GitHub : `Settings` → `Pages`.
4. Dans **Build and deployment**, choisissez `Deploy from a branch`.
5. Sélectionnez la branche `main` et le dossier `/ (root)`, puis enregistrez.
6. GitHub vous donnera une URL du type `https://votre-utilisateur.github.io/le-sang-corrompu/`.

## Test local rapide

Dans le dossier du site :

```bash
python -m http.server 8080
```

Puis ouvrez `http://localhost:8080`.

## Webflow / WordPress

La page utilise uniquement HTML, CSS et JavaScript natifs. Vous pouvez :

- reprendre chaque `<section>` dans un bloc Embed Webflow ;
- intégrer `styles.css` dans le `<head>` personnalisé ;
- intégrer `script.js` avant `</body>` ;
- sur WordPress, la transposer dans un template enfant ou un bloc HTML personnalisé.

Aucune bibliothèque JavaScript externe n’est requise.
