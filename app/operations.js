function sum(operands) {
    return operands.reduce((a, b) => a + b);
}

function sub(operands) {
    return operands.reduce((a, b) => a - b);
}

function mul(operands) {
    return operands.reduce((a, b) => a * b);
}

function div(operands) {
    return operands.reduce((a, b) => a / b);
}

module.exports = {
    sum,
    sub,
    mul,
    div
};