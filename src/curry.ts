/*
 * curries the function passed in
 * 
 * Ex: const add(x, y) => x + y;
 *     const curryAdd = curry(add);
 *     curryAdd(1)(2) // 3
 * 
 * Note: default and optional arguments will be
 *       curried, but gather arguments (...rest)
 *       will not be
*/

import NAryFunction from './utilities/nAry-function.type';

const curry = (
  fn: (...args: any[]) => any,
  arity: number = fn.length
): NAryFunction => {
  return (function currier(prevArgs: any[]) {
    return function curried(...nextArgs: any[]) {
      const allArgs =
        nextArgs.length > 0 ? prevArgs.concat(nextArgs) : prevArgs;
      return allArgs.length >= arity ? fn(...allArgs) : currier(allArgs);
    };
  })([]);
};

export default curry;
