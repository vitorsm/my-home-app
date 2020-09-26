export const convertNameStr = (name) => {
  if (!name || !name.trim()) {
    return null;
  }

  const splittedNames = name.trim().split(' ');

  const result = splittedNames.map((part) => {
    let cPart = part.trim();
    if (!['da', 'de', 'do'].includes(cPart) && cPart.length > 1) {
      cPart = cPart.charAt(0).toUpperCase() + cPart.slice(1);
    }
    return cPart;
  });

  return result.join(' ');
};

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return false;
  }

  return name.length > 2;
};
