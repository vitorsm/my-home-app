import React from 'react';
import PropTypes from 'prop-types';
import {
  MessageContentContainer, MessageTitle, MessageText, TitleContainer, TextContainer, ImageContainer,
} from './style';
import RoundedButton from '../rounded-button';

const MessageContainer = ({
  messageData, onOkButtonClick, elementIcon, contentElement,
}) => {
  const renderIcon = () => {
    if (elementIcon) {
      return (<ImageContainer>{elementIcon}</ImageContainer>);
    }
    return null;
  };

  const renderContent = () => {
    if (contentElement) {
      return contentElement;
    }

    return (
      <>
        {renderIcon()}
        <TextContainer><MessageText>{messageData.message}</MessageText></TextContainer>
        <RoundedButton onPress={onOkButtonClick}>OK</RoundedButton>
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
  onOkButtonClick: PropTypes.func.isRequired,
  elementIcon: PropTypes.element,
  contentElement: PropTypes.element,
};

MessageContainer.defaultProps = {
  elementIcon: null,
  contentElement: null,
};

export default MessageContainer;
