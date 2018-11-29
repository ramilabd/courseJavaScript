// const identity = str => str;
const length = str => str.length;

const sumOfNumbers = num => {
	let str = String(num);
	do {
		let result = 0;
		for (let i = 0; i < length(str); i += 1) {
			result += Number(str[i]);
		}
		str = String(result);
	} while (length(str) > 1);
	return Number(str);
};

const addDigits = num => {

	if (length(String(num)) === 1) {
		return num;
	}

	return sumOfNumbers(num);
};

console.log(addDigits(299));

// решение учителя

const sum = (str) => {
	let result = 0;
	for (let i = 0; i < length(str); i += 1) {
		result += Number(str[i]);
	}

	return result;
};

const addDigits = (num) => {
	let result = num;
	while (result >= 10) {
		result = sum(String(result));
	}

	return result;
};