const { reverseString } = require('../reverseString');

describe('reverseString - additional tests', () => {
    // it('should return null when input is null', () => {
    //     const str = null;
    //     const result = reverseString(str);
    //     expect(result).toBeUndefined();
    // });

    it('should return undefined when input is undefined', () => {
        const str = undefined;
        const result = reverseString(str);
        expect(result).toBeUndefined();
    });

    it('should handle non-string input gracefully', () => {
        const str = 12345;
        const result = reverseString(str);
        expect(result).toBe('54321');
    });

    it('should reverse a string with numbers and letters', () => {
        const str = 'abc123';
        const result = reverseString(str);
        expect(result).toBe('321cba');
    });

    it('should reverse a very long string', () => {
        const str = 'a'.repeat(1000);
        const result = reverseString(str);
        expect(result).toBe('a'.repeat(1000));
    });
});