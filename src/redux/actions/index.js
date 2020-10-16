import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const DEFAULT_ERROR_TYPE = 'default_error';

// const serverURI = 'http://192.168.0.25:5000/api/';
// const serverURI = 'http://192.168.43.147:5000/api/';
const serverURI = 'http://192.168.100.16:5000/api/';
// const serverURI = 'http://myhome.intcode.com.br/api/';

export const getDefaultHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    Authorization: `JWT ${token}`,
  };
};
export const getDefaultAxiosConfig = async () => ({ headers: await getDefaultHeader() });

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

export const defaultErrorCallback = (dispatch, res, type, ignoreDispatchError) => {
  dispatch({
    type,
    payload: {
      error: true,
      errorStatus: res && res.response ? res.response.status : null,
    },
  });

  if (!ignoreDispatchError) {
    dispatchHttpError(dispatch, res.response);
  }
};

export const httpPost = async (endpoint, data, type, dispatch, config, onSucessBeforeDispatch) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = await getDefaultAxiosConfig();
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

export const httpPut = async (endpoint, data, type, dispatch, config, onSucessBeforeDispatch) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = await getDefaultAxiosConfig();
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

export const httpGet = async (endpoint, type, dispatch, ignoreDispatchError, config) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = await getDefaultAxiosConfig();
  }
  await axios.get(`${serverURI}${endpoint}`, processedConfig).then((res) => {
    defaultSuccessCallback(dispatch, res, type);
  }, (error) => {
    defaultErrorCallback(dispatch, error, type, ignoreDispatchError);
  });
};

export const httpDelete = async (endpoint, type, dispatch, ignoreDispatchError, config) => {
  let processedConfig = config;
  if (config === undefined) {
    processedConfig = await getDefaultAxiosConfig();
  }
  await axios.delete(`${serverURI}${endpoint}`, processedConfig).then((res) => {
    defaultSuccessCallback(dispatch, res, type);
  }, (error) => {
    defaultErrorCallback(dispatch, error, type, ignoreDispatchError);
  });
};
