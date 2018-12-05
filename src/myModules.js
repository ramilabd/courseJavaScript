export const length = str => str.length;
export const toUpperCase = str => str.toUpperCase();

/**
 * Функция assert - функция для тестирования кода
 * @param  {[type]} should    [то, что должна вернуть функция предаваемая третьим параметром - func]
 * @param  {[type]} paramFunc1 [параметры для функции func]
 * @param  {[type]} paramFunc2 [параметры для функции func]
 * @param  {[type]} func      [func принимает paramFunc и возвращает значение с которым сравнивается should]
 * @return {[type]}           [возвращает true если требуеое значение (should) равно возвращеному функцией func]
 */
export const assert = (should, paramFunc1, paramFunc2, func) => {
	if (should === func(paramFunc1, paramFunc2)) {
		console.log(true);
	} else {
		console.log(false);
	}
};