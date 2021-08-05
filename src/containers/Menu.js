import { connect } from 'react-redux';
import Menu from 'src/components/Menu';

const mapState = (state) => ({
  recipes: state.recipes.list,
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Menu);
