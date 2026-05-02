# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 02 Mai 2026
- **État de stabilité** : ✅ v1.8.4 stable — Accessibilité 100/100.
- **Fichiers modifiés** : `Hero.tsx`, `Footer.tsx`, `Layout.astro`, `Testimonials.tsx`, `CourseStructure.tsx`, `package.json`, `NOTES.md`.
- **Résumé de Session (v1.8.4)** :
  - **Accessibilité** : Optimisation des contrastes (badge Hero, copyright Footer, version Layout). Ajout d'aria-labels sur les contrôles de slider. Correction de la hiérarchie des titres (h2 caché pour SEO/A11y). Augmentation des zones de clic sur mobile.
  - **Performance** : Score PageSpeed maintenu à 99/100.
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
