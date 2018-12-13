/*
  Функция sumOfPairs, принимает на вход две пары и возвращает новую пару, в элементах которой находятся суммы элементов из исходных пар.
 */

import { cons, car, cdr, toString } from 'hexlet-pairs';

// Мое решение

const sumOfPairs = (pair1, pair2) => {
  const pairX = car(pair1) + car(pair2);
  const pairY = cdr(pair1) + cdr(pair2);
  return cons(pairX, pairY)
};

// Решение Хекслета
const sumOfPairs = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));