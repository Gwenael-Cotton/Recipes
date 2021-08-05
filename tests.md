# Tests

Les tests sont des bouts de code que l'on écrit pour tester notre code de production, et s'assurer qu'il fonctionne comme attendu.

## Outils

### Mocha - Test Runner

Le programme qui exécute les fichiers de tests que l'on a produit et qui nous informe des résultats.

https://mochajs.org/

- `describe` : permet de définir un chapitre
- `it` : permet de définir un test


### Chai - Outil pour faire des assertions

Un outil qui me donne des méthodes pour tester ce que j'attends de mes fonctions.

- (`assert`), `should`, `expect` : permet d'affirmer quelque chose à vérifier


### Enzyme - Tests sur des composants React

https://enzymejs.github.io/enzyme/

- `shallow` : permet de faire un pseudo rendu des composants pour les tester


## Configurer le modèle

```
yarn add --dev @babel/register # l'environnement node pour utiliser la syntaxe d'import ES6 
yarn add --dev chai mocha enzyme enzyme-adapter-react-16 # assertion / test runner / test de composants
yarn add --dev ignore-styles # pour ignorer les css quand on teste des composants
```

Créer un dossier "tests" à la racine, et mettre un fichier de config pour le linter à l'intérieur

.eslintrc 

```json
{
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-expressions": "off"
  }
}
```

Puis dans un fichier .setup.js
```javascript
require("@babel/register")();
require("ignore-styles");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });
```