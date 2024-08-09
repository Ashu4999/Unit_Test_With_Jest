const { canCrossTheBridge } = require('../canCrossTheBridge.js');
describe('canCrossTheBridge', () => {
    test('should return true when truck weight is less than max weight', () => {
        expect(canCrossTheBridge(10000, 8000)).toBe(true);
    });

    test('should return true when truck weight is equal to max weight', () => {
        expect(canCrossTheBridge(10000, 10000)).toBe(true);
    });

    test('should return false when truck weight is greater than max weight', () => {
        expect(canCrossTheBridge(10000, 12000)).toBe(false);
    });

    test('should return true when max weight and truck weight are both zero', () => {
        expect(canCrossTheBridge(0, 0)).toBe(true);
    });

    test('should return false when max weight is zero and truck weight is greater than zero', () => {
        expect(canCrossTheBridge(0, 1)).toBe(false);
    });

    test('should return true when max weight is a large number and truck weight is a small number', () => {
        expect(canCrossTheBridge(Number.MAX_SAFE_INTEGER, 1)).toBe(true);
    });

    test('should return false when max weight is a small number and truck weight is a large number', () => {
        expect(canCrossTheBridge(1, Number.MAX_SAFE_INTEGER)).toBe(false);
    });
});