/*
Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка, в которой также два отсека и точно также один отсек с письмом, а в другом - коробка. Коробки могут быть вложены друг в друга сколько угодно раз. Вам нужно добраться до коробки, внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.
Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные, которые не являются парой), а в другом - всегда коробка, но никогда не две коробки одновременно. Сами отсеки при этом могут меняться, то есть в одной коробке отсеком с письмом может быть первый, а в другой - последний.
Рекурсивная функция findPrimitiveBox, которая принимает на вход "коробку" (пару), находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.
 */

import { car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

// Мое решение 
const findPrimitiveBox = (pair) => {
  if (isPair(car(pair)) === false && isPair(cdr(pair)) === false) {
    return pair;    
  }
  const pair2 = isPair(car(pair)) ? car(pair) : cdr(pair);
  return findPrimitiveBox(pair2); 
};

// Решенние Хеслета
const findPrimitiveBox = (pair) => {
  const first = car(pair);
  const last = cdr(pair);

  if (!isPair(first) && !isPair(last)) {
    return pair;
  }

  const next = isPair(first) ? first : last;
  return findPrimitiveBox(next);
};