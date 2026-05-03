# ❌ Journal des Erreurs — Karate Shotokan

## [2026-05-01] - Échec de l'authentification SSH (GitHub Actions)
- **Problème** : L'étape "Deploy with Rsync" échouait avec `Permission denied (publickey,password)` malgré un mot de passe correct.
- **Diagnostic** : Le mot de passe contenait des caractères spéciaux (`$$`) qui étaient interprétés par le shell du runner GitHub, corrompant la chaîne envoyée à `sshpass`.
- **Solution** : Passer le secret via une variable d'environnement `SSHPASS` et utiliser `sshpass -e` pour éviter l'interprétation shell.
- **Statut** : ✅ Corrigé et déployé.

## [2026-05-03] - URLs Fantômes de Production (Zombie URLs)
- **Problème** : Après migration sur le domaine final, des références à `prod.karate-shotokan.fr` subsistaient dans les balises OG et canoniques, provoquant des avertissements SEO.
- **Diagnostic** : Des URLs codées en dur dans `Layout.astro` et `robots.txt` n'avaient pas été mises à jour lors du changement de dossier de déploiement.
- **Solution** : Audit complet via `grep` et centralisation des URLs de base via `Astro.site` ou une constante.
- **Statut** : ✅ Corrigé (v2.1.1).
