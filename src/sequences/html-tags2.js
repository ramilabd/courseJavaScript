import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
import { node, append, make, value, is } from 'hexlet-html-tags'

// Мое решение
const reverseStr = str => str.split('').reverse().join('');
const map1 = (func, listHtml) => {
  if (isEmpty(listHtml)) {
    return l();
  }

  return cons(func(head(listHtml)), map1(func, tail(listHtml)));
};
const getValue = (element) => cdr(element);
const getName = (element) => car(element);
const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = getName(element);
  return `${toString(tail(elements))}<${tag}>${getValue(element)}</${tag}>`;
};
const mirror1 = (listHtml) => {
  const reversValue = reverseStr(getValue(head(listHtml)));
  const newTag = node(getName(head(listHtml)), reversValue);
  return cons(newTag, mirror1(tail(listHtml)));
};

// Решение Хекслета
// Итеративный процесс (рекурсивно)
export const map = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverseStr(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };

  return iter(elements, l());
};

export const mirror = elements => (
    map(element => node(getName(element), reverseStr(getValue(element))), elements)
);
let dom;
const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('h1', 'haskell'));
const dom5 = append(dom4, node('p', 'is a functional language'));
const dom6 = append(dom5, node('h1', 'prolog'));
dom = append(dom6, node('p', 'is about logic'));
// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom);