/**
 * функция нахождения наименьшео делителя числа. Версия для Хекслета.
 * @param  {[type]} number [число, наименьший делитель которого надо найти]
 * @return {[type]}  number || NaN  [нименьший делитель. Если исло < 1, то возвращает NaN]
 */
const smallestDivisor = (number) => {
  if (number < 1) {
    return NaN;
  }
  if (number == 1) {
    return 1;
  }
  let divider = 2;
  while (number % divider !== 0) {
    divider = divider + 1;
  }
  if (number == divider) {
    return number;
  } else {
    return divider;
  }
}

console.log(smallestDivisor(1));