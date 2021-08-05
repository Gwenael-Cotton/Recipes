/* eslint-disable max-len */
import { expect } from 'chai';

import reducer, {
  initialState, findOneRecipe, getHomeTitle, expectedDefaultReturn, expectedEmptyArray,
  expectedOneElementArray, expectedSeveralElementsArray,
} from 'src/store/reducer';

// Je commence par décrire une suite de tests

describe('Recipe Reducer', () => {
  it('must be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return initialState', () => {
    expect(reducer()).to.be.a('object');
    expect(reducer()).to.equal(initialState);
  });
});

describe('Recipe Selector', () => {
  // Tester le(s) selector
  // ça doit être une fonction
  // qui return un objet (a tester avec les instructions ci dessous)
  // l'objet doit avoir une propriété slug égale au slug reçu
  // Si je donne un tableau vide je dois récupérer undefined
  // Si je lui donne un slug qui n'existe pas -> récupérer undefined
  // Si je ne lui donne pas un ou des arguments, devrait return undefined
  it('should be a function', () => {
    expect(findOneRecipe).to.be.a('function');
  });

  it('should return an object', () => {
    const { list } = initialState;
    const { slug } = list[0];
    expect(findOneRecipe(list, slug)).to.be.an('object');
    expect(findOneRecipe(list, slug)).to.equal(list[0]);
  });

  it('shoul return undefined', () => {
    const { list } = initialState;
    const { slug } = list[0];
    expect(findOneRecipe([], slug)).to.be.undefined;
    expect(findOneRecipe(list, 'tata-yoyo-forever')).to.be.undefined;
    expect(findOneRecipe()).to.be.undefined;
    expect(findOneRecipe(slug, list)).to.be.undefined;
    expect(findOneRecipe(list)).to.be.undefined;
    expect(findOneRecipe({}, slug)).to.be.undefined;
  });
});

/**
 *
EXO 1 : Coder un selector en TDD
 Créer un selector pour obtenir *
  un titre de Home adapté à la longueur de la liste
*/

describe('homeTitle Selector', () => {
  it('should be a function', () => {
    // Tester
    expect(getHomeTitle).to.be.a('function');
  });
  describe('les return de homeTitle', () => {
    it('should return default object if no params given', () => {
      // expect(getHomeTitle()).to.deep.equal(expectedReturn);
      expect(getHomeTitle()).to.eql(expectedDefaultReturn);
    });
    it('should return default object if given empty array', () => {
      // expect(getHomeTitle()).to.deep.equal(expectedReturn);
      expect(getHomeTitle([])).to.eql(expectedEmptyArray);
    });

    it('should return default object if given one element array', () => {
      // expect(getHomeTitle()).to.deep.equal(expectedReturn);
      expect(getHomeTitle(['1'])).to.eql(expectedOneElementArray);
    });

    it('should return default object if given several elements array', () => {
      // expect(getHomeTitle()).to.deep.equal(expectedReturn);
      expect(getHomeTitle(['1', '3', 78])).to.eql(expectedSeveralElementsArray);
    });
  });
});

/*

  Développer la fonction homeTitle en TDD:
    1 : Vous devez écrire un test qui échoue avant de pouvoir écrire le code de production correspondant.

    2 : Vous devez écrire une seule assertion à la fois, qui fait échouer le test ou qui échoue à la compilation (ou erreur de syntaxe en Javascript).

    on écrit les tests un par un, on n'écrit pas d'un coup tous les tests nécessaires

  3 : Vous devez écrire le minimum de code de production pour que l'assertion du test actuellement en échec soit satisfaite.

  on se concentre sur "faire passer le test qu'on vient d'écrire", on ne code pas autre chose ailleurs

EXO 2: Utilise le selector dans notre App pour que le composant home affiche le bon titre
 */
