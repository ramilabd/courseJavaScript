/*
* Функция которая меняет в строке регистр каждой буквы на противоположный.
* Мое решение.
*/
const invertCase1 = str => {
  if (str.length === 0) return '';
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toUpperCase() === str[i]) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }

  return result;
};

// решение учителя.
const invertCase2 = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};

console.log(invertCase1('Hello, World!'));
console.log(invertCase2('Hello, World!'));