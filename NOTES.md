# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 03 Mai 2026
- **État de stabilité** : ✅ v2.2.7 stable — Retour client : Stats & Ceinture Jaune.
- **Fichiers modifiés** : `src/components/PricingGrid.tsx`, `src/components/Testimonials.tsx`, `src/components/Hero.tsx`, `package.json`, `NOTES.md`.
- **Résumé de Session (v1.9.6 -> v2.0.0)** :
-   **LANCEMENT OFFICIEL** : Migration de l'infrastructure de déploiement vers le domaine de production final. 
-   **SEO Sync** : Mise à jour de l'URL `site` dans Astro pour garantir un sitemap et des balises canoniques corrects.
-   **Déploiement** : Redirection du flux Rsync vers le dossier racine final sur Infomaniak.
- **Objectif prochain** : Articles de blog SEO (structure /content/) et remplacement des bannières de ceintures restantes.
- **Dernière action** : Correction des labels de prix et mise à jour des statistiques globales (7 formations, 200+ vidéos, 13 katas).

---

## 📜 Journal des Versions (Changelog)
- **v2.2.7** (03/05/2026) : Correction du label "Ceinture Jaune" (Offert -> Premium) et mise à jour des statistiques globales (7 formations, 200+ vidéos, 13 katas).
- **v2.2.6** (03/05/2026) : Ajout du schéma `hasPart` dans les données structurées pour favoriser l'affichage des Sitelinks (liens des ceintures) dans Google.
- **v2.2.5** (03/05/2026) : Suppression du widget de version flottant. La note de version est désormais intégrée discrètement dans le Footer.
- **v2.2.4** (03/05/2026) : Harmonisation globale du comportement du curseur (pointer) sur tous les éléments interactifs (liens, boutons, labels).
- **v2.2.3** (03/05/2026) : Correction de la couleur du texte Copyright dans le Footer pour une meilleure visibilité sur fond sombre.
- **v2.2.2** (03/05/2026) : Retrait du lien FAQ dans le Footer car la section n'est pas utilisée.
- **v2.2.1** (03/05/2026) : Harmonisation visuelle du Footer pour afficher les 5 colonnes sur une seule ligne (Desktop).
- **v2.2.0** (03/05/2026) : Implémentation du SEO Avancé. Ajout du schéma JSON-LD `OnlineCourse`, meta keywords ciblés et corrections d'accessibilité (ARIA).
- **v2.1.1** (03/05/2026) : Nettoyage final des URLs de production. Mise à jour de `robots.txt`, canoniques et balises sociales pour pointer vers le domaine final.
- **v2.1.0** (03/05/2026) : Optimisation massive des performances. Mise en place de `astro:assets` pour générer des variantes WebP redimensionnées pour toutes les images clés. Réduction du poids de la home page.
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
