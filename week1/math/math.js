const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {

    if (b == 0) {
        return "Error"
    }
    return a / b;
}

module.exports = {
    add, sub, mul, div
};