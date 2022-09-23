export const stringUtils = {
  hyphenBetweenWords: (str: string) => {
    return str.trim().replace(/[ -]+/g, '-').toLowerCase();
  },
  deAccent: (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },
};
