# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 03 Mai 2026
- **État de stabilité** : ✅ v2.0.2 Launch — Tigre masqué sur mobile.
- **Fichiers modifiés** : `astro.config.mjs`, `.github/workflows/deploy.yml`, `package.json`, `NOTES.md`.
- **Résumé de Session (v1.9.6 -> v2.0.0)** :
-   **LANCEMENT OFFICIEL** : Migration de l'infrastructure de déploiement vers le domaine de production final. 
-   **SEO Sync** : Mise à jour de l'URL `site` dans Astro pour garantir un sitemap et des balises canoniques corrects.
-   **Déploiement** : Redirection du flux Rsync vers le dossier racine final sur Infomaniak.
- **Objectif prochain** : Articles de blog SEO et remplacement des bannières de ceintures restantes.

---

## 📜 Journal des Versions (Changelog)
- **v2.0.2** (03/05/2026) : Masquage du filigrane Tigre sur mobile pour améliorer la lisibilité du texte.
- **v2.0.1** (03/05/2026) : Optimisation de la visibilité du Tigre en Dark Mode (opacité passée à 20%).
- **v2.0.0** (03/05/2026) : LANCEMENT OFFICIEL. Migration vers `karate-shotokan.fr`.
- **v1.9.6** (03/05/2026) : Correction du positionnement du Tigre pour éviter qu'il ne soit coupé sur les bords.
- **v1.9.5** (03/05/2026) : Intégration du Tigre Shotokan (Tora no Maki) en filigrane dans le Hero. Correction de l'asset et refactoring des props.
- **v1.9.4** (02/05/2026) : Audit SEO complet, sitemap, robots.txt et meta-données sociales. Création du skill global `seo.md`.
- **v1.9.3** (02/05/2026) : Remplacement du banner "Club Léo Lagrange" par la photo de l'intérieur du dojo.
- **v1.9.2** (02/05/2026) : Remplacement du placeholder "Katas Supérieurs" par l'image officielle et retrait de l'icône Play.
- **v1.9.1** (02/05/2026) : Ajustement du layout `VideoTrailer` (titre/description au-dessus du lecteur).
- **v1.9.0** (02/05/2026) : Intégration du portrait officiel de Philippe Bouvier dans la section Autorité.
- **v1.8.9** (02/05/2026) : Ajout du Trailer Vidéo HD avec encart `ShineBorder` sur la home page.
- **v1.8.8** (01/05/2026) : Optimisation extrême des performances (90+ mobile) et de l'accessibilité (100).

---

# PHASE 2: HISTORIQUE

## 🏁 ARCHIVE V1.8.2
- **Version** : v1.8.2
- **Objectif** : Audit de sécurité et optimisation du cache HTML.
- **Statut** : ✅ Terminé. Audit de sécurité validé (0 vulnérabilité). Correction du `.htaccess` pour désactiver le cache sur les fichiers HTML.

## 🏁 ARCHIVE V1.8.1 (Checkpoint)
- **Objectif** : Correction du décalage visuel sur la page Katas Supérieurs.
- **Statut** : ✅ Terminé.

## 🛠️ Historique & Configuration
1. **Infrastructure & Déploiement** : GitHub Actions via Rsync. SSHPASS configuré ($$). IP : `128.65.195.221`.
2. **Design System** : Thème martial, font 'Outfit'.
3. **Sécurité** : `.htaccess` blindé. Audit "Blue" OK.
4. **Performance** : Score PageSpeed ~90 (Mobile) / 99 (Desktop). Cache browser actif.

## 🧠 Apprentissages Techniques
- **Caching** : Les fichiers HTML doivent avoir un `ExpiresByType` à 0s.
- **Images** : Toujours utiliser `<Image />` d'Astro au lieu de `<img>` pour bénéficier du format WebP automatique et du lazy-loading natif.
- **Polices** : Privilégier l'auto-hébergement (ex: `@fontsource`) plutôt que Google Fonts pour améliorer drastiquement le temps de connexion initial (FCP) sur mobile.
