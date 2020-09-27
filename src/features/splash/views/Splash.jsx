import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, TitleText, DescriptionText, LoadingContainer,
} from './style';
import CircularProgress from '../../../components/circular-progress';
import * as userActions from '../../../redux/actions/userActions';

const Splash = ({ navigation, fetchCurrentUserData, currentUserData }) => {
  useEffect(() => {
    fetchCurrentUserData(true);
  }, []);

  useEffect(() => {
    if (currentUserData) {
      if (!currentUserData.error && currentUserData.id) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    }
  }, [currentUserData]);

  return (
    <Container>
      <Icon name="home" size={150} color="#FFF" />
      <TitleText>MyHome</TitleText>

      <LoadingContainer>
        <CircularProgress />
        <DescriptionText>Carregando</DescriptionText>
      </LoadingContainer>

    </Container>
  );
};

Splash.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  fetchCurrentUserData: PropTypes.func,
  currentUserData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    error: PropTypes.bool,
  }),
};

Splash.defaultProps = {
  fetchCurrentUserData: null,
  currentUserData: null,
};

function mapStateToProps({ currentUserData }) {
  return { currentUserData };
}

const mapDispatchToProps = {
  fetchCurrentUserData: userActions.fetchCurrentUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
