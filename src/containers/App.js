import { connect } from 'react-redux';
import App from 'src/components/App';

import { appInit } from 'src/actions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  init: () => {
    const action = appInit();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(App);
