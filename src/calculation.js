const calculation = (a, operation, b) => {
	while (true) {
		switch (operation) {
			case "+":
				console.log(a + b);
				break;
			case "/":
				console.log(a - b);
				break;
			case "*":
				console.log(a * b);
				break;
			case "/":
				console.log(a / b);
				break;
		}
	}

}