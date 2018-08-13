/*
 * returns a function that takes a value that
 * is applied to the leftmost function.  The
 * result of that function call is then passed
 * into the next function and so on until the
 * final result is returned
 * 
 * Ex: const strs = ['hello', '', 'hi'];
 *     const nonEmpty = (s) => s !== '';
 *     const p = pipe(filter(nonEmpty), first);
 *     p(strs); // 'hello'
*/

import NAryFunction from './utilities/nAry-function.type';
import UnaryFunction from './utilities/unary-function.type';

const pipe = (...fns: NAryFunction[]): UnaryFunction => {
  return function piped(input: any) {
    for (let i = 0; i < fns.length; i++) {
      input = fns[i](input);
    }

    return input;
  };
};

export default pipe;
