---
name: create-skill
description: Crée de nouvelles compétences claires, cohérentes et directement utilisables sous forme de bundles de compétences (SKILL.md) respectant les bonnes pratiques d'Antigravity/Agent Skills. Utiliser à chaque fois qu'il faut concevoir de nouvelles compétences, entièrement en français.
---

# Compétence : Créateur de compétences

Cette compétence guide la conception et la génération de nouvelles compétences (skills) réutilisables pour les agents IA (norme Agent Skills / Antigravity).

## Protocole de création

1. **Analyser le besoin** :
   - Définir précisément l'objectif unique de la compétence (un seul domaine d'expertise ou de tâche par compétence).
   - Identifier le déclencheur (trigger) et le public cible / contexte d'utilisation.

2. **Structurer le dossier et les fichiers** :
   Chaque compétence doit être un bundle de répertoire autonome :
   ```
   <nom-de-la-competence>/
   ├── SKILL.md       # Fichier manifeste obligatoire (frontmatter YAML + instructions)
   ├── scripts/       # (Optionnel) Scripts utilitaires exécutables
   ├── examples/      # (Optionnel) Implémentations ou cas de référence
   └── resources/     # (Optionnel) Modèles, schémas ou fichiers de données
   ```

3. **Rédiger le manifeste `SKILL.md` (en français)** :
   - **Frontmatter YAML** :
     - `name` : Identifiant unique en minuscules avec tirets (kebab-case).
     - `description` : Description claire à la troisième personne (« Utiliser pour... »), intégrant des mots-clés concrets et des noms de fichiers cibles.
   - **Corps du document** :
     - Instructions étape par étape.
     - Bonnes pratiques, conventions et consignes de style.
     - Arbres de décision ou checklists pour les cas complexes.

4. **Règles d'or & Bonnes pratiques** :
   - Garder la compétence focalisée sur une seule tâche précise.
   - Utiliser un langage clair, direct et entièrement en français.
   - Traiter les scripts optionnels comme des boîtes noires (`--help`).
   - S'assurer que le chemin d'enregistrement respecte la structure `.agents/skills/<nom-de-la-competence>/SKILL.md` ou `.opencode/skills/<nom-de-la-competence>/SKILL.md`.
