/*
  Урок "Фильтрация списков" курса "JS: Последовательности"
*/
import { l, isEmpty, head, tail, cons, reverse, toString as pairToString } from 'hexlet-pairs-data';
import { getValue, is, map, toString as listToString} from 'hexlet-html-tags';

// Мое решение
const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    if (func(head(items))) {
      return iter(tail(items), cons(head(items), acc));
    }
    return iter(tail(items), acc);
  };

  return iter(elements, l());
};

const quotes = (elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    if (is('blockquote', head(items))) {
      return iter(tail(items), cons(getValue(head(items)), acc));
    }

    return iter(tail(items), acc);
  };

  return iter(elements, l());
};

// Решение Хекслета
const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  const result = map(getValue, filtered);
  return result;
};