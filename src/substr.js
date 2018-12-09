/*
* Задание здесь https://ru.hexlet.io/code_reviews/76999#readme
*/

// Мое решение
const substr = (str, startIndex = 0, lengthSubStr = str.length) => {
  lengthSubStr = lengthSubStr < 0 ? 1 : lengthSubStr;
  startIndex = startIndex < 0 ? 0 : startIndex;
  const finiteIndex = startIndex + lengthSubStr - 1;
  if (lengthSubStr === 0 || startIndex > str.length - 1) {
    console.log('');
  } else if (finiteIndex > str.length - 1) {
    console.log(str.substr(startIndex, str.length));
  } else {
    console.log(str.substr(startIndex, lengthSubStr));
  }
};

// Решение Хекслета
export default (str, index = 0, substrLength = str.length) => {
  if (index >= str.length) {
    return '';
  }

  const currentIndex = index < 0 ? 0 : index;
  let lastIndex = currentIndex + (substrLength - 1);
  if (lastIndex + 1 < currentIndex) {
    lastIndex = currentIndex;
  } else if (lastIndex > str.length - 1) {
    lastIndex = str.length - 1;
  }

  let result = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};

// Тестирование
substr('abba', 0, 1);    // => a+
substr('abba', 1, 2);    // => bb+
substr('abba', -10, 2);  // => ab+
substr('abba', -1, 100); // => abba+
substr('abba', -1, -1);  // => a+
substr('abba', 1, -10);  // => b+
substr('abba', 1, 10);   // => bba+
substr('abba', 1, 0);    // => ''
substr('abba', 100, 3);  // => ''
substr('');     // => ''
substr('abba'); // => abba+