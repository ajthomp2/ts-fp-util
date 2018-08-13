/*
 * auto curried, point free array reduce
 * 
 * Ex: const arr = [1, 2, 3];
 *     const add = (a, b) => a + b;
 *     reduce(add, 0, arr); // 6
 * 
*/

import curry from './curry';

const reduce = curry(
  <T, U>(
    reducerFn: (init: U, val: T, i: number, a: T[]) => U,
    initialValue: U,
    arr: T[]
  ): U => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      initialValue = reducerFn(initialValue, item, i, arr);
    }

    return initialValue;
  }
);

export default reduce;
