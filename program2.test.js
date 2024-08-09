const { findElement } = require('./program2');

describe('findElement', () => {
    it('should return the index of the key in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const key = 3;
        const n = arr.length;
        const result = findElement(arr, n, key);
        expect(result).toBe(2);
    });

    it('should return -1 when the key is not present in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const key = 6;
        const n = arr.length;
        const result = findElement(arr, n, key);
        expect(result).toBe(-1);
    });

    it('should return -1 for an empty array', () => {
        const arr = [];
        const key = 1;
        const n = arr.length;
        const result = findElement(arr, n, key);
        expect(result).toBe(-1);
    });

    it('should return the index for a single-element array when the key is present', () => {
        const arr = [1];
        const key = 1;
        const n = arr.length;
        const result = findElement(arr, n, key);
        expect(result).toBe(0);
    });

    it('should return -1 for a single-element array when the key is not present', () => {
        const arr = [1];
        const key = 2;
        const n = arr.length;
        const result = findElement(arr, n, key);
        expect(result).toBe(-1);
    });
});