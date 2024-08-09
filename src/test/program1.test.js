const { concat, addition } = require('../program1');

describe('concat', () => {
    it('should concatenate id and name into id_name', () => {
        const input = { id: 1, name: "Pedro" };
        const expectedOutput = { id: 1, name: "Pedro", id_name: "1 - Pedro" };
        const result = concat()(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should concatenate id and name into id_name for another object', () => {
        const input = { id: 2, name: "John" };
        const expectedOutput = { id: 2, name: "John", id_name: "2 - John" };
        const result = concat()(input);
        expect(result).toEqual(expectedOutput);
    });
});

describe('addition', () => {
    it('should add two numbers correctly', () => {
        expect(addition(1, 2)).toBe(3);
    });

    it('should add two other numbers correctly', () => {
        expect(addition(5, 7)).toBe(12);
    });
});