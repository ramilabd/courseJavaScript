// Задача.
// Реализуте square, которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.


// Моё решение
const square = (num) => {
	return num * num;
};

const sumOfSquares = (num1, num2) => {
	return square(num1) + square(num2);
};

const squareSumOfSquares = (num1, num2) => {
	return square(sumOfSquares(num1, num2));
};



// Решение Хекслета
const square = num => num * num;

const sumOfSquares = (num1, num2) =>
	square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) =>
	square(sumOfSquares(num1, num2));



console.log(squareSumOfSquares(2, 5));