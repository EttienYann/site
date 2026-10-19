---
name: ui-ux-pro-max
description: Améliore le design, l'UI/UX, l'esthétique, la typographie, les palettes de couleurs et l'interactivité des interfaces web. Utiliser pour tout refactoring visuel, amélioration esthétique ou conception d'interface moderne.
---

# Compétence : UI/UX Pro Max

Cette compétence guide l'amélioration visuelle et ergonomique des applications web (Next.js, Tailwind CSS, etc.) pour atteindre un rendu moderne, haut de gamme et soigné.

## Directives d'amélioration UI/UX

1. **Hiérarchie visuelle et Typographie** :
   - Assurer un contraste fort entre les titres (`text-heading`) et le texte de description (`text-body` / `text-subtle`).
   - Utiliser des polices à espacement variable ou des polices mono (`font-mono`) pour les badges, indices, numéros de sections et tags techniques.
   - Éviter les blocs de texte trop denses : privilégier des largeurs de ligne confortables (`max-w-xl` ou `max-w-2xl`).

2. **Palette de couleurs et Profondeur** :
   - Éviter les aplats de couleur trop uniformes (ex: noir pur ou blanc pur sans nuances).
   - Utiliser des gradients subtils sur les éléments clés (titres principaux, boutons d'action principaux, bordures au survol).
   - Intégrer des lueurs d'arrière-plan (`radial-gradient`) et des ombres portées (`shadow-lg`, `shadow-emerald-500/10`) pour donner de la profondeur.

3. **Interactivité et Micro-interactions** :
   - Ajouter des transitions douces (`transition-all duration-300`) et des effets de survol élégants (`hover:-translate-y-1`, effets de bordure lumineuse).
   - Veiller à ce que le mode clair et le mode sombre disposent tous deux d'un contraste irréprochable et d'une esthétique soignée.
   - Animer l'apparition des éléments clés au chargement (`animate-fade-up` avec délais échelonnés).

4. **Structure des sections** :
   - Utiliser des en-têtes de section distincts avec des numéros indicatifs stylisés (ex: `01.`, `02.`).
   - Structurer les projets et cartes dans des conteneurs épurés (`rounded-xl border border-edge bg-panel p-6`).
