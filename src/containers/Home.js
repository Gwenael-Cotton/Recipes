import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapState = (state) => ({
  recipes: state.recipes.list,
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Home);
