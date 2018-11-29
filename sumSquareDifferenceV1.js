/*
* Программа принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
* Моя версия.
* */
const sumOfSquare = num => {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return Math.pow(num, 2) + sumOfSquare(num - 1);
};

const sumOfNumber = num => {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return num + sumOfNumber(num - 1);
};

const sumSquareDifference = (num) => {
    return Math.pow(sumOfNumber(num), 2) - sumOfSquare(num);
};

console.log(sumSquareDifference(5));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(42));