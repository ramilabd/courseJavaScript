const sumOfSquaresOfTopTwo = (number1, number2, number3) => {
  const sumOfSquares = (num1, num2) => {
    return num1 * num1 + num2 * num2;
  };

  if (number1 < number2 && number1 < number3) {
    return sumOfSquares(number2, number3);
  } else if (number2 < number1 && number2 < number3) {
    return sumOfSquares(number1, number3)
  } else {
    return sumOfSquares(number1, number2);
  }
};

console.log(sumOfSquaresOfTopTwo(2, 2, 3));