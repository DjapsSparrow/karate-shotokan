# 📝 Notes de Projet — Karate Shotokan

## 🏁 ÉTAT DE REPRISE (À copier dans un nouveau chat)
- **Version** : v0.3.0
- **Objectif** : Refonte Conversion & Performance.
- **Stack** : Astro v5, React 19, Tailwind CSS 4, Framer Motion.
- **Statut** : ✅ Terminé. Site live, sécurisé et performant.
- **Lien** : https://prod.karate-shotokan.fr

---

## 🛠️ Historique & Configuration
1. **Infrastructure & Déploiement** : GitHub Actions via Rsync. SSHPASS configuré pour gérer les secrets complexes ($$). IP Serveur : `128.65.195.221`.
2. **Design System** : Thème martial (Noir/Blanc/Rouge), font 'Outfit'.
3. **Sécurité** : `.htaccess` blindé (HSTS, CSP, Referrer-Policy strict). Audit "Blue" OK.
4. **Performance** : Score PageSpeed ~90 (Mobile) / 99 (Desktop). Cache browser actif (1 an).

## 📌 Prochaines étapes suggérées
- Création de nouveaux articles de blog pour le SEO.
- Mise en place d'un système de newsletter.
- Test A/B sur les CTAs de la page d'accueil.

## 🧠 Apprentissages Techniques
- **Astro/React** : Utiliser `client:load` ou `client:visible` pour les composants Framer Motion.
- **Security** : Toujours vérifier les doubles headers HSTS (Conflit Apache/Manager Infomaniak).
- **Branding** : Intégration du logo en PNG avec `object-contain` pour préserver le ratio.
