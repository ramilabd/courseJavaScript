/*
* Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). При этом:
* Если число делится без остатка на 3, то вместо него выводится слово Fizz
* Если число делится без остатка на 5, то вместо него выводится слово Buzz
* Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
* В остальных случаях выводится само число
* Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
* Мое решение.
*/

const fizzBuzz_1 = (begin, end) => {
    for (begin; begin <= end; begin += 1) {
        if (begin % 3 === 0 && begin % 5 === 0) {
            console.log("FizzBuzz");
        } else if (begin % 3 === 0){
            console.log("Fizz");
        } else if (begin % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(begin);
        }
    }
};

/*
* Решение Хекслета.
*/
const fizzBuzz_2 = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        const hasFizz = i % 3 === 0;
        const hasBuzz = i % 5 === 0;
        const fizzPart = hasFizz ? 'Fizz' : '';
        const buzzPart = hasBuzz ? 'Buzz' : '';
        console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);
    }
};

fizzBuzz_1(10, 20);
fizzBuzz_2(10, 20);