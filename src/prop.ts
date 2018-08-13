/*
 * gets a property from an object or undefined
 * 
 * Ex: const obj = { a: 1 };
 *     prop('a', obj); // 1
 * 
*/

import curry from './curry';
import IDictionary from './utilities/dictionary.interface';

const prop = curry((property: string, obj: IDictionary): any => obj[property]);

export default prop;
