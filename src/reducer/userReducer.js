import {
  USER_LOGIN_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_HANDLE_LOGOUT,
} from 'src/actions/userActions';

const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  isLogged: false,
  loggedMessage: 'Welcome toto',
  infos: {
    token: localStorage.getItem('token'),
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        loggedMessage: `Welcome ${action.payload.pseudo}`,
        infos: {
          pseudo: action.payload.pseudo,
          token: action.payload.token,
        },
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loggedMessage: '',
        infos: {},
      };
    case USER_HANDLE_LOGOUT:
      return {
        ...state,
        isLogged: false,
        infos: {},
        loggedMessage: '',
      };
    case USER_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
