import { CardStyleInterpolators } from '@react-navigation/stack';

const TopToDownCardStyleInterpolator = ({
  current, next, index, closing, swiping, layouts, insets,
}) => CardStyleInterpolators.forRevealFromBottomAndroid({
  current, next, index, closing, swiping, inverted: -1, layouts, insets,
});

export default TopToDownCardStyleInterpolator;
