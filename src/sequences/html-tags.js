import { cons, car, cdr, toString as pairToString} from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

const make = () => l();
const node = (tag, content) => cons('<' + tag + '>' + content + '</' + tag + '>', make());
const name = (pair) => car(pair);
const value = (pair) => car(cdr(pair));
const append = (list, pair) => cons(pair, list);
const toString = (pair) => `${name(pair)}${name(value(pair))}${value(value(pair))}`;


// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'hello, world'));
// const dom3 = append(dom2, node('h2', 'header2'));

const html = node('p', 'hello');
console.log(toString(html));