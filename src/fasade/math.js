/*
* Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и
* выставил их наружу (то есть сделал их реэкспорт) под следующими именами: pow, sum, sub, sqrt и multi.
* А так же экспортировал функцию cube по умолчанию.
* Мое решение
*/

import cube from './numbers1';
export default cube;

export {pow2 as pow, sum2 as sum, sub2 as sub} from './numbers2';

import multi from './numbers2';
export {multi};

import sqrt from './numbers3';
export {sqrt};


// Решение Хекслета

import cube from './numbers1';
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2';
import sqrt from './numbers3';

export {
    cube as default, multi, pow, sum, sub, sqrt,
};