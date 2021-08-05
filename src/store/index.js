import { createStore, applyMiddleware, compose } from 'redux';

import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';

import reducer from 'src/reducer';
// Un reducer est une fonction qui return mon state attendu
// Je donne mon reducer à createStore pour qu'il sache
// à quoi doit ressembler mon state initial

// Si j'ai les devtools d'installés, j'utilise le compose qu'ils me fournissent
// Sinon, j'utilise celui de redux
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    ajaxMiddleware,
  ),
);

const store = createStore(
  reducer,
  // La ligne suivante permet de relier notre store à l'extension redux-dev-tools
  // eslint-disable-next-line no-underscore-dangle
  enhancers,
);

export default store;
