/*
 * returns a function that takes a value that
 * is applied to the rightmost function.  The
 * result of that function call is then passed
 * into the next function and so on until the
 * final result is returned
 * 
 * Ex: const strs = ['hello', '', 'hi'];
 *     const nonEmpty = (s) => s !== '';
 *     const comp = compose(first, filter(nonEmpty));
 *     comp(strs); // 'hello'
*/

import NAryFunction from './utilities/nAry-function.type';
import UnaryFunction from './utilities/unary-function.type';

const compose = (...fns: NAryFunction[]): UnaryFunction => {
  return function composed(input: any) {
    for (let i = fns.length - 1; i >= 0; i--) {
      input = fns[i](input);
    }

    return input;
  };
};

export default compose;
