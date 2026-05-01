# ❌ Journal des Erreurs — Karate Shotokan

## [2026-05-01] - Échec de l'authentification SSH (GitHub Actions)
- **Problème** : L'étape "Deploy with Rsync" échouait avec `Permission denied (publickey,password)` malgré un mot de passe correct.
- **Diagnostic** : Le mot de passe contenait des caractères spéciaux (`$$`) qui étaient interprétés par le shell du runner GitHub, corrompant la chaîne envoyée à `sshpass`.
- **Solution** : Passer le secret via une variable d'environnement `SSHPASS` et utiliser `sshpass -e` pour éviter l'interprétation shell.
- **Statut** : ✅ Corrigé et déployé.
