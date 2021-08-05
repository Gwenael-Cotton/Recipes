import axios from 'axios';
import {
  USER_HANDLE_LOGIN,
  userLoginSuccess,
  userLoginError,
} from 'src/actions/userActions';

import { APP_INIT } from 'src/actions';

import {
  fetRecipesSuccess,
  fetRecipesError,
  FETCH_ONE_RECIPE,
  fetchOneRecipeSuccess,
  fetchOneRecipeError,
  FETCH_FAV,
  fetchFavSuccess,
  fetchFavError,
} from 'src/actions/recipesActions';

const BASE_URL = 'http://localhost:3001';

export default (store) => (next) => async (action) => {
  const { token } = store.getState().user.infos;
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // Ici examiner les actions
  // pour trouver celles qui nécessitent un appel à une API
  // Afin de déclencher la requête, et lorsqu'elle se termine
  // dispatcher des actions pour changer mon state
  switch (action.type) {
    case FETCH_FAV: {
      try {
        const result = await axios.get('http://localhost:3001/favorites', config);
        const actionToSend = fetchFavSuccess(result.data);
        store.dispatch(actionToSend);
      }
      catch (error) {
        const actionToSend = fetchFavError();
        store.dispatch(actionToSend);
      }

      break;
    }
    case APP_INIT: {
      try {
        const response = await axios({
          url: `${BASE_URL}/recipes`,
          method: 'get',
        });
        const actionToDispatch = fetRecipesSuccess(response.data);
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        const actionToDispatch = fetRecipesError();
        store.dispatch(actionToDispatch);
      }
      break;
    }

    case FETCH_ONE_RECIPE: {
      try {
        const result = await axios({
          url: `${BASE_URL}/recipes/${action.payload}`,
        });
        const actionToSend = fetchOneRecipeSuccess(result.data);
        store.dispatch(actionToSend);
      }
      catch (error) {
        const actionToSend = fetchOneRecipeError();
        store.dispatch(actionToSend);
      }
      break;
    }

    case USER_HANDLE_LOGIN: {
      // Lancer la requête pour me logger
      // Et en cas de succès dispatcher une action
      // EN cas d'erreur dispatcher une autre action
      const { email, password } = store.getState().user;
      try {
        const response = await axios({
          url: `${BASE_URL}/login`,
          method: 'post',
          data: {
            email, password,
          },
        });
        const actionToDispatch = userLoginSuccess(response.data);
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        const actionToDispatch = userLoginError();
        store.dispatch(actionToDispatch);
      }
      break;
    }
    default:
      return next(action);
  }
};
