/*
* Разворот принимаемого числа, с уетом знака. Мое решение.
*/
const reverseInt_1 = num => {
    let str = String(num);
    let result = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }
    if (result.slice(-1) === '-'){
        result = result.slice(0, -1);
        return 0 - Number(result);
    }
    return Number(result);
};

/*
* Разворот принимаемого числа, с уетом знака. Решение Хекслета.
*/
const reverseInt_2 = (num) => {
    const numAsStr = String(Math.abs(num));
    let reversedStr = '';
    let i = numAsStr.length - 1;

    while (i >= 0) {
        reversedStr += numAsStr[i];
        i -= 1;
    }
    const reversedModule = Number(reversedStr);

    return num < 0 ? -reversedModule : reversedModule;
};

console.log(reverseInt_2(-123456789));
console.log(typeof reverseInt_2(-123456789));
