/*
* Функция принимает строку, проверяют является ли строка полиндромом, если да, то озвращает true, усли нет - false.
*/

import {assertOneParam} from './myModules';

// Мое решение
const isPalindrome1 = (str) => {
  if (str.length < 2) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome1(str.substr(1, str.length - 2))
  }
  return false;
};

// Решение Хекслета
const isPalindrome2 = (string) => {
  if (string.length <= 1) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substr(1, string.length - 2);

  return isPalindrome2(stringWithoutFirstAndLastSymbols);
};

// Тестирование
assertOneParam(true, '', isPalindrome1);
assertOneParam(true, 'aa', isPalindrome1);
assertOneParam(true, '404', isPalindrome1);
assertOneParam(true, 'abba', isPalindrome1);
assertOneParam(true, 'radar', isPalindrome1);
assertOneParam(true, 'absba', isPalindrome1);
assertOneParam(true, 'aibohphobia', isPalindrome1);

assertOneParam(false, 'abaoba', isPalindrome1);
assertOneParam(false, 'aashgkhdj', isPalindrome1);
assertOneParam(false, 'palindrome', isPalindrome1);
assertOneParam(false, 'aibohapohobia', isPalindrome1);