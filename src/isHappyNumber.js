/*
* Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое,
* и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.
*/

import {assertOneParam} from './myModules';

// Мое решение
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (num) => {
  let res = 0;
  for (let i = 1; i <= 10; i += 1) {
    res = sumOfSquareDigits(num);
    if (res === 1) {
      return true;
    } else {
      num = res;
    }
  }
  return false;
};
// Решение Хекслета
export default (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};

// Тестирование
assertOneParam(false, 0, isHappyNumber);
assertOneParam(true, 1, isHappyNumber);
assertOneParam(false, 2, isHappyNumber);
assertOneParam(false, 3, isHappyNumber);
assertOneParam(false, 4, isHappyNumber);
assertOneParam(false, 5, isHappyNumber);
assertOneParam(false, 6, isHappyNumber);
assertOneParam(true, 7, isHappyNumber);
assertOneParam(false, 8, isHappyNumber);
assertOneParam(false, 9, isHappyNumber);
assertOneParam(true, 10, isHappyNumber);