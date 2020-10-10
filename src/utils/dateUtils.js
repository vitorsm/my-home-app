export const formatDateToStr = (date, format) => {
  if (!date) {
    return null;
  }

  const dateToConvert = date instanceof Date ? date : new Date(date);

  return dateToConvert.toLocaleDateString(format || 'en-gb');
};
