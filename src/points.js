/*
  getQuadrant - функция, которая вычисляет квадрант, в котором находится точка.
  getSymmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат.
  Такая симметричность означает, что меняются знаки у x и y.
  calculateDistance - функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
*/

// Мое решение
import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

export const getQuadrant = arg => {
  if (getX(arg) === 0 || getY(arg) === 0) {
    return null;
  }

  if (getX(arg) > 0 && getY(arg) > 0) {
    return 1;
  } else if (getX(arg) < 0 && getY(arg) > 0) {
    return 2;
  } else if (getX(arg) < 0 && getY(arg) < 0) {
    return 3;
  } else {
    return 4;
  }
};

export const getSymmetricalPoint = arg => makePoint(-getX(arg), -getY(arg));

export const calculateDistance = (arg1, arg2) => {
  return Math.sqrt(Math.pow((getX(arg2) - getX(arg1)), 2) + Math.pow((getY(arg2) - getY(arg1)), 2));
};

// Ршение Хекслета
export const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1, point2) => {
  const dX = getX(point2) - getX(point1);
  const dY = getY(point2) - getY(point1);
  return Math.sqrt((dX ** 2) + (dY ** 2));
};