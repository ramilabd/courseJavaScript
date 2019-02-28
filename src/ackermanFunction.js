// Реализуйте и экспортируйте по умолчанию функцию Аккермана.

import {assert} from './myModules';

// Мое решение
const ackerman1 = (m, n) => {
  if (m === 0) return n + 1;
  if (m > 0 && n === 0){
    return ackerman1(m - 1, 1);
  }
  if (m > 0 && n > 0){
    return ackerman1(m - 1, ackerman1(m, n -1))
  }
};

// Решение Хекслета
const ackerman2 = (m, n) => {
  if (m === 0) {
    return n + 1;
  } else if (n === 0 && m > 0) {
    return ackerman2(m - 1, 1);
  }

  return ackerman2(m - 1, ackerman2(m, n - 1));
};

// Тестирование
assert(1, 0, 0, ackerman1);
assert(2, 1, 0, ackerman1);
assert(3, 2, 0, ackerman1);
assert(5, 3, 0, ackerman1);
assert(13, 4, 0, ackerman1);
assert(2, 0, 1, ackerman1);
assert(3, 0, 2, ackerman1);
assert(4, 0, 3, ackerman1);
assert(5, 0, 4, ackerman1);
assert(6, 0, 5, ackerman1);