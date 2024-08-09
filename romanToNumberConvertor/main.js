const { ROMAN_NUMBERS } = require('./data');

function convertRomanToNumber(romanDigit) {
    return ROMAN_NUMBERS[romanDigit];
}

function calculate(romanNumber) {
    let result = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        const digit = romanNumber[i];
        let value = convertRomanToNumber(digit);
        const nextDigit = romanNumber[i + 1];
        const nextValue = i < romanNumber.length ? convertRomanToNumber(nextDigit) : null;
        if (nextValue && nextValue > value) {
            value = nextValue - value;
            i++;
        }
        result += value;
    }

    return result;
}

module.exports = { calculate };