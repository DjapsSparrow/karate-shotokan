# 🛠️ Méthodes et Bonnes Pratiques — Karate Shotokan

## [2026-05-01] - Stabilisation des Menus Déroulants (Hover)
- **Problème** : Le sous-menu disparaissait dès que la souris quittait l'élément parent à cause d'un "espace mort" (gap) entre le lien et le menu.
- **Solution** : Utiliser un conteneur de dropdown qui commence exactement au bord de l'élément parent, et utiliser du padding (`pt-4`) pour créer l'espacement visuel tout en maintenant la zone de détection du hover active.
- **Règle d'or** : Toujours vérifier la continuité de la zone de hover pour les menus complexes.

## [2026-05-02] - Cohérence Branding Dynamique (beltColor)
- **Problème** : Les icônes globales (ex: Theme Toggler) avaient une couleur fixe qui jurait avec le code couleur spécifique de chaque page de ceinture.
- **Solution** : Passer la variable `beltColor` au composant `Navbar` et l'utiliser dans les classes Tailwind (`text-${beltColor}`, `hover:bg-${beltColor}`) du picto de bascule de thème.
## [2026-05-03] - Optimisation Performance Mobile (WebP Pipeline)
- **Problème** : Les images JPEG d'origine plombaient le score mobile (~70) à cause d'un LCP trop élevé.
- **Solution** : Implémenter `astro:assets` via `getImage()` pour générer des variantes WebP redimensionnées à la volée. 
- **Règle d'or** : Ne jamais servir d'images brutes en production. Toujours passer par le pipeline Astro pour garantir des formats modernes (WebP/Avif) et des tailles adaptées.

## [2026-05-03] - Optimisation SEO Sitelinks (JSON-LD hasPart)
- **Problème** : Google affichait un résultat simple sans les liens secondaires vers les formations.
- **Solution** : Enrichir le schéma `OnlineCourse` avec la propriété `hasPart` listant explicitement les pages stratégiques (ceintures).
- **Règle d'or** : Utiliser les données structurées non seulement pour les informations de base, mais aussi pour suggérer la structure de navigation souhaitée dans les résultats de recherche.
