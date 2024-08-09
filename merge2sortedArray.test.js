const { mergeSortedArrays } = require('./merge2sortedArray');

test('merges two sorted arrays of equal length', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

test('merges two sorted arrays of different lengths', () => {
    const arr1 = [1, 3];
    const arr2 = [2, 4, 6];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 6]);
});

test('merges when one array is empty', () => {
    const arr1 = [];
    const arr2 = [2, 4, 6];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([2, 4, 6]);
});

test('merges when both arrays are empty', () => {
    const arr1 = [];
    const arr2 = [];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([]);
});

test('merges arrays with negative numbers', () => {
    const arr1 = [-3, -1, 2];
    const arr2 = [-2, 0, 3];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([-3, -2, -1, 0, 2, 3]);
});