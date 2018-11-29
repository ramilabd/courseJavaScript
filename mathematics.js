export const factorial = number => {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
};

export const add = (a, b) => {
    return a + b;
};

export const subtraction = (a, b) => {
    return a - b;
};

export const multiplication = (a, b) => {
    return a * b;
};

export const division = (a, b) => {
    return a / b;
};
