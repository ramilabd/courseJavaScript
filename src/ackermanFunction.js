
import {assert} from './myModules/myModules';

const akkerman = (m, n) => {
  if (m === 0) return n + 1;
  if (m > 0 && n === 0){
    return akkerman(m - 1, 1);
  }
  if (m > 0 && n > 0){
    return akkerman(m - 1, akkerman(m, n -1))
  }
};

assert(1, 0, akkerman);

// console.log(akkerman(5, 0));