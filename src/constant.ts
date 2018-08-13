/*
 * returns a function that returns the value passed in
 * 
 * Ex: const two = constant(2);
 *     two(); // 2
*/

import GenericFuncNoArgs from './utilities/generic-func-no-args.type';

const constant = <T>(val: T): GenericFuncNoArgs<T> => () => val;

export default constant;
