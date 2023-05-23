
const fib = require("../FunctionUnits/fibonacci");
test('0th Fibonacci term 0', () => {
    expect(fib(0)).toBe(0);
});
test('7th Fibonacci term 13', () => {
    expect(fib(7)).toBe(13)
});