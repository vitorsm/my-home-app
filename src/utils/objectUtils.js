export const compareObj = (obj1, obj2, field) => {
  const fieldName = field || 'id';

  if (obj1 === obj2) {
    return true;
  }

  if ((!obj1 && obj2) || (obj1 && !obj2)) {
    return false;
  }

  return obj1[fieldName] === obj2[fieldName];
};
