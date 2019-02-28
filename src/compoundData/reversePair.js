/*
  Функция reversePair, принимает на вход пару и возвращает другую, в которой значения переставлены местами.	
 */

import { cons, car, cdr, toString } from 'hexlet-pairs';

// Мое решение
const reversePair = (pair) => cons(cdr(pair), car(pair));

// Решение Хекслета
const reversePair = pair => cons(cdr(pair), car(pair));