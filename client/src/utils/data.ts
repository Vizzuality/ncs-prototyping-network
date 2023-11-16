export const isNumber = (value) => {
  return typeof value === 'number';
};

export const toSlug = (string) => {
  return string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const toName = (slug) => {
  return slug
    .toLowerCase()
    .split('-')
    .map((i) => i[0].toUpperCase() + i.substr(1))
    .join(' ');
};

export const toTBD = (d) => (d !== 0 ? d : 'TBD');
