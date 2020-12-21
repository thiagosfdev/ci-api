const operations = require('./operations');

test('add 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
});

test('sub 10 - 2 to equal 8', () => {
    expect(operations.sub(10, 2)).toBe(8);
});

test('mul 10 x 2 to equal 20', () => {
    expect(operations.mult(10, 2)).toBe(20);
});

test('div 10 / 2 to equal 5', () => {
    expect(operations.div(10, 2)).toBe(5);
});