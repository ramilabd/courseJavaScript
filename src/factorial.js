const factorialRecursion = number => {
	if (number === 0 || number === 1) {
		return 1;
	}
	return number * factorial(number - 1);
};

// Вычисление факториала с прменением итеративного процесса.
const factorialIterations = (n) => {
  const iter = (counter, acc) => {
    if (counter > n) {
      return acc;
    }
    return iter(counter + 1, counter * acc);
  };

  return iter(1, 1);
};

console.log(factorialRecursion(5));
console.log(factorialIterations(5));