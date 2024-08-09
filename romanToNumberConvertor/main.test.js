const { calculate } = require('./main');

describe('calculate', () => {
    it('should convert Roman numeral I to 1', () => {
        const result = calculate('I');
        expect(result).toBe(1);
    });

    it('should convert Roman numeral V to 5', () => {
        const result = calculate('V');
        expect(result).toBe(5);
    });

    it('should convert Roman numeral X to 10', () => {
        const result = calculate('X');
        expect(result).toBe(10);
    });

    it('should convert Roman numeral L to 50', () => {
        const result = calculate('L');
        expect(result).toBe(50);
    });

    it('should convert Roman numeral C to 100', () => {
        const result = calculate('C');
        expect(result).toBe(100);
    });

    it('should convert Roman numeral D to 500', () => {
        const result = calculate('D');
        expect(result).toBe(500);
    });

    it('should convert Roman numeral M to 1000', () => {
        const result = calculate('M');
        expect(result).toBe(1000);
    });

    it('should convert Roman numeral IV to 4', () => {
        const result = calculate('IV');
        expect(result).toBe(4);
    });

    it('should convert Roman numeral IX to 9', () => {
        const result = calculate('IX');
        expect(result).toBe(9);
    });

    it('should convert Roman numeral XL to 40', () => {
        const result = calculate('XL');
        expect(result).toBe(40);
    });

    it('should convert Roman numeral XC to 90', () => {
        const result = calculate('XC');
        expect(result).toBe(90);
    });

    it('should convert Roman numeral CD to 400', () => {
        const result = calculate('CD');
        expect(result).toBe(400);
    });

    it('should convert Roman numeral CM to 900', () => {
        const result = calculate('CM');
        expect(result).toBe(900);
    });

    it('should convert Roman numeral MMXXI to 2021', () => {
        const result = calculate('MMXXI');
        expect(result).toBe(2021);
    });

    it('should convert Roman numeral MMMCMXCIX to 3999', () => {
        const result = calculate('MMMCMXCIX');
        expect(result).toBe(3999);
    });

    it('should return NaN for invalid Roman numeral Z', () => {
        const result = calculate('Z');
        expect(result).toBeNaN();
    });

    it('should return NaN for mixed valid and invalid Roman numerals', () => {
        const result = calculate('MXZ');
        expect(result).toBeNaN();
    });

    it('should return 0 for null input', () => {
        const result = calculate(null);
        expect(result).toBe(0);
    });

    it('should return 0 for undefined input', () => {
        const result = calculate(undefined);
        expect(result).toBe(0);
    });

    it('should return 0 for input with only spaces', () => {
        const result = calculate('   ');
        expect(result).toBe(0);
    });

    it('should return 0 for empty string input', () => {
        const result = calculate('');
        expect(result).toBe(0);
    });

    it('should convert lowercase Roman numeral l to 50', () => {
        const result = calculate('l');
        expect(result).toBe(50);
    });

    it('should convert mixed case Roman numeral mCmXcIx to 1999', () => {
        const result = calculate('mCmXcIx');
        expect(result).toBe(1999);
    });

    it('should return NaN for invalid characters mixed with valid Roman numerals', () => {
        const result = calculate('M1X');
        expect(result).toBeNaN();
    });

    it('should convert valid Roman numerals with spaces to correct number', () => {
        const result = calculate(' M M X X I ');
        expect(result).toBe(2021);
    });
});