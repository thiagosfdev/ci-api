function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const operations = {
    sum,
    sub,
    mult,
    div
};

console.log('NodeJS running successfully!');

module.exports = operations;