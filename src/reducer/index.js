import { combineReducers } from 'redux';
import receipeReducer from './receipeReducer';
import userReducer from './userReducer';
// exporter le resultat du combineReducer pour l'utiliser
// dans le createStore

export default combineReducers({
  recipes: receipeReducer,
  user: userReducer,
});

// Gràce à ça j'obitens un state
/**
  {
    recipes: {
      list: []
    }
  }

 * */
