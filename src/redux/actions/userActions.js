import AsyncStorage from '@react-native-community/async-storage';
import {
  post, get,
} from './index';

export const AUTHENTICATION_CREDENTIALS = 'authentication_credentials';
export const FETCH_ACCOUNT_DATA = 'fetch_account_data';
export const CREATE_USER = 'create_user';

export const authenticate = (login, password) => async (dispatch) => {
  const credentials = {
    username: login,
    password,
  };

  const onSucessBeforeDispatch = (res) => {
    AsyncStorage.setItem('token', res.data.access_token);
  };

  post('auth/authenticate', credentials, AUTHENTICATION_CREDENTIALS, dispatch, null, onSucessBeforeDispatch);
};

export const logout = () => {
  AsyncStorage.removeItem('token');
};

export const createUser = (user) => async (dispatch) => {
  post('user/', user, CREATE_USER, dispatch);
};

export const fetchCurrentUserData = () => async (dispatch) => {
  get('user', FETCH_ACCOUNT_DATA, dispatch);
};
