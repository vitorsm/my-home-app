import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RoundedButton from '../../rounded-button';
import {
  Container, FildsContainer, ActionsContainer, LinkActionsContainer,
} from './style';
import strings from '../../../configs/strings';
import TestLink from '../../text-link';
import CircularProgress from '../../circular-progress';
import { colors } from '../../../configs/colors';
import MessageDialog from '../../message-dialog';

const CRUDCreate = ({
  isEditing, saveEnabled, onCancelClick, onSaveClick, children, isLoading, onDeleteClick,
  deleteTitle, deleteMessage,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

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

  const renderDeleteButton = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <TestLink style={{ margin: 20 }} onPress={onPressDelete}>{strings('delete')}</TestLink>
    );
  };

  const renderActions = () => {
    if (isLoading) {
      return (
        <CircularProgress
          size={100}
          color={colors.primary.main}
          borderColor={colors.text.light}
        />
      );
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

  return (
    <Container>
      {renderDeleteConfirmationDialog()}
      <FildsContainer>
        {children}
      </FildsContainer>

      <ActionsContainer>
        {renderActions()}
      </ActionsContainer>
    </Container>
  );
};

CRUDCreate.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  saveEnabled: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
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
