const solution = require('./rangeBitCount.js');

test('test 1', () => {
    expect(solution(2, 7)).toBe(11);
});

test('test 2', () => {
    expect(solution(0, 1)).toBe(1);
});

test('test 3', () => {
    expect(solution(1, 10)).toBe(17);
});

test('test 4', () => {
    expect(solution(8, 9)).toBe(3);
});

test('test 5', () => {
    expect(solution(9, 10)).toBe(4);
});
