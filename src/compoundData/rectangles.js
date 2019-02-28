/*
  Основной интерфейс:
    makeRectangle (конструктор) - создаёт прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту.
    Селекторы getStartPoint, getWidth и getHeight

  Вспомогательные функции для выполнения расчетов:
    square - возвращает площадь прямоугольника (a * b).
    perimeter - возвращает периметр прямоугольника (2 * (a + b)).
    containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно вычислить в момент проверки).

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |
*/

import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// Мое решение
const makeRectangle = (leftUpPoint, width, height) => {
  const rightUpPoint = makePoint(getX(leftUpPoint) + width, getY(leftUpPoint));
  const rightDownPoint = makePoint(getX(rightUpPoint), getY(rightUpPoint) - height);
  return cons(cons(leftUpPoint, rightUpPoint), cons(rightUpPoint, rightDownPoint));
};

const getStartPoint = (rectangle) => getX(getX(rectangle));

const getWidth = (rectangle) => {
  const x = (getX(getY(getX(rectangle))) - getX(getX(getX(rectangle)))) ** 2;
  const y = (getY(getY(getX(rectangle))) - getY(getX(getX(rectangle)))) ** 2;
  return Math.sqrt(x + y);
};

const getHeight = (rectangle) => {
  const x = (getX(getX(getY(rectangle))) - getX(getY(getY(rectangle)))) ** 2;
  const y = (getY(getX(getY(rectangle))) - getY(getY(getY(rectangle)))) ** 2;
  return Math.sqrt(x + y);
};

const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);

const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));

const containsTheOrigin = (rectangle) => {
  const quadrantLeftUpPoint = quadrant(getX(getX(rectangle))); 
  const quadrantRightUpPoint = quadrant(getY(getX(rectangle))); 
  const quadrantRightDownPoint = quadrant(getY(getY(rectangle))); 
  if(quadrantLeftUpPoint === null || quadrantRightUpPoint === null || quadrantRightDownPoint === null) {
    return false;
  } else if (quadrantLeftUpPoint !== quadrantRightUpPoint && quadrantRightUpPoint !== quadrantRightDownPoint) {
    return true;
  }
  return false;
};

// Решение Хекслета
const makeRectangle = (point, width, height) => cons(point, cons(width, height));

const getStartPoint = rectangle => car(rectangle);
const getHeight = rectangle => cdr(cdr(rectangle));
const getWidth = rectangle => car(cdr(rectangle));

const square = rectangle => getHeight(rectangle) * getWidth(rectangle);
const perimeter = rectangle => 2 * (getHeight(rectangle) + getWidth(rectangle));

const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};