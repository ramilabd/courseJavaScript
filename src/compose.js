/*
  Функция compose, принимает на вход две других одноаргументных функции и возвращает новую функцию.
  Эта новая функция также принимает на вход один параметр и при вызове применяет его последовательно
  к переданным функциям в обратном порядке.
*/

// Мое решение
const compose = (func1, func2) => arg => func1(func2(arg));
const f = compose(Math.sqrt, Math.abs);
console.log(f(-4));
console.log(compose(v => v, v => v)(10));
console.log(compose(v => v + 2, v => v)(10));
console.log(compose(v => v, v => v - 2)(10));
console.log(compose(v => v ** 2, v => v - 2)(2));
console.log(compose(v => v - 2, v => v ** 2)(2));


// Решение Хекслета
// export default (f, g) => x => f(g(x));