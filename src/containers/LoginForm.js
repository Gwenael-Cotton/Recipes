import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';

import { userInputChange, userLogin, userLogout } from 'src/actions/userActions';

const mapState = (state) => {
  const {
    email, password, isLogged, loggedMessage,
  } = state.user;
  return {
    email,
    password,
    isLogged,
    loggedMessage,
  };
};

const mapDispatch = (dispatch) => ({
  changeField: (valeur, name) => {
    // Pour créer une propriété d'objet
    // en fonction de ce que contient une variable
    // je peux mettre le nom de la variable entre []
    const data = { [name]: valeur };
    const action = userInputChange(data);
    dispatch(action);
  },
  handleLogin: () => {
    const action = userLogin();
    dispatch(action);
  },
  handleLogout: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(LoginForm);
