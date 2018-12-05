/**
 * функция проверяет является ли введенное число простым, если простое возвраает true, иначе false. Моя версия.
 * @param  {[type]} number [проверяемое число]
 * @return {[type]} boolean [true или false]
 */
const isPrime = number => {
	if (number == 1) {
		console.log(false);
	} else {
		let counter = 0;
		for (let divider = 1; divider <= number; divider++) {
			if (number % divider == 0) {
				counter++;
			}
		}

		if (counter == 2) {
			console.log(true);
		} else {
			console.log(false);
			console.log(counter);
		}
	}
};


/**
 * функция проверяет является ли введенное число простым, если простое возвраает true, иначе false. Версия учителя с Хекслета.
 * @param  {[type]} number [проверяемое число]
 * @return {[type]} boolean [true или false]
 */
// const isPrime = (number) => {
// 	if (number < 2) {
// 		return false;
// 	}

// 	for (let i = 2; i < number; i += 1) {
// 		if (number % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// };

// let res = isPrime(5);
// console.log(res);


isPrime(8);