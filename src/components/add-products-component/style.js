import styled from 'styled-components';
import { Dimensions } from 'react-native';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductListContainer = styled.ScrollView`
  height: ${Dimensions.get('window').height - 170}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.text.main};
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${colors.primary.main};
  elevation: 4;
  justify-content: center;
  align-items: center;
`;
