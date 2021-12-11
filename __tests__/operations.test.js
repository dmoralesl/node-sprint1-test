const { div, mul, sub, sum } = require('../app/operations');

// LEVEL 1
test('sum function returns expected value and fails when not providing an array', () => {
    expect(sum([1, 2])).toBe(3);
    expect(sum([1,5,18])).not.toBe(20);
    expect(() => sum(1,2)).toThrow(TypeError);
});

test('sub function returns expected value and fails when not providing an array', () => {
    expect(sub([1, 2])).toBe(-1);
    expect(sub([1,5,18])).not.toBe(20);
    expect(() => sub(1,2)).toThrow(TypeError);
});

test('div function returns expected value and fails when not providing an array', () => {
    expect(div([1, 2])).toBe(.5);
    expect(div([1,5,18])).not.toBe(20);
    expect(() => div(1,2)).toThrow(TypeError);
});

test('mul function returns expected value and fails when not providing an array', () => {
    expect(mul([1, 2])).toBe(2);
    expect(mul([1,5,18])).not.toBe(20);
    expect(() => mul(1,2)).toThrow(TypeError);
});


