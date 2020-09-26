import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageDialog from '../../../components/message-dialog';
import colors from '../../../configs/colors';

const DEFAULT_ERROR_TITLE = 'Algo de errado não está certo';
const DEFAULT_ERROR_MESSAGE = 'Não conseguimos efetuar essa ação. Dá uma olhada se está com acesso a internet. Para esse recurso é necessário estar conectado a internet.';

const ErrorDialogScreen = ({ defaultError }) => {
  const [showScreen, setShowScreen] = useState(false);
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    if (defaultError) {
      setShowScreen(true);
      setMessageData({
        title: DEFAULT_ERROR_TITLE,
        message: DEFAULT_ERROR_MESSAGE,
      });
    }
  }, [defaultError]);

  if (!showScreen) {
    return null;
  }

  return (
    <MessageDialog messageData={messageData} elementIcon={<Icon name="error" size={80} color={colors.primary.light} />} />
  );
};

ErrorDialogScreen.propTypes = {
  defaultError: PropTypes.shape({
    errorCode: PropTypes.number,
  }),
};

ErrorDialogScreen.defaultProps = {
  defaultError: null,
};

function mapStateToProps({ defaultError }) {
  return { defaultError };
}

export default connect(mapStateToProps)(ErrorDialogScreen);
