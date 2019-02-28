/*
* Функция reverseIterations перевораивает строку используя итеративный процесс.
* Ссылка на подробное описание: ttps://ru.hexlet.io/courses/js-functions/lessons/lexical-environment/exercise_unit
*/

// Мое решение
const reverseIterations = (str) => {
  const iter = (currentIndex, acc) => {
    if (currentIndex > str.length - 1) {
      return acc;
    } else {
      return iter(currentIndex + 1, `${str[currentIndex]}${acc}`)
    }
  };

  return iter(0, '');
};

// Решение Хекслета
export default (str) => {
  const lastIndex = str.length - 1;
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);
  };

  return iter(0, '');
};

console.log(reverseIterations('reverse'));