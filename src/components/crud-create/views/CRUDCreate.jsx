import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from '../../rounded-button';
import {
  Container, FildsContainer, ActionsContainer, LinkActionsContainer, ActionsContainerClosed,
  ActionsText,
} from './style';
import strings from '../../../configs/strings';
import TestLink from '../../text-link';
import CircularProgress from '../../circular-progress';
import colors from '../../../configs/colors';
import MessageDialog from '../../message-dialog';

const CRUDCreate = ({
  isEditing, saveEnabled, onSaveClick, children, isLoading, onDeleteClick,
  deleteTitle, deleteMessage,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [actionsIsClosed, setActionsIsClosed] = useState(true);

  const onPressDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const onPressDeleteOk = () => {
    setShowDeleteConfirmation(false);
    onDeleteClick();
  };

  const onPressDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const renderDeleteConfirmationDialog = () => (
    <MessageDialog
      show={showDeleteConfirmation}
      messageData={{
        title: deleteTitle,
        message: deleteMessage,
      }}
      onPressOk={onPressDeleteOk}
      onPressCancel={onPressDeleteCancel}
    />
  );

  const onPressOpenActions = () => {
    setActionsIsClosed(false);
  };

  const onCancelClick = () => {
    setActionsIsClosed(true);
  };

  const renderDeleteButton = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <TestLink style={{ margin: 20 }} onPress={onPressDelete}>{strings('delete')}</TestLink>
    );
  };

  const renderClosedActions = () => (
    <ActionsContainerClosed onPress={onPressOpenActions}>
      <ActionsText>{strings('actions')}</ActionsText>
      <MaterialIcon name="keyboard-arrow-up" color="#FFF" size={20} />
    </ActionsContainerClosed>
  );

  const renderOpenActionsContent = () => {
    if (isLoading) {
      return (
        <CircularProgress
          size={100}
          color={colors.primary.main}
          borderColor={colors.text.light}
        />
      );
    }

    if (actionsIsClosed) {
      return renderClosedActions();
    }

    return (
      <>
        <LinkActionsContainer>
          <TestLink style={{ margin: 20 }} onPress={onCancelClick}>{strings('cancel')}</TestLink>
          {renderDeleteButton()}
        </LinkActionsContainer>
        <RoundedButton onPress={onSaveClick} disabled={!saveEnabled}>
          {strings('save')}
        </RoundedButton>
      </>
    );
  };

  const renderOpenActions = () => (
    <ActionsContainer>
      {renderOpenActionsContent()}
    </ActionsContainer>
  );

  const renderActions = () => {
    if (actionsIsClosed) {
      return renderClosedActions();
    }
    return renderOpenActions();
  };

  return (
    <Container>
      {renderDeleteConfirmationDialog()}
      <FildsContainer>
        {children}
      </FildsContainer>

      {renderActions()}
    </Container>
  );
};

CRUDCreate.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  saveEnabled: PropTypes.bool.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  isLoading: PropTypes.bool,
  onDeleteClick: PropTypes.func.isRequired,
  deleteTitle: PropTypes.string,
  deleteMessage: PropTypes.string,
};

CRUDCreate.defaultProps = {
  isLoading: false,
  deleteTitle: strings('genericDeleteConfirmationTitle'),
  deleteMessage: strings('genericDeleteConfirmationMessage'),
};

export default CRUDCreate;
