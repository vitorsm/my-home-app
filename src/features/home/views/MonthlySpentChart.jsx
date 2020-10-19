import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import * as purchaseActions from '../../../redux/actions/purchaseActions';
import Card from '../../../components/card';
import CircularProgress from '../../../components/circular-progress';
import colors from '../../../configs/colors';
import { NoDataContainer, NoDataText } from './style';
import strings from '../../../configs/strings';

const MonthlySpentChart = ({
  getMonthlySpent, monthlySpent, startDate, endDate,
}) => {
  const [monthlySpentData, setMonthlySpentData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!monthlySpent) {
      setIsLoading(true);
      getMonthlySpent(startDate, endDate);
    }
  }, []);

  useEffect(() => {
    let monthlySpentToSet = null;

    if (monthlySpent) {
      monthlySpentToSet = monthlySpent.map((m, index) => ({ ...m, key: index + 1 }));
    }

    setIsLoading(false);
    setMonthlySpentData(monthlySpentToSet);
  }, [monthlySpent]);

  const renderAreaChart = () => (
    <View style={{ height: 200, padding: 20 }}>
      <AreaChart
        style={{ height: 150 }}
        data={monthlySpentData}
        yAccessor={({ item }) => item.value}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
      >
        <Grid />
      </AreaChart>
      <XAxis
        data={monthlySpentData}
        svg={{
          fill: 'black',
          fontSize: 8,
          fontWeight: 'bold',
          rotation: 20,
          originY: 30,
          y: 5,
        }}
        xAccessor={({ item }) => item.key}
        formatLabel={(value) => {
          const selectedItem = monthlySpentData.find((d) => d.key === value);
          if (!selectedItem) {
            return '';
          }

          return `${selectedItem.month}/${selectedItem.year}`;
        }}
        numberOfTicks={monthlySpentData.length}
        style={{ marginHorizontal: -15, height: 50 }}
        contentInset={{ left: 10, right: 25 }}
      />
    </View>
  );

  const renderNoData = () => (
    <NoDataContainer>
      <AwesomeIcon name="question-circle" color={colors.primary.light} size={40} />
      <NoDataText>{strings('noSpentDataFound')}</NoDataText>
    </NoDataContainer>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <NoDataContainer>
          <CircularProgress
            size={40}
            color={colors.primary.main}
            borderColor={colors.text.light}
          />
        </NoDataContainer>
      );
    }

    if (!monthlySpentData || !monthlySpentData.length) {
      return renderNoData();
    }

    return renderAreaChart();
  };

  return (
    <Card
      title={strings('monthlySpentData')}
      description={strings('monthlySpentDataDescription')}
    >
      {renderContent()}
    </Card>
  );
};

MonthlySpentChart.propTypes = {
  getMonthlySpent: PropTypes.func.isRequired,
  monthlySpent: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    value: PropTypes.number,
  })),
  startDate: PropTypes.shape(Object).isRequired,
  endDate: PropTypes.shape(Object).isRequired,
};

MonthlySpentChart.defaultProps = {
  monthlySpent: null,
};

function mapStateToProps({ monthlySpent }) {
  return { monthlySpent };
}

const mapDispatchToProps = {
  getMonthlySpent: purchaseActions.getMonthlySpent,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySpentChart);
