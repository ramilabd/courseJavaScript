/*
* Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
* Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
* Функция, проверяющая является ли номер счастливым (номер может быть как числового, так и строкового типа.
* Функция возвращает true, если билет счастливый, или false, если нет.
*/

import {assertOneParam} from './myModules';

// Мое решение
const isHappyTicket = (num) => {
  const numberAsString = String(num);
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, j = 3; i < 3 && j < numberAsString.length; i += 1, j += 1) {
    sum1 += Number(numberAsString[i]);
    sum2 += Number(numberAsString[j]);
  }

  return sum1 === sum2;
};

// Решение Хеслета
export default (_num) => {
  const num = String(_num);
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};

// Тестирование
assertOneParam(true, 385916, isHappyTicket);
assertOneParam(true, 231002, isHappyTicket);
assertOneParam(true, 128722, isHappyTicket);
assertOneParam(true, '054702', isHappyTicket);