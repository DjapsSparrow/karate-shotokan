# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 02 Mai 2026
- **État de stabilité** : ✅ v1.8.2 stable — Audit de sécurité validé (100% Blue).
- **Fichiers modifiés** : `.htaccess`, `package.json`, `NOTES.md`.
- **Résumé de Session (v1.8.2)** :
  - **Sécurité** : Audit complet via le skill `security 2.md`. Aucun secret en clair, dépendances à jour (0 CVE), headers de sécurité optimisés.
  - **Cache & Versioning** : Correction d'un bug de cache agressif sur le HTML. Les fichiers `.html` sont désormais exclus du cache long pour garantir que les utilisateurs voient toujours la dernière version du site et du badge.
- **Objectif prochain** : Articles de blog SEO.

---

# PHASE 2: HISTORIQUE

## 🏁 ARCHIVE V1.8.1 (Checkpoint)
- **Objectif** : Correction du décalage visuel sur la page Katas Supérieurs.
- **Statut** : ✅ Terminé. Réorganisation de la structure HTML pour assurer la cohérence avec les pages de ceintures et corriger l'espacement du cartouche gris.
- **Lien** : https://prod.karate-shotokan.fr

## 🏁 ARCHIVE V1.8.0 (Checkpoint)
- **Objectif** : Implémentation d'un smooth scroll fluide et élégant (Lenis).
- **Statut** : ✅ Terminé. Installation et configuration de la librairie `@studio-freight/lenis`.
- **Lien** : https://prod.karate-shotokan.fr

## 🛠️ Historique & Configuration
1. **Infrastructure & Déploiement** : GitHub Actions via Rsync. SSHPASS configuré ($$). IP : `128.65.195.221`.
2. **Design System** : Thème martial, font 'Outfit'.
3. **Sécurité** : `.htaccess` blindé. Audit "Blue" OK.
4. **Performance** : Score PageSpeed ~90 (Mobile) / 99 (Desktop). Cache browser actif.
5. **Traçabilité** : Badge de version flottant (lié à `package.json`).

## 🧠 Apprentissages Techniques
- **Caching** : Les fichiers HTML doivent avoir un `ExpiresByType` à 0s pour éviter que les navigateurs ne servent de vieilles versions statiques du site.
- **UX** : Pour les menus hover, supprimer l'espace mort (gap) entre le parent et le menu via du padding.
