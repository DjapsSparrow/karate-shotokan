# 📝 Notes de Projet — Karate Shotokan

# PHASE 1: ÉTAT ACTUEL
- **Date** : 02 Mai 2026
- **État de stabilité** : ✅ v1.9.3 stable — Mise à jour visuelle Page Dojo.
- **Fichiers modifiés** : `src/pages/le-dojo.astro`, `package.json`, `NOTES.md`, `src/assets/images/dojo-interieur.jpg`.
- **Résumé de Session (v1.9.2 -> v1.9.3)** :
  - **Le Dojo** : Remplacement du banner générique par l'image officielle de l'intérieur du dojo.
  - **Design** : Retrait du mode noir et blanc pour laisser transparaître les tons boisés chaleureux du dojo.
- **Objectif prochain** : Remplacement des bannières de ceintures restantes et articles de blog SEO.

---

## 📜 Journal des Versions (Changelog)
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
