import { CardStyleInterpolators } from '@react-navigation/stack';

const LeftToRightCardStyleInterpolator = ({
  current, next, index, closing, swiping, layouts, insets,
}) => CardStyleInterpolators.forHorizontalIOS({
  current, next, index, closing, swiping, inverted: -1, layouts, insets,
});

export default LeftToRightCardStyleInterpolator;
