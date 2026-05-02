# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 02 Mai 2026
- **État de stabilité** : ✅ v1.8.8 stable — Optimisation extrême des Performances et Accessibilité.
- **Fichiers modifiés** : Composants UI (`Hero.tsx`, `Footer.tsx`, etc.), Pages Aperçu, `global.css`, `Layout.astro`, `astro.config.mjs`, `package.json`.
- **Résumé de Session (v1.8.3 -> v1.8.8)** :
  - **Images** : Migration vers le composant `<Image />` d'Astro (WebP/AVIF auto) et optimisation des images Unsplash.
  - **Accessibilité (100/100)** : Renforcement des contrastes globaux, réorganisation sémantique des balises (h1-h4) et ajout d'attributs ARIA.
  - **Performance Mobile (90/100)** : Amélioration majeure du FCP (1.5s) via l'auto-hébergement de la police (`@fontsource-variable/outfit`) et du LCP (3.2s) via l'allègement des animations sur mobile.
- **Objectif prochain** : Articles de blog SEO.

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
