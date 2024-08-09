const { firstNonRepeatedChar } = require('./firstNonRepChar');

describe('firstNonRepeatedChar', () => {
    it('should return the first non-repeated character', () => {
        const str = 'swiss';
        const result = firstNonRepeatedChar(str);
        expect(result).toBe('w');
    });

    it('should return null when all characters are repeated', () => {
        const str = 'aabbcc';
        const result = firstNonRepeatedChar(str);
        expect(result).toBe(null);
    });

    it('should return null for an empty string', () => {
        const str = '';
        const result = firstNonRepeatedChar(str);
        expect(result).toBe(null);
    });

    it('should return the first non-repeated character with special characters', () => {
        const str = 'a@b@c';
        const result = firstNonRepeatedChar(str);
        expect(result).toBe('a');
    });

    it('should return the first non-repeated character with spaces', () => {
        const str = 'a b a';
        const result = firstNonRepeatedChar(str);
        expect(result).toBe('b');
    });
});