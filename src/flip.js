/*
* Функция flip преобразовывает другую функцию так, что порядок её аргументов становиться обратным.
* Например, у нас может быть функция pow, которая возводит первый аргумент в степень второго.
* flip вернет нам новую функцию, у которой первый аргумент — это степень, а второй — это число,
* которое нужно возводить в эту степень.
*/

// Мое решение
const sub = (a, b) => a - b;
const division = (a, b) => a / b;
const flip = (func) => (a, b) => func(b, a);

const reversePow = flip(Math.pow);
const reverseSub = flip(sub);
const reverseDivision = flip(division);

console.log(reversePow(2, 3));
console.log(reverseSub(5, 3));
console.log(reverseDivision(10, 2));

// Решение Хекслета
export default f => (a, b) => f(b, a);