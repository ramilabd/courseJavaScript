/*
* Программа определяющая является ли переданное число степенью тройки. Моя версия.
* */
const isPowerOfThree_1 = number => {
    if (number === 0 || number % 1 !== 0 || number % 3 === 3){
        return false;
    }
    if (number === 1) {
        return true;
    }
    return isPowerOfThree(number / 3);
};

/*
* Программа определяющая является ли переданное число степенью тройки. Версия Хекслета.
* */
const isPowerOfThree_2 = (num) => {
    let current = 1;
    while (current < num) {
        current *= 3;
    }

    return current === num;
};

console.log(isPowerOfThree_1(3));
console.log(isPowerOfThree_2(3));