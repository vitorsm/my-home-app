import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const DEFAULT_ERROR_TYPE = 'default_error';

const serverURI = 'http://192.168.0.25:5000/api/';

export const getDefaultHeader = () => ({
  Authorization: `JWT ${AsyncStorage.getItem('token')}`,
});
export const getDefaultAxiosConfig = () => ({
  headers: getDefaultHeader(),
});

export const dispatchHttpError = (dispatch, res) => {
  dispatch({
    type: DEFAULT_ERROR_TYPE,
    payload: res ? res.data : { createdAt: new Date() },
    status: res ? res.status : null,
  });
};

export const defaultSuccessCallback = (dispatch, res, type) => {
  dispatch({
    type,
    payload: res.data,
    status: res.status,
  });
};

export const defaultErrorCallback = (dispatch, res, type) => {
  dispatch({
    type,
    payload: {
      error: true,
      errorStatus: res && res.response ? res.response.status : null,
    },
  });

  dispatchHttpError(dispatch, res.response);
};

export const post = async (endpoint, data, type, dispatch, config, onSucessBeforeDispatch) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = getDefaultAxiosConfig();
  }

  await axios.post(`${serverURI}${endpoint}`, data, processedConfig)
    .then(
      (res) => {
        if (onSucessBeforeDispatch) {
          onSucessBeforeDispatch(res);
        }
        defaultSuccessCallback(dispatch, res, type);
      },
      (error) => {
        defaultErrorCallback(dispatch, error, type);
      },
    );
};

export const put = async (endpoint, data, type, dispatch, config, onSucessBeforeDispatch) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = getDefaultAxiosConfig();
  }

  await axios.put(`${serverURI}${endpoint}`, data, processedConfig)
    .then(
      (res) => {
        if (onSucessBeforeDispatch) {
          onSucessBeforeDispatch(res);
        }

        defaultSuccessCallback(dispatch, res, type);
      },
      (error) => {
        defaultErrorCallback(dispatch, error, type);
      },
    );
};

export const get = async (endpoint, type, dispatch, config) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = getDefaultAxiosConfig();
  }
  await axios.get(`${serverURI}${endpoint}`, processedConfig).then((res) => {
    defaultSuccessCallback(dispatch, res, type);
  }, (error) => {
    defaultErrorCallback(dispatch, error, type);
  });
};
