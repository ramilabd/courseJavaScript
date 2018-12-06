/*
* Функция которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
* Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку.
* Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше),
* то функция должна вернуть null.
*/
import {assertOneParam} from './myModules';

// Мое решение
const dnaToRna = (dna) => {
  if (dna.length === 0) return '';
  let rna = '';
  for (let i = 0; i < dna.length; i += 1){
    switch(dna[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        rna = null;
        return rna;
    }
  }
  return rna;
};

// Решение Хекслета
export default (n) => {
  let rna = '';
  for (let i = 0; i < n.length; i += 1) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        return null;
    }
  }

  return rna;
};

// Тестирование
assertOneParam('UGCACCAGAAUU', 'ACGTGGTCTTAA', dnaToRna);
assertOneParam('GGCAU', 'CCGTA', dnaToRna);
assertOneParam('', '', dnaToRna);
assertOneParam(null, 'ACNTG', dnaToRna);