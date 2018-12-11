/*
 Реализуйте и экспортируйте по умолчанию функцию partialApply.
 Эта функция умеет частично применять один (второй) аргумент у переданной функции:
*/

const partialApply = (func, arg2) => (arg1) => func(arg1, arg2);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
// f1 = (arg1) => func(arg1, 2)

console.log(f1(1)); // => 1
console.log(f1(10)); // => 100

const f2 = partialApply((a, b) => a * b, 5);
console.log(f2(2)); // => 10
console.log(f2(5)); // => 25