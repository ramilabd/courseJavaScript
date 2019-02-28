/*
  Испытание "Переворот строки". Функция которая переворачивает строку задом наперед, используя рекурсию.
  Мое решение.
*/
const reverse1 = (str) => {
  let i = str.length - 1;
  if (i === 0) {
    return str[i];
  } else if (i < 0) {
    return '';
  }

  return str[i] + reverse1(str.substr(0, str.length - 1));
};

/*
  Испытание "Переворот строки". Функция которая переворачивает строку задом наперед, используя рекурсию.
  Решение учителя.
*/
const reverse2 = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse2(str.substr(0, len - 1));
};

console.log(reverse1('9876543210'));
console.log(reverse2('9876543210'));