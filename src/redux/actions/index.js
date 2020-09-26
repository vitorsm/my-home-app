import AsyncStorage from '@react-native-community/async-storage';

export const DEFAULT_ERROR_TYPE = 'default_error';

export const serverURI = 'http://192.168.0.25:5000/api';

export const getDefaultHeader = () => ({
  Authorization: `JWT ${AsyncStorage.getItem('token')}`,
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
