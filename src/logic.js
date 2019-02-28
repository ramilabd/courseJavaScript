/*
 Описание здесь: https://ru.hexlet.io/courses/js-functions/lessons/currying/exercise_unit
*/

// Мое решение
const True = arg1 => arg2 => arg1;
const False = arg1 => arg2 => arg2;
const If = func => arg1 => arg2 => func(arg1)(arg2);

// Решение Хеслета
const True = x => () => x;
const False = () => y => y;
const If = f => f;

console.log(If(True)('one')('two'));
console.log(If(False)('one')('two'));
console.log(If(True)()());

const ConditionFunction = If(True);
console.log(ConditionFunction('one')('two'));
