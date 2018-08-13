/*
 * auto curried, point free array filter
 * 
 * Ex: const arr = ['', 'hello'];
 *     const nonEmpty = (s) => s !== '';
 *     filter(nonEmpty, arr); // ['hello']
 * 
*/

import curry from './curry';

const filter = curry(
  <T>(predicateFn: (val: T, i: number, a: T[]) => boolean, arr: T[]): T[] => {
    const newArr: T[] = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (predicateFn(item, i, arr)) {
        newArr.push(item);
      }
    }

    return newArr;
  }
);

export default filter;
