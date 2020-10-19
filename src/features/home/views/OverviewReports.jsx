import React from 'react';
import { OverviewReportsContainer } from './style';
import MonthlySpentChart from './MonthlySpentChart';
import { getFirstDayByLastMonths } from '../../../utils/dateUtils';

const OverviewReports = () => {
  const lastMonths = 6;

  return (
    <OverviewReportsContainer>
      <MonthlySpentChart endDate={new Date()} startDate={getFirstDayByLastMonths(lastMonths)} />
    </OverviewReportsContainer>
  );
};

export default OverviewReports;
