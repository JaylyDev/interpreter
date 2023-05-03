/**
 * Native JSON stringify function
 */
const __stringify: (value: any, replacer?: (this: any, key: string, value: any) => any | (number | string)[] | null | undefined, space?: string | number) => string = JSON.stringify;

/**
 * Clone the object using iteration
 * @license https://creativecommons.org/licenses/by-sa/3.0/
 * @author Gabriel Petrovay 
 * @param {object} obj 
 * @returns {object}
 */
function cloneJSON(obj: object): object {
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Array) {
    var cloneA: any[] = [];
    for (var i = 0; i < obj.length; ++i) {
      cloneA[i] = cloneJSON(obj[i]);
    }
    return cloneA;
  } else {
    var cloneO = {};
    for (const i in obj) {
      cloneO[i] = cloneJSON(obj[i]);
    }
    return cloneO;
  }
};

/**
 * Modified JSON stringify function.
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * 
 * @param {any} value A JavaScript value, usually an object or array, to be converted.
 * @param {(this: any, key: string, value: any) => any} replacer A function that transforms the results.
 * @param {string | number} space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * 
 * @returns {string} JavaScript Object Notation (JSON) string.
 */
function JSONStringify (value: any, replacer: ((this: any, key: string, value: any) => any) | (string | number)[] | null | undefined, space: string | number | undefined): string {
  // @ts-ignore
  return __stringify(cloneJSON(value), replacer, space);
};

JSON.stringify = JSONStringify;