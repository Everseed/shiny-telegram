# space
Voici les types de commits disponibles et leur utilisation :
- feat: Nouvelle fonctionnalité
- fix: Correction de bug
- docs: Modification de la documentation
- style: Changements de style (formatage, espaces, etc.)
- refactor: Refactorisation du code
- perf: Amélioration des performances
- test: Ajout ou modification de tests
- build: Modifications du système de build
- ci: Modifications de la configuration CI
- chore: Autres changements (tâches de maintenance)
- revert: Annulation d'un commit précédent

Exemples d'utilisation :
Format recommandé pour les messages de commit :
Par exemple :

`git commit -m "feat: Add new login feature"`
`git commit -m "fix: Resolve authentication bug"`
`git commit -m "docs: Update README with new information"`
`git commit -m "style: Format code according to project standards"`
`git commit -m "refactor: Improve code readability"`
`git commit -m "perf: Optimize performance of login process"`
`git commit -m "test: Add unit tests for login functionality"`
`git commit -m "build: Update build configuration"`
`git commit -m "ci: Update CI configuration"`
`git commit -m "chore: Update dependencies"`
`git commit -m "revert: Revert previous commit"`

Maintenant, chaque commit sera vérifié pour s'assurer qu'il suit ces conventions. Si un commit ne respecte pas les règles, il sera rejeté avec un message d'erreur explicatif.
Pour utiliser l'interface interactive, utilisez yarn commit au lieu de git commit. Cela vous guidera à travers le processus de création d'un message de commit conforme.

# Pour tous les projets
yarn test:coverage

# Pour un projet spécifique
yarn workspace @mon-projet/api test:coverage
yarn workspace @mon-projet/web test:coverage

Note : Si vous trouvez que 80% est trop strict pour commencer, vous pouvez ajuster les seuils dans les configurations. Par exemple, vous pourriez commencer à 50% et augmenter progressivement :

```json
"coverageThreshold": {
  "global": {
    "branches": 50,
    "functions": 50,
    "lines": 50,
    "statements": 50
  }
}
```