const smallestDivisor = (number) => {
  if (number == 1 || number < 1) {
    console.log(number);
  }

  divisor = 2;
  while (number % divisor !== 0) {
    divisor = divisor + 1;
  }
  if (number == divisor) {
    console.log("Число простое, делители ", 1, " и ", divisor);
  } else {
    console.log(divisor);
  }
}

smallestDivisor(2);