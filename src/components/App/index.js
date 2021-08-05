import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';
import LoginForm from 'src/containers/LoginForm';
import Favoris from 'src/containers/Favorites';
import Loading from './Loading';

import './style.scss';

function App({ init, loading }) {
  useEffect(init, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <LoginForm />
      <Route path="/" exact>
        <Home />
      </Route>
      {/* // Solution 1
      {
        recipes.list.map((recipeObject) => (
          <Route path={`/recipe/${recipeObject.slug}`}>
            <Recipe recipe={recipeObject} />
          </Route>
        ))
      } */}

      {/* // Avec cette solution
      // Je peux donner moi-me les props à mon container */}

      {/* <Route path="/recipe/:slug">
        <Recipe toto="machin" />
      </Route> */}

      {/* // Avec cette solution
      // Le routeur va donner des props à mon container */}
      <Route path="/favoris" component={Favoris} />
      <Route component={Recipe} path="/recipe/:slug" />
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  init: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
