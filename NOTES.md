# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 02 Mai 2026
- **État de stabilité** : ✅ v1.8.1 stable — Déploiement Infomaniak OK.
- **Fichiers modifiés** : `AnimatedThemeToggler.tsx`, `Navbar.tsx`, `ScrollToTop.tsx`, `Layout.astro`, `global.css`, `katas-superieurs.astro`, `package.json`.
- **Résumé de Session (v1.8.1)** :
  - **Animations & Thème** : Implémentation de la View Transitions API pour le changement de thème et synchronisation dynamique des couleurs avec la `beltColor` du menu.
  - **UX Premium** : Intégration de **Lenis Smooth Scroll** pour une navigation fluide et ajout d'un bouton **ScrollToTop** intelligent (seuil 45%).
  - **Correctifs UI** : Harmonisation des structures de pages (Katas Supérieurs) et corrections de contrastes en Dark Mode.
- **Objectif prochain** : SEO (Articles de blog) et système de Newsletter.

---

# PHASE 2: HISTORIQUE

## 🏁 ARCHIVE V1.8.1 (Checkpoint)
- **Objectif** : Correction du décalage visuel sur la page Katas Supérieurs.
- **Statut** : ✅ Terminé. Réorganisation de la structure HTML pour assurer la cohérence avec les pages de ceintures et corriger l'espacement du cartouche gris.
- **Lien** : https://prod.karate-shotokan.fr

## 🛠️ Historique & Configuration
1. **Infrastructure & Déploiement** : GitHub Actions via Rsync. SSHPASS configuré ($$). IP : `128.65.195.221`.
2. **Design System** : Thème martial, font 'Outfit'.
3. **Sécurité** : `.htaccess` blindé. Audit "Blue" OK.
4. **Performance** : Score PageSpeed ~90 (Mobile) / 99 (Desktop). Cache browser actif.
5. **Traçabilité** : Badge de version flottant (lié à `package.json`).

## 🧠 Apprentissages Techniques
- **Caching** : Toujours incrémenter le `package.json` pour vérifier le déploiement réel via le badge de version.
- **Content** : Les pages de vente longues (Katas Supérieurs) sont préférables à des sections courtes pour la conversion.
- **UX** : Pour les menus hover, supprimer l'espace mort (gap) entre le parent et le menu via du padding pour éviter les fermetures intempestives.
