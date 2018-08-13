/*
 * auto curried, point free array map
 * 
 * Ex: const arr = [1, 2, 3];
 *     const add1 = (a) => a + 1;
 *     map(add1, arr); // [2, 3, 4]
 * 
*/

import curry from './curry';

const map = curry(
  <T, U>(mapperFn: (val: T, i: number, a: T[]) => U, arr: T[]): U[] => {
    const newArr: U[] = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      newArr.push(mapperFn(item, i, arr));
    }

    return newArr;
  }
);

export default map;
