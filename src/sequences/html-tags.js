/*
  Урок "Разметка" курса "JS: Последовательности"
*/

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// Мое решение
const make = () => l();
const node = (tag, content) => cons(tag, content);
const value = (element) => cdr(element);
const name = (element) => car(element);
const append = (dom, element) => consList(element, dom);
const toStringHtml = (elements) => {
  let result = '';
  while(isEmpty(elements) === false) {
    result = `<${name(head(elements))}>${value(head(elements))}</${name(head(elements))}>` + result;
    elements = tail(elements)
  }
  return result;
};

// Решение Хекслета (отличается только функция toString)
const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};

const html1 = make();
const tag = node('div', 'HelloWorld!');
const html2 = append(html1, tag);
const tag2 = node('p', 'hexletlearn');
const html3 = append(html2, tag2);
console.log(toStringHtml(html3));