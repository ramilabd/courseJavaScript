/*
* програма принимаетна вход строку, возвращает строку где первая буква каждого слова в верхне регистре.
* */

import { length, toUpperCase } from "./myModules/myModules";

// // мое решение
// const toUpperCaseInWord = str => {
// 	let result = '';
// 	result += toUpperCase(str[0]);
//
// 	for (let i = 1; i < length(str); i += 1) {
// 		if (toUpperCase(str[i - 1]) === str[i - 1] && toUpperCase(str[i]) !== str[i]) {
// 			result += toUpperCase(str[i]);
// 			continue;
// 		}
// 		result += str[i];
// 	}
// 	console.log(result);
// };
//
// // решение Хекслета
// const toUpperCaseInWordHexlet = (str) => {
// 	let result = '';
// 	for (let i = 0; i < length(str); i += 1) {
// 		const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
// 		result += shouldBeBig ? toUpperCase(str[i]) : str[i];
// 	}
//
// 	return result;
// };

console.log(toUpperCase('hello'));