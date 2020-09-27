import strings from '../configs/strings';

const getDefaultError = () => ({
  title: strings('genericErrorTitle'),
  message: strings('genericErrorMessage'),
});

const mapper = {
  40003: (errorFromServer) => ({
    title: strings('userRegisterErrorTitle'),
    message: strings('loginAlreadyExistsErrorMessage', { login: errorFromServer.description.value }),
    code: 40003,
  }),
  401: () => ({
    title: strings('invalidCredentialsTitle'),
    message: strings('invalidCredentialsMessage'),
    code: 401,
  }),
  50001: () => ({
    title: strings('genericServerErrorTitle'),
    message: strings('genericServerErrorMessage'),
    code: 50001,
  }),
};

const errorMapper = (errorFromServer) => {
  let selectedError = getDefaultError;
  if (errorFromServer && errorFromServer.error_code) {
    selectedError = mapper[errorFromServer.error_code];
  } else if (errorFromServer && errorFromServer.status_code) {
    selectedError = mapper[errorFromServer.status_code];
  }

  if (!selectedError) {
    selectedError = getDefaultError;
  }

  return selectedError(errorFromServer);
};

export default errorMapper;
