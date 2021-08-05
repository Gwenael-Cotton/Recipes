export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const FETCH_ONE_RECIPE_SUCCESS = 'FETCH_ONE_RECIPE_SUCCESS';
export const FETCH_ONE_RECIPE_ERROR = 'FETCH_ONE_RECIPE_ERROR';
export const FETCH_ONE_RECIPE = 'FETCH_ONE_RECIPE';
export const FETCH_FAV = 'FETCH_FAV';
export const FETCH_FAV_SUCCESS = 'FETCH_FAV_SUCCESS';
export const FETCH_FAV_ERROR = 'FETCH_FAV_ERROR';

export const fetRecipesSuccess = (payload) => ({ type: FETCH_RECIPES_SUCCESS, payload });
export const fetRecipesError = () => ({ type: FETCH_RECIPES_ERROR });

export const fetchOneRecipe = (payload) => ({ type: FETCH_ONE_RECIPE, payload });
export const fetchOneRecipeError = () => ({ type: FETCH_ONE_RECIPE_ERROR });
export const fetchOneRecipeSuccess = (payload) => ({ type: FETCH_ONE_RECIPE_SUCCESS, payload });

export const fetchFav = () => ({ type: FETCH_FAV });
export const fetchFavSuccess = (payload) => ({ type: FETCH_FAV_SUCCESS, payload });
export const fetchFavError = () => ({ type: FETCH_FAV_ERROR });
