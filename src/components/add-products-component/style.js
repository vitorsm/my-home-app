import styled from 'styled-components';
import { Dimensions } from 'react-native';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

export const Container = styled.View`
  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductScrollContainer = styled.View`
  height: ${Dimensions.get('window').height - 370}px;
`;

export const ProductListContainer = styled.ScrollView`
  
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

export const NoDataContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 150px;
  align-items: center;
`;

export const NoDataText = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.text.main};
`;

export const FilterContainerScroll = styled.ScrollView`
  width: ${Dimensions.get('window').width - 20}px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
`;
