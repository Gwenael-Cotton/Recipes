import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Favoris = ({ recipes, fetchFavorites, isLogged }) => {
  useEffect(fetchFavorites, [isLogged]);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes favoris"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};
Favoris.propTypes = {
  recipes: PropTypes.array.isRequired,
  fetchFavorites: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Favoris;
