const { fizzBuzz } = require('./fizzbuzz');

test('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('returns "Fizz" for numbers divisible by 3 only', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
});

test('returns "Buzz" for numbers divisible by 5 only', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
});

test('returns the number as a string for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(7)).toBe('7');
});