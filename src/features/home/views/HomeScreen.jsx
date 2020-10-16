import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container, TitleView, Title, Content, ActionsContainer,
} from './style';
import strings from '../../../configs/strings';
import ActionBox from '../../../components/action-box';
import colors from '../../../configs/colors';
import OverviewReports from './OverviewReports';

const HomeScreen = ({ navigation }) => {
  const onPressPurchaseButton = () => {
    const routes = [
      {
        name: 'Home',
      }, {
        name: 'Purchase',
        params: { screen: 'PurchaseCreate', params: {} },
      },
    ];
    navigation.reset({ index: 0, routes });
  };

  const onPressPurchaseListButton = () => {
    const routes = [
      {
        name: 'Home',
      }, {
        name: 'PurchaseList',
        params: { screen: 'PurchaseListCreate', params: {} },
      },
    ];
    navigation.reset({ index: 0, routes });
  };

  return (
    <Container>
      <TitleView>
        <Title>
          {strings('appName')}
        </Title>
      </TitleView>

      <Content>
        <ActionsContainer horizontal>
          <ActionBox
            title={strings('doShopping')}
            icon={<MaterialIcon name="add-shopping-cart" size={50} color={colors.primary.main} />}
            onPress={onPressPurchaseButton}
          />
          <ActionBox
            title={strings('doShoppingList')}
            icon={<MaterialIcon name="shopping-cart" size={50} color={colors.primary.main} />}
            onPress={onPressPurchaseListButton}
          />
        </ActionsContainer>

        <OverviewReports />
      </Content>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
