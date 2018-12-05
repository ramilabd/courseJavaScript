export const length = str => str.length;
export const toUpperCase = str => str.toUpperCase();

/**
 * Функция assert - функция для тестирования кода
 * @param  {[type]} should    [то, что должна вернуть функция предаваемая третьим параметром - func]
 * @param  {[type]} paramFunc [параметры для функции func]
 * @param  {[type]} func      [func принимает paramFunc и возвращает значение с которым сравнивается should]
 * @return {[type]}           [возвращает true если требуеое значение (should) равно возвращеному функцией func]
 */
export const assert = (should, paramFunc, func) => {
	if (should === func(paramFunc)) {
		console.log(true);
	} else {
		console.log(false);
	}
};