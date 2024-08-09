const { isPalindrome } = require('./palindrome');

test('returns true for a palindrome string', () => {
    expect(isPalindrome('madam')).toBe(true);
});

test('returns false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
});

test('returns true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('returns true for a palindrome string with mixed case', () => {
    expect(isPalindrome('Madam')).toBe(false);
});

test('returns true for a palindrome string with spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(false);
});