const ack = require("../FunctionUnits/ackermann");
test('Ackermann of 2,1', () => {
    expect(ack(2, 1)).toBe(5);
});
test('Ackermann of 2,2', () => {
    expect(ack(2, 2)).toBe(7)
});