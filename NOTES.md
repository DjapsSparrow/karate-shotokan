# 📝 Notes de Projet — Karate Shotokan

## 🏁 ÉTAT DE REPRISE (À copier dans un nouveau chat)
- **Version** : v1.6.3
- **Objectif** : Correction des inversions de couleurs indésirables en Dark Mode (Boutons et Gradients).
- **Statut** : ✅ Terminé. Remplacement des valeurs `martial-black` (qui devient blanc en dark mode) par `black` dans les boutons "S'abonner" et les dégradés des pages "Aperçu" pour garantir la lisibilité et un fond sombre correct.
- **Lien** : https://prod.karate-shotokan.fr

---

## 🛠️ Historique & Configuration
1. **Infrastructure & Déploiement** : GitHub Actions via Rsync. SSHPASS configuré ($$). IP : `128.65.195.221`.
2. **Design System** : Thème martial, font 'Outfit'.
3. **Sécurité** : `.htaccess` blindé. Audit "Blue" OK.
4. **Performance** : Score PageSpeed ~90 (Mobile) / 99 (Desktop). Cache browser actif.
5. **Traçabilité** : Badge de version flottant (lié à `package.json`).

## 📌 Prochaines étapes suggérées
- Création de nouveaux articles de blog pour le SEO.
- Mise en place d'un système de newsletter.

## 🧠 Apprentissages Techniques
- **Caching** : Toujours incrémenter le `package.json` pour vérifier le déploiement réel via le badge de version.
- **Content** : Les pages de vente longues (Katas Supérieurs) sont préférables à des sections courtes pour la conversion.
- **UX** : Pour les menus hover, supprimer l'espace mort (gap) entre le parent et le menu via du padding pour éviter les fermetures intempestives.
