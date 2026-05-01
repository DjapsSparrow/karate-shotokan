# 🛠️ Méthodes et Bonnes Pratiques — Karate Shotokan

## [2026-05-01] - Stabilisation des Menus Déroulants (Hover)
- **Problème** : Le sous-menu disparaissait dès que la souris quittait l'élément parent à cause d'un "espace mort" (gap) entre le lien et le menu.
- **Solution** : Utiliser un conteneur de dropdown qui commence exactement au bord de l'élément parent, et utiliser du padding (`pt-4`) pour créer l'espacement visuel tout en maintenant la zone de détection du hover active.
- **Règle d'or** : Toujours vérifier la continuité de la zone de hover pour les menus complexes.
