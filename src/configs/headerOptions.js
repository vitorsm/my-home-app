import colors from './colors';

const getMenuBarConfig = () => {
  const options = {
    headerStyle: { backgroundColor: colors.primary.main },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: '100',
    },
  };

  return options;
};

export default getMenuBarConfig;
