import React from 'react';
import { Text } from 'react-native';
import { Container, HeaderItem, ContainerScroll } from './style';

const SideMenuScreen = () => (
  <Container>
    <HeaderItem>
      <Text>test header</Text>
    </HeaderItem>
    <ContainerScroll>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
      <Text>test item</Text>
    </ContainerScroll>
  </Container>
);

export default SideMenuScreen;
