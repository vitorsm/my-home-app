import React from 'react';
import PropTypes from 'prop-types';
import {
  MessageContentContainer, MessageTitle, MessageText, TitleContainer, TextContainer, ImageContainer,
  ActionsContainer,
} from './style';
import RoundedButton from '../rounded-button';
import strings from '../../configs/strings';
import { colors } from '../../configs/colors';

const MessageContainer = ({
  messageData, onPressOk, elementIcon, contentElement, onPressCancel, okText, cancelText,
}) => {
  const renderIcon = () => {
    if (elementIcon) {
      return (<ImageContainer>{elementIcon}</ImageContainer>);
    }
    return null;
  };

  const renderCancelButton = () => {
    if (!onPressCancel) {
      return null;
    }

    return (
      <RoundedButton
        onPress={onPressCancel}
        style={{ flexGrow: 1, marginRight: 10 }}
        backgroundColor="white"
        textColor={colors.primary.main}
      >
        {cancelText}

      </RoundedButton>
    );
  };

  const renderContent = () => {
    if (contentElement) {
      return contentElement;
    }

    return (
      <>
        {renderIcon()}
        <TextContainer><MessageText>{messageData.message}</MessageText></TextContainer>
        <ActionsContainer>
          {renderCancelButton()}
          <RoundedButton
            onPress={onPressOk}
            style={{ flexGrow: 1, marginLeft: 10 }}
          >
            {okText}

          </RoundedButton>
        </ActionsContainer>

      </>
    );
  };

  return (
    <MessageContentContainer>
      <TitleContainer><MessageTitle>{messageData.title}</MessageTitle></TitleContainer>
      {renderContent()}
    </MessageContentContainer>
  );
};

MessageContainer.propTypes = {
  messageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  onPressOk: PropTypes.func.isRequired,
  elementIcon: PropTypes.element,
  contentElement: PropTypes.element,
  onPressCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
};

MessageContainer.defaultProps = {
  elementIcon: null,
  contentElement: null,
  onPressCancel: null,
  okText: strings('ok'),
  cancelText: strings('cancel'),
};

export default MessageContainer;
