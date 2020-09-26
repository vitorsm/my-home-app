import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewFormScreen from '../../../components/view-form-screen';
import FormScreen from '../../../components/form-screen';
import * as userActions from '../../../redux/actions/userActions';

const ConfirmUserDataScreen = ({
  route, navigation, createUser, createdUser,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCraeteUserRequest = () => {
    createUser(route.params);
    setLoading(true);
  };

  const handleCreateUserResponse = () => {
    setLoading(false);
    if (createdUser && !createdUser.error) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  };

  useEffect(() => {
    handleCreateUserResponse(createdUser);
  });

  const getFieldData = () => [{
    fieldName: 'Login',
    fieldValue: route.params.login,
  }, {
    fieldName: 'Nome',
    fieldValue: route.params.name,
  }];

  const onPressOk = () => {
    handleCraeteUserRequest();
  };

  return (
    <FormScreen
      formItem={<ViewFormScreen data={getFieldData()} isLoading={loading} />}
      onPressOk={onPressOk}
      textButton="Finalizar"
    />
  );
};

ConfirmUserDataScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  }).isRequired,
  createUser: PropTypes.func.isRequired,
  createdUser: PropTypes.shape({
    error: PropTypes.bool,
  }),
};

ConfirmUserDataScreen.defaultProps = {
  createdUser: null,
};

const mapDispatchToProps = {
  createUser: userActions.createUser,
};

function mapStateToProps({ createdUser }) {
  return { createdUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmUserDataScreen);
