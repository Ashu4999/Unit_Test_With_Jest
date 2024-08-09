function reverseString(str) {
    return str?.toString()?.split('')?.reverse()?.join('');
}

module.exports = { reverseString };