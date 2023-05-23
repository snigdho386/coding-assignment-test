const nPrime = require("../FunctionUnits/prime");
test('1st Prime is 2', () => {
    expect(nPrime(1)).toBe(2);
});
test('7th Prime is 17 ', () => {
    expect(nPrime(7)).toBe(17)
});