/*
* Функция buildHtml, простой вызов которой: buildHtml();
создаёт и возвращает следующий HTML:
<table>
  <tr>
    <td>lang</td>
    <td>comment</td>
  </tr>
  <tr>
    <td>php</td>
    <td>statements</td>
  </tr>
  <tr>
    <td>clojure</td>
    <td>expressions</td>
  </tr>
</table>
*/

// Мое решение
import {table, tr, td} from './tags';

const buildHtml = () => {
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions'))
  );
};

// Решение Хекслета
export default () => table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')),
);

buildHtml();
