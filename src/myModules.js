export const length = str => str.length;
export const toUpperCase = str => str.toUpperCase();

/**
 * Функции assertOneParam и assertTwoParam - функции для тестирования кода
 * @param  {[type]} should    [то, что должна вернуть функция предаваемая третьим параметром - func]
 * @param  {[type]} paramFunc или paramFunc1 и paramFunc2 [параметры для функции func]
 * @param  {[type]} func      [func принимает paramFunc и возвращает значение с которым сравнивается should]
 * @return {[type]}           [возвращает true если требуемое значение (should) равно возвращеному функцией func]
 */
export const assertOneParam = (should, paramFunc, func) => {
	if (should === func(paramFunc)) {
		console.log(true);
	} else {
		console.log(false);
	}
};

export const assertTwoParam = (should, paramFunc1, paramFunc2, func) => {
  if (should === func(paramFunc1, paramFunc2)) {
    console.log(true);
  } else {
    console.log(false);
  }
};