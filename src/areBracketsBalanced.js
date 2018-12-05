/*
* Программа "Сбалансированность скобок". Версия 1
*/
const areBracketsBalanced = text=> {
  let char, last, stack=[];

  for (let i = 0; i < text.length; i += 1) {
    char = text[i];
    if (char === "{" || char === "(") {
      stack.push(char);
      last = char;
    } else if (char === '}' || char === ")") {
      if (last) {
        if ((last === "{" && char === '}') || (last === '(') && char === ')') {
          stack.pop();
          last = stack.length > 0 ? stack[stack.length - 1] : undefined;
        }
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

/*
* Программа "Сбалансированность скобок". Версия 2. С использованием цикла while
 * */
const areBracketsBalanced_2 = str => {
    let stack = [];
    let balansed = true
	let index = 0;

    while (index < str.length && balansed) {
        let char = str.charAt(index);
        if (char === '(') {
            stack.push(char);
        } else if (stack.length === 0) {
            balansed = false;
        } else {
            stack.pop();
        }
        index += 1;
    }
    if (balansed && stack.length === 0){
        return true;
    }else {
        return false;
    }
}

/*
* Программа "Сбалансированность скобок". Версия 3. С использованием цикла for
 * */
const areBracketsBalanced_3 = str => {
    let stack = [];
    let balansed = true

    for (let i = 0; i < str.length; i += 1) {
        let char = str.charAt(i);
        if (char === '(') {
            stack.push(char);
        } else if (stack.length === 0) {
            balansed = false;
        } else {
            stack.pop();
        }
    }
    if (balansed && stack.length === 0){
        return true;
    }else {
        return false;
    }
}

/*
* Программа "Сбалансированность скобок". Версия 4. С использованием счетчика
* Идея отсюда http://math.msu.su/~shvetz/54/inf/perl-problems/chBalance_sIdeas.xhtml
 * */
const areBracketsBalanced_4 = (str) => {
    let acc = 0;
    for (let i = 0; i < str.length; i += 1) {
        const symbol = str[i];
        acc = symbol === '(' ? acc + 1 : acc - 1;
        if (acc < 0) {
            return false;
        }
    }
    return acc === 0;
};

console.log(areBracketsBalanced('(((())())))'))
console.log(areBracketsBalanced_2('(((())())))'))
console.log(areBracketsBalanced_3('(((())())))'))
console.log(areBracketsBalanced_4('()'))
