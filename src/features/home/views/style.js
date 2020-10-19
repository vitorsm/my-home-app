import styled from 'styled-components';
import fonts from '../../../configs/fonts';
import colors from '../../../configs/colors';

export const Container = styled.View`
  flex: 1;
  elevation: 1;
  background-color: white;
`;

export const TitleView = styled.View`
  width: 100%;
  padding-bottom: 60px;
  background-color: ${colors.primary.main};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${fonts.screenInputText.size}px;
`;

export const Content = styled.View`
  padding: 20px;
  padding-top: 40px;
  border-radius: 50px;
  background-color: white;
  margin-top: -40px;
`;

export const ActionsContainer = styled.ScrollView`
  flex-direction: row;
`;

export const OverviewReportsContainer = styled.View`
  width: 100%;
  padding-top: 20px;
`;

export const NoDataContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 30px;
`;

export const NoDataText = styled.Text`
  font-size: ${fonts.title.size}px;
  color: ${colors.text.main};
`;
