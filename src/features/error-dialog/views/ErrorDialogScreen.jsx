import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageDialog from '../../../components/message-dialog';
import { colors } from '../../../configs/colors';
import errorMapper from '../../../utils/errorsUtils';

const ErrorDialogScreen = ({ defaultError }) => {
  const [showScreen, setShowScreen] = useState(false);
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    if (defaultError) {
      setShowScreen(true);

      setMessageData(errorMapper(defaultError));
    }
  }, [defaultError]);

  if (!showScreen) {
    return null;
  }

  return (
    <MessageDialog
      messageData={messageData}
      elementIcon={<Icon name="error" size={80} color={colors.error.light} />}
    />
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
