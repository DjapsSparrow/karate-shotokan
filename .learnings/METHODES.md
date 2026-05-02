# 🛠️ Méthodes et Bonnes Pratiques — Karate Shotokan

## [2026-05-01] - Stabilisation des Menus Déroulants (Hover)
- **Problème** : Le sous-menu disparaissait dès que la souris quittait l'élément parent à cause d'un "espace mort" (gap) entre le lien et le menu.
- **Solution** : Utiliser un conteneur de dropdown qui commence exactement au bord de l'élément parent, et utiliser du padding (`pt-4`) pour créer l'espacement visuel tout en maintenant la zone de détection du hover active.
- **Règle d'or** : Toujours vérifier la continuité de la zone de hover pour les menus complexes.

## [2026-05-02] - Cohérence Branding Dynamique (beltColor)
- **Problème** : Les icônes globales (ex: Theme Toggler) avaient une couleur fixe qui jurait avec le code couleur spécifique de chaque page de ceinture.
- **Solution** : Passer la variable `beltColor` au composant `Navbar` et l'utiliser dans les classes Tailwind (`text-${beltColor}`, `hover:bg-${beltColor}`) du picto de bascule de thème.
- **Règle d'or** : Pour un site à forte identité visuelle changeante, s'assurer que tous les éléments fixes de l'interface (Header, Toggler, Footer) héritent du contexte de couleur de la page.
