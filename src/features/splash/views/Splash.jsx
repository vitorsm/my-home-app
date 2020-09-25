import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TitleText, DescriptionText, LoadingContainer,
} from './style';
import CircularProgress from '../../../components/circular-progress';

const Splash = () => (
  <Container>
    <Icon name="home" size={150} color="#FFF" />
    <TitleText>MyHome</TitleText>

    <LoadingContainer>
      <CircularProgress />
      <DescriptionText>Carregando</DescriptionText>
    </LoadingContainer>

  </Container>
);

export default Splash;
