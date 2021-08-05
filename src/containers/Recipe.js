import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { findOneRecipe } from 'src/reducer/receipeReducer';
import { fetchOneRecipe } from 'src/actions/recipesActions';

const mapState = (state, ownProps) => {
  // Je récupère le slug dans l'url
  const { slug } = ownProps.match.params;
  // Dans ownProps, j'ai les props reçus par mon container
  // Donc, à l'aide du state et des props reçus (slug)
  // Je peux trouver la bonne recette dans mon state
  return {
    recipe: findOneRecipe(state.recipes.list, slug),
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  fetchOneRecipe: () => {
    const { slug } = ownProps.match.params;
    const action = fetchOneRecipe(slug);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Recipe);
