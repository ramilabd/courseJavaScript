/*
	Реализуйте абстракцию для работы с рациональными числами, используя пары:
   Конструктор make(numer, denom).
   Селекторы numer (числитель) и denom (знаменатель).
   Функцию toString, возвращающую строковое представление рационального числа. Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.
   Предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).
   Функцию add, выполняющую сложение дробей.
   Функцию sub, выполняющую вычитание дробей.
   Функцию mul, выполняющую умножение дробей.
   Функцию div, выполняющую деление дробей.
   Нормализацию дробей делать не нужно.
 */

import {cons, car, cdr, toString as pairToString} from '../myModules';

const make = (numer, denom) => message => {
  switch (message) {
    case 'numer':
	    return numer;
	  case 'denom':
	 	  return denom;
	}
};
const numer = rat => rat('numer');
const denom = rat => rat('denom');
const toString = rat => `'${numer(rat)} / ${denom(rat)}'`;
const add = (rat1, rat2) => make((numer(rat1) * denom(rat2) + numer(rat2) * denom(rat1)), denom(rat1) * denom(rat2));
const sub = (rat1, rat2) => make((numer(rat1) * denom(rat2) - numer(rat2) * denom(rat1)), denom(rat1) * denom(rat2));
const mul = (rat1, rat2) => make(numer(rat1) * numer(rat2), denom(rat1) * denom(rat2));
const div = (rat1, rat2) => make(numer(rat1) * denom(rat2), denom(rat1) * numer(rat2));
const isEqual = (rat1, rat2) => numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);

const rat1 = make(2, 3);
const rat2 = make(3, 2);
const resultAdd = add(rat1, rat2);
const resultSub = sub(rat1, rat2);
const resultMul = mul(rat1, rat2);
const resultDiv = div(rat1, rat2);
const resultIsEqual = isEqual(rat1, rat2);
console.log(toString(resultAdd));
console.log(toString(resultSub));
console.log(toString(resultMul));
console.log(toString(resultDiv));
console.log(resultIsEqual);

// Решение Хекслета
const make = (numer, denom) => cons(numer, denom);
const numer = pair => car(pair);
const denom = pair => cdr(pair);
const add = (x, y) => make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y));
const sub = (x, y) => make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y));
const isEqual = (x, y) => numer(x) * denom(y) === numer(y) * denom(x);
const mul = (x, y) => make(numer(x) * numer(y), denom(x) * denom(y));
const div = (x, y) => make(numer(x) * denom(y), denom(x) * numer(y));
const toString = rat => `${numer(rat)} / ${denom(rat)}`;