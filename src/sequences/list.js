import { l, cons, head, tail, isEmpty, toString as ListToString } from 'hexlet-pairs-data';
/*
* Функция has (my_has), проверяет, является ли переданное значение элементом списка.
* Функция reverse (my_reverse), переворачивает список, используя итеративный процесс.
* Функция concat (my_concat), соединяет два списка, используя рекурсивный процесс.
*/
const numbers1 = l();
const numbers2 = l(3, 2, 9);

// Мое решение
const my_has = (list, element) => {
  if (isEmpty(list) === true) {
    return false;
  }
  while (isEmpty(list) !== true) {
    if (head(list) === element) {
      return true;
    }
    list = tail(list);
  }

  return false;
};

const my_reverse = (list) => {
  let reverseList = l();
  while (isEmpty(list) !== true) {
    reverseList = cons(head(list), reverseList);
    list = tail(list);
  }
  return reverseList;
};

const my_concat = (list1, list2) => {
  if (list1 === null) {
    return list2;
  }else if (tail(list1) === null) {
    return cons(head(list1), list2);
  }

  return cons(head(list1), my_concat(tail(list1), list2));
};

// Решение Хекслета

export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) => (
      (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)))
  );

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};