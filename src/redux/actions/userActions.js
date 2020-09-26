import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
  defaultSuccessCallback, defaultErrorCallback, getDefaultHeader, serverURI,
} from './index';

export const AUTHENTICATION_CREDENTIALS = 'authentication_credentials';
export const FETCH_ACCOUNT_DATA = 'fetch_account_data';
export const CREATE_USER = 'create_user';

export const authenticate = (login, password) => async (dispatch) => {
  const credentials = {
    username: login,
    password,
  };

  await axios.post(`${serverURI}/auth/authenticate`, credentials)
    .then(
      (res) => {
        AsyncStorage.setItem('token', res.data.token);

        defaultSuccessCallback(dispatch, res, AUTHENTICATION_CREDENTIALS);
      },
      (error) => {
        defaultErrorCallback(dispatch, error, AUTHENTICATION_CREDENTIALS);
      },
    );
};

export const logout = () => {
  AsyncStorage.removeItem('token');
};

export const createUser = (user) => async (dispatch) => {
  const url = `${serverURI}/user/`;

  await axios.post(url, user, { headers: getDefaultHeader() }).then((res) => {
    defaultSuccessCallback(dispatch, res, CREATE_USER);
  }, (error) => {
    defaultErrorCallback(dispatch, error, CREATE_USER);
  });
};

export const fetchCurrentUserData = () => async (dispatch) => {
  await axios.get(`${serverURI}/user/`, { headers: getDefaultHeader() }).then((res) => {
    defaultSuccessCallback(dispatch, res, FETCH_ACCOUNT_DATA);
  }, (error) => {
    defaultErrorCallback(dispatch, error, FETCH_ACCOUNT_DATA);
  });
};
