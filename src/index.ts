export const lengthOf = (word: string) => {
  return word.length;
};

export const reverse = (word: string) => {
  return word.split('').reverse().join('');
};

export const changeCase = (str: string, _case: 'upper' | 'lower') => {
  switch (_case) {
    case 'upper':
      return str.toUpperCase();
    case 'lower':
      return str.toLowerCase();
    default:
      return str;
  }
};

export const replace = (str: string, target: string, replacement: string) => {
  const _target = new RegExp(target, 'g');

  return str.replace(_target, replacement);
};

export const concat = (...words: string[]) => {
  return words.join('');
};
