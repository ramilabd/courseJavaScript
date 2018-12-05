
import {assert} from './myModules';

const akkerman = (m, n) => {
  if (m === 0) return n + 1;
  if (m > 0 && n === 0){
    return akkerman(m - 1, 1);
  }
  if (m > 0 && n > 0){
    return akkerman(m - 1, akkerman(m, n -1))
  }
};

assert(1, 0, 0, akkerman);
assert(2, 1, 0, akkerman);
assert(3, 2, 0, akkerman);
assert(5, 3, 0, akkerman);
assert(13, 4, 0, akkerman);
assert(2, 0, 1, akkerman);
assert(3, 0, 2, akkerman);
assert(4, 0, 3, akkerman);
assert(5, 0, 4, akkerman);
assert(6, 0, 5, akkerman);