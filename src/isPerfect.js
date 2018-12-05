/*
* Является введенное число совершенным? Если да - true, если нет - false. Моя версия 1.
* Совершенные числа: https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
* */
const isPerfect_1 = number => {
	if (number <= 0) return false;

    let sum = 0;
    let res = 0;
	for (let i = number; i > 1; i -= 1) {
		res = number % i === 0 ? number / i : 0;
		sum += res;
	}
	// return counter === number;
    console.log(sum);
};

/*
* Является введенное число совершенным? Если да - true, если нет - false. Моя версия 2.
* Совершенные числа: https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
* */
const isPerfect_2 = number => {
    if (number <= 0) return false;

    let counter = 0;
    let res = 0;
    for (let i = 2; i <= number; i += 1) {
        res = number % i === 0 ? number / i : 0;
        counter += res;
    }
    return counter === number;
};

/*
* Является введенное число совершенным? Если да - true, если нет - false. Версия Хекслета.
* Совершенные числа: https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
* */
const isPerfect_3 = (num) => {
    if (num === 0) return false;

    let sum = 0;
    const upperBorder = num / 2;

    for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
        if (num % divisor === 0) sum += divisor;
    }

    return sum === num;
};

console.log(isPerfect_1(6));
// console.log(isPerfect_2(6));
// console.log(isPerfect_3(6));