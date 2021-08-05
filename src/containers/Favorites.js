import { connect } from 'react-redux';

import Favoris from 'src/components/Favoris';
import { fetchFav } from 'src/actions/recipesActions';

const mapState = (state) => ({
  recipes: state.recipes.favorites,
  isLogged: state.user.isLogged,
});

const mapDispatch = (dispatch) => ({
  fetchFavorites: () => {
    const actionToDispatch = fetchFav();
    dispatch(actionToDispatch);
  },
});

export default connect(mapState, mapDispatch)(Favoris);
