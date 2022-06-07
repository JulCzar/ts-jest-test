import { changeCase, concat, lengthOf, replace, reverse } from '../src';

describe('String operations', () => {
  it('should return the length of the string', () => {
    const result = lengthOf('Hello World');

    expect(result).toBe(11);
  });

  it('should fail with wrong length', () => {
    const result = lengthOf('Hello World');

    expect(result).not.toBe(10);
  });

  it('should return the string inverted', () => {
    const result = reverse('Hello World');

    expect(result).toBe('dlroW olleH');
  });

  it('should return the passed phrase in upper case', () => {
    const result = changeCase('Hello World', 'upper');

    expect(result).toBe('HELLO WORLD');
  });

  it('should return the passed phrase in lower case', () => {
    const result = changeCase('Hello World', 'lower');

    expect(result).toBe('hello world');
  });

  it('should receive a word/phrase, a target and a replacement and replace all occurrence of the target with the replacement', () => {
    const result = replace('Hello World', 'World', 'Universe');

    expect(result).toBe('Hello Universe');
  });

  it('should concatenate n strings', () => {
    const result = concat('Hello', ' ', 'World');

    expect(result).toBe('Hello World');
  });
});
