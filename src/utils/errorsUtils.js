const getDefaultError = () => ({
  title: 'Algo de errado não está certo',
  message: 'Não conseguimos efetuar essa ação. Dá uma olhada se está com acesso a internet. Para esse recurso é necessário estar conectado a internet.',
});

const mapper = {
  40003: (errorFromServer) => ({
    title: 'Erro durante o cadastro',
    message: `O login '${errorFromServer.description.value}' já existe. Por favor escolha outro e tente novamente`,
    code: 40003,
  }),
  401: () => ({
    title: 'Credenciais inválidas',
    message: 'Usuário ou senha incorretos',
    code: 401,
  }),
  50001: () => ({
    title: 'Erro',
    message: 'Ocorreu um erro interno daqueles que ninguém achou que poderia acontecer. Peça ajuda.',
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
