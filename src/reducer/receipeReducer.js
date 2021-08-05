import {
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  FETCH_ONE_RECIPE_SUCCESS,
  FETCH_ONE_RECIPE_ERROR,
  FETCH_FAV_SUCCESS,
} from 'src/actions/recipesActions';

import { USER_HANDLE_LOGOUT } from 'src/actions/userActions';

export const initialState = {
  list: [],
  favorites: [],
};

export default (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    case USER_HANDLE_LOGOUT:
      return {
        ...stateActuel,
        favorites: [],
      };
    case FETCH_FAV_SUCCESS:
      return {
        ...stateActuel,
        favorites: action.payload.favorites,
      };
    case FETCH_ONE_RECIPE_SUCCESS: {
      // Je récupère la liste actuelle
      // en ne concervant pas celle que je compte rajouter
      const foundExsiting = stateActuel.list.find((recipe) => recipe.slug === action.payload.slug);
      if (foundExsiting) {
        // A moi de faire la logique pour incorporer la recette mise à jour
        // dans le state
        return stateActuel;
      }

      return {
        ...stateActuel,
        list: [...stateActuel.list, action.payload],
      };
    }
    case FETCH_RECIPES_SUCCESS:
      return {
        ...stateActuel,
        list: action.payload,
      };
    default:
      return stateActuel;
  }
};

// Les selectors sont des fonctions dont le job est de me donner
// ce que je cherche dans le state.

// Exemple 1
// Une fonction qui return la bonne recette
// à partir du state, et d'un slug

// La fonction reçoit la liste et un slug.
// Elle return avec un find l'élément dans la liste qui a le slug demandé

export const findOneRecipe = (list, slug) => {
  // Version old school
  // const toCheck = (typeof list === 'object') && list.length;
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/isArray
  // Utiliser la class Array pour avoir accès à la méthode isArray
  if (Array.isArray(list)) {
    return list.find((elem) => elem.slug === slug);
  }
  return undefined;
};

// Créer un selector qui en fonction du nombre d'éléments
// Dans le tableau reçu renvoie un objet du genre:
// Une fonction qui return cet objet
// {
//   title: 'Votre recette Orecipe',
//   message: 'Bon appétit'
// }

export const expectedDefaultReturn = {
  title: 'Welcome on oRecipes',
  message: 'Gérez vos recettes efficacement',
};

export const expectedEmptyArray = {
  title: 'Vous n\'avez pas encore de recette !',
  message: 'N\'hésitez pas à en ajouter à vos favoris',
};

export const expectedOneElementArray = {
  title: 'Voici votre recette favorite',
  message: 'savourez !',
};

export const expectedSeveralElementsArray = {
  title: 'Voici vos recettes',
  message: 'savourez, mais pas toutes en même temps !',
};

export const getHomeTitle = (tableau) => {
  if (Array.isArray(tableau)) {
    console.log('je suis dans le switch');
    switch (tableau.length) {
      case 0:
        return expectedEmptyArray;
      case 1:
        return expectedOneElementArray;
      default:
        return expectedSeveralElementsArray;
    }
  }
  return expectedDefaultReturn;
};
