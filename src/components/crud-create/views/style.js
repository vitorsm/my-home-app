import styled from 'styled-components';
import colors from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
flex: 1;
`;

export const FildsContainer = styled.ScrollView`
flex: 1;
padding: 20px;
`;

export const ActionsContainer = styled.View`
width: 100%;
justify-content: center;
padding: 20px;
`;

export const ActionsContainerClosed = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.main};
  padding: 10px;
  margin-top: 20px;
  flex-direction: row;
`;

export const ActionsText = styled.Text`
  font-size: ${fonts.title.size}px;
  color: white;
`;

export const LinkActionsContainer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
flex-direction: row;
`;
