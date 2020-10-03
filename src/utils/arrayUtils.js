export const removeItemFromList = (array, item, identifierField) => {
  let idField = identifierField;
  if (!idField) {
    idField = 'id';
  }
  const selectedProduct = array.find((i) => i[idField] === item[idField]);

  if (selectedProduct) {
    const index = array.indexOf(selectedProduct);
    array.splice(index, 1);
  }
};

export const getItemFromList = (array, id, identifierField) => {
  if (!array || !array.length) {
    return null;
  }
  let idField = identifierField;
  if (!idField) {
    idField = 'id';
  }

  const item = array.find((i) => i[idField] === id);
  return item || null;
};
