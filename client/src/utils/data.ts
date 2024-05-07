export const isNumber = (value) => {
  return typeof value === 'number';
};

export const toTBD = (d) => {
  if (d === '0') {
    return 'TBD';
  }
  if (d === 0) {
    return 'TBD';
  }
  return d;
};
