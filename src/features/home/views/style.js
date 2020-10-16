import styled from 'styled-components';
import fonts from '../../../configs/fonts';
import colors from '../../../configs/colors';

export const Container = styled.View`
  flex: 1;
`;

export const TitleView = styled.View`
  width: 100%;
  padding: 40px;
  background-color: ${colors.primary.main};
  elevation: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${fonts.screenInputText.size}px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const ActionsContainer = styled.ScrollView`
  flex-direction: row;
`;

export const OverviewReportsContainer = styled.View`
  width: 100%;
`;
