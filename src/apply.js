/*
* Функция apply, которая принимает на вход три параметра:
    1. Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов,
    где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
    2. Функцию для применения
    3. Аргумент для применения
*/

// Мое решение
const apply = (count, func, number) => {
  for (let i = 0; i < count; i += 1) {
    number = func(number);
  }
  console.log(number);
};

// Решение Хекслета
const apply1 = (count, fn, value) =>
    (count === 0 ? value : apply1(count - 1, fn, fn(value)));

// Вызов функции
apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply(3, Math.sqrt, 256); // => 2

apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53
