export const isNumber = (value) => {
  return typeof value === 'number';
};

export const toTBD = (d, message = 'TBD') => {
  if (d === '0') {
    return message;
  }
  return d;
};
