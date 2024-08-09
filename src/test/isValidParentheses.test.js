const { isValidParentheses } = require('../isValidParentheses');

describe('isValidParentheses', () => {
    it('should return true for valid parentheses', () => {
        const str = '()';
        const result = isValidParentheses(str);
        expect(result).toBe(true);
    });

    it('should return false for invalid parentheses', () => {
        const str = '(]';
        const result = isValidParentheses(str);
        expect(result).toBe(false);
    });

    it('should return true for an empty string', () => {
        const str = '';
        const result = isValidParentheses(str);
        expect(result).toBe(true);
    });

    it('should return false for a single opening parenthesis', () => {
        const str = '(';
        const result = isValidParentheses(str);
        expect(result).toBe(false);
    });

    it('should return true for nested valid parentheses', () => {
        const str = '({[]})';
        const result = isValidParentheses(str);
        expect(result).toBe(true);
    });

    it('should return false for nested invalid parentheses', () => {
        const str = '({[})';
        const result = isValidParentheses(str);
        expect(result).toBe(false);
    });

    it('should return true for multiple valid parentheses', () => {
        const str = '()[]{}';
        const result = isValidParentheses(str);
        expect(result).toBe(true);
    });

    it('should return false for multiple invalid parentheses', () => {
        const str = '([)]';
        const result = isValidParentheses(str);
        expect(result).toBe(false);
    });
});