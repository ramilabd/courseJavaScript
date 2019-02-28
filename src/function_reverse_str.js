/**
 * функция реверс строки. Моя версия 
 * @param  {[type]} str [принимает строку]
 * @return {[type]}     [возвращает перевернутую строку]
 */
const reverse = str => {

	let result = '';
	let i = 1;
	while (i <= str.length) {
		result = result + str[str.length - i];
		i = i + 1;
	}
	console.log(result);
}


/**
 * функция реверс строки. Версия учителя с Хекслета 
 * @param  {[type]} str [принимает строку]
 * @return {[type]}     [возвращает перевернутую строку]
 */
const reverse = (str) => {
	let i = str.length - 1;
	let result = '';

	while (i >= 0) {
		result = result + str[i];
		i = i - 1;
	}

	return result;
};