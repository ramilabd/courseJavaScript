/**
 * Сравнение количества больших букв в строке.
 */

const length = str => str.length; // возвращает длину 

const toUpperCase = str => str.toUpperCase(); // приводит строку в верхний регистр 

const bigLettersCount = (str) => { // подсчет кол-ва заглавных букв в строке.
	let counter = 0;
	for (let i = 0; i < length(str); i += 1) {
		if (toUpperCase(str[i]) === str[i]) {
			counter += 1;
		}
	}
	return counter;
};

const compare = (first, second) => { // сравнение кол-ва заглавных букв в 2-х строках
	const firstCount = bigLettersCount(first);
	const secondCount = bigLettersCount(second);
	if (firstCount > secondCount) {
		return 1;
	} else if (firstCount < secondCount) {
		return -1;
	}
	return 0;
};

const greaterThan = (first, second) => // true - если first > second
	compare(first, second) === 1;

const lessThan = (first, second) => // true - если first < second
	compare(first, second) === -1;

const isEqual = (first, second) => // true - если first = second
	compare(first, second) === 0;


console.log(bigLettersCount('sw e WS'));