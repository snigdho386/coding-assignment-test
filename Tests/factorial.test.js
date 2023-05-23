
const fac = require("../FunctionUnits/factorial");
test('Factorial of 5', () => {
    expect(fac(5)).toBe(120);
});
test('Factorial of 7', () => {
    expect(fac(7)).toBe(5040)
});