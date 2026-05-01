# 📝 Notes de Projet — Karate Shotokan

## 🏁 ÉTAT DE REPRISE (À copier dans un nouveau chat)
- **Version** : v1.3.0
- **Objectif** : Création des pages Ceinture Noire 1° Dan (Vente + Aperçu) et finalisation de la gamme de formation par grade.
- **Statut** : ✅ Terminé. Assets corrigés, aperçu natif déployé.
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
