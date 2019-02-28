/*
* Программа принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
* Решение Хекслета.
* */
const sumOfSquares = (n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i * i;
        i += 1;
    }

    return sum;
};

const squareOfSum = (n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i += 1;
    }

    return sum * sum;
};

const sumSquareDifference = n =>
    squareOfSum(n) - sumOfSquares(n);

console.log(sumSquareDifference(5));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(42));