export const formatDateToStr = (date, format) => {
  if (!date) {
    return null;
  }

  const dateToConvert = date instanceof Date ? date : new Date(date);

  return dateToConvert.toLocaleDateString(format || 'en-gb');
};

export const formatDateTimeToStr = (date, format) => {
  if (!date) {
    return null;
  }

  const dateStr = formatDateToStr(date, format);

  const dateToConvert = date instanceof Date ? date : new Date(date);

  const hourStr = dateToConvert.toLocaleTimeString(format || 'en-gb', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${dateStr} ${hourStr}`;
};
