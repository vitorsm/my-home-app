import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container, TitleText, DescriptionText, LoadingContainer,
} from './style';
import CircularProgress from '../../../components/circular-progress';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }, 1000);

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
};

export default Splash;
