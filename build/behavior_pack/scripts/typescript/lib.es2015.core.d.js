export const lib_es2015_core_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ninterface Array<T> {\n    /**\n     * Returns the value of the first element in the array where predicate is true, and undefined\n     * otherwise.\n     * @param predicate find calls predicate once for each element of the array, in ascending\n     * order, until it finds one where predicate returns true. If such an element is found, find\n     * immediately returns that element value. Otherwise, find returns undefined.\n     * @param thisArg If provided, it will be used as the this value for each invocation of\n     * predicate. If it is not provided, undefined is used instead.\n     */\n    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;\n    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;\n\n    /**\n     * Returns the index of the first element in the array where predicate is true, and -1\n     * otherwise.\n     * @param predicate find calls predicate once for each element of the array, in ascending\n     * order, until it finds one where predicate returns true. If such an element is found,\n     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\n     * @param thisArg If provided, it will be used as the this value for each invocation of\n     * predicate. If it is not provided, undefined is used instead.\n     */\n    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;\n\n    /**\n     * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array\n     * @param value value to fill array section with\n     * @param start index to start filling the array at. If start is negative, it is treated as\n     * length+start where length is the length of the array.\n     * @param end index to stop filling the array at. If end is negative, it is treated as\n     * length+end.\n     */\n    fill(value: T, start?: number, end?: number): this;\n\n    /**\n     * Returns the this object after copying a section of the array identified by start and end\n     * to the same array starting at position target\n     * @param target If target is negative, it is treated as length+target where length is the\n     * length of the array.\n     * @param start If start is negative, it is treated as length+start. If end is negative, it\n     * is treated as length+end.\n     * @param end If not specified, length of the this object is used as its default value.\n     */\n    copyWithin(target: number, start: number, end?: number): this;\n}\n\ninterface ArrayConstructor {\n    /**\n     * Creates an array from an array-like object.\n     * @param arrayLike An array-like object to convert to an array.\n     */\n    from<T>(arrayLike: ArrayLike<T>): T[];\n\n    /**\n     * Creates an array from an iterable object.\n     * @param arrayLike An array-like object to convert to an array.\n     * @param mapfn A mapping function to call on every element of the array.\n     * @param thisArg Value of \'this\' used to invoke the mapfn.\n     */\n    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];\n\n    /**\n     * Returns a new array from a set of elements.\n     * @param items A set of elements to include in the new array object.\n     */\n    of<T>(...items: T[]): T[];\n}\n\ninterface DateConstructor {\n    new (value: number | string | Date): Date;\n}\n\ninterface Function {\n    /**\n     * Returns the name of the function. Function names are read-only and can not be changed.\n     */\n    readonly name: string;\n}\n\ninterface Math {\n    /**\n     * Returns the number of leading zero bits in the 32-bit binary representation of a number.\n     * @param x A numeric expression.\n     */\n    clz32(x: number): number;\n\n    /**\n     * Returns the result of 32-bit multiplication of two numbers.\n     * @param x First number\n     * @param y Second number\n     */\n    imul(x: number, y: number): number;\n\n    /**\n     * Returns the sign of the x, indicating whether x is positive, negative or zero.\n     * @param x The numeric expression to test\n     */\n    sign(x: number): number;\n\n    /**\n     * Returns the base 10 logarithm of a number.\n     * @param x A numeric expression.\n     */\n    log10(x: number): number;\n\n    /**\n     * Returns the base 2 logarithm of a number.\n     * @param x A numeric expression.\n     */\n    log2(x: number): number;\n\n    /**\n     * Returns the natural logarithm of 1 + x.\n     * @param x A numeric expression.\n     */\n    log1p(x: number): number;\n\n    /**\n     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to\n     * subtracting 1 from the exponential function of x (e raised to the power of x, where e\n     * is the base of the natural logarithms).\n     * @param x A numeric expression.\n     */\n    expm1(x: number): number;\n\n    /**\n     * Returns the hyperbolic cosine of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    cosh(x: number): number;\n\n    /**\n     * Returns the hyperbolic sine of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    sinh(x: number): number;\n\n    /**\n     * Returns the hyperbolic tangent of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    tanh(x: number): number;\n\n    /**\n     * Returns the inverse hyperbolic cosine of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    acosh(x: number): number;\n\n    /**\n     * Returns the inverse hyperbolic sine of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    asinh(x: number): number;\n\n    /**\n     * Returns the inverse hyperbolic tangent of a number.\n     * @param x A numeric expression that contains an angle measured in radians.\n     */\n    atanh(x: number): number;\n\n    /**\n     * Returns the square root of the sum of squares of its arguments.\n     * @param values Values to compute the square root for.\n     *     If no arguments are passed, the result is +0.\n     *     If there is only one argument, the result is the absolute value.\n     *     If any argument is +Infinity or -Infinity, the result is +Infinity.\n     *     If any argument is NaN, the result is NaN.\n     *     If all arguments are either +0 or −0, the result is +0.\n     */\n    hypot(...values: number[]): number;\n\n    /**\n     * Returns the integral part of the a numeric expression, x, removing any fractional digits.\n     * If x is already an integer, the result is x.\n     * @param x A numeric expression.\n     */\n    trunc(x: number): number;\n\n    /**\n     * Returns the nearest single precision float representation of a number.\n     * @param x A numeric expression.\n     */\n    fround(x: number): number;\n\n    /**\n     * Returns an implementation-dependent approximation to the cube root of number.\n     * @param x A numeric expression.\n     */\n    cbrt(x: number): number;\n}\n\ninterface NumberConstructor {\n    /**\n     * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1\n     * that is representable as a Number value, which is approximately:\n     * 2.2204460492503130808472633361816 x 10‍−‍16.\n     */\n    readonly EPSILON: number;\n\n    /**\n     * Returns true if passed value is finite.\n     * Unlike the global isFinite, Number.isFinite doesn\'t forcibly convert the parameter to a\n     * number. Only finite values of the type number, result in true.\n     * @param number A numeric value.\n     */\n    isFinite(number: unknown): boolean;\n\n    /**\n     * Returns true if the value passed is an integer, false otherwise.\n     * @param number A numeric value.\n     */\n    isInteger(number: unknown): boolean;\n\n    /**\n     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a\n     * number). Unlike the global isNaN(), Number.isNaN() doesn\'t forcefully convert the parameter\n     * to a number. Only values of the type number, that are also NaN, result in true.\n     * @param number A numeric value.\n     */\n    isNaN(number: unknown): boolean;\n\n    /**\n     * Returns true if the value passed is a safe integer.\n     * @param number A numeric value.\n     */\n    isSafeInteger(number: unknown): boolean;\n\n    /**\n     * The value of the largest integer n such that n and n + 1 are both exactly representable as\n     * a Number value.\n     * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.\n     */\n    readonly MAX_SAFE_INTEGER: number;\n\n    /**\n     * The value of the smallest integer n such that n and n − 1 are both exactly representable as\n     * a Number value.\n     * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).\n     */\n    readonly MIN_SAFE_INTEGER: number;\n\n    /**\n     * Converts a string to a floating-point number.\n     * @param string A string that contains a floating-point number.\n     */\n    parseFloat(string: string): number;\n\n    /**\n     * Converts A string to an integer.\n     * @param string A string to convert into a number.\n     * @param radix A value between 2 and 36 that specifies the base of the number in `string`.\n     * If this argument is not supplied, strings with a prefix of \'0x\' are considered hexadecimal.\n     * All other strings are considered decimal.\n     */\n    parseInt(string: string, radix?: number): number;\n}\n\ninterface ObjectConstructor {\n    /**\n     * Copy the values of all of the enumerable own properties from one or more source objects to a\n     * target object. Returns the target object.\n     * @param target The target object to copy to.\n     * @param source The source object from which to copy properties.\n     */\n    assign<T, U>(target: T, source: U): T & U;\n\n    /**\n     * Copy the values of all of the enumerable own properties from one or more source objects to a\n     * target object. Returns the target object.\n     * @param target The target object to copy to.\n     * @param source1 The first source object from which to copy properties.\n     * @param source2 The second source object from which to copy properties.\n     */\n    assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;\n\n    /**\n     * Copy the values of all of the enumerable own properties from one or more source objects to a\n     * target object. Returns the target object.\n     * @param target The target object to copy to.\n     * @param source1 The first source object from which to copy properties.\n     * @param source2 The second source object from which to copy properties.\n     * @param source3 The third source object from which to copy properties.\n     */\n    assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;\n\n    /**\n     * Copy the values of all of the enumerable own properties from one or more source objects to a\n     * target object. Returns the target object.\n     * @param target The target object to copy to.\n     * @param sources One or more source objects from which to copy properties\n     */\n    assign(target: object, ...sources: any[]): any;\n\n    /**\n     * Returns an array of all symbol properties found directly on object o.\n     * @param o Object to retrieve the symbols from.\n     */\n    getOwnPropertySymbols(o: any): symbol[];\n\n    /**\n     * Returns the names of the enumerable string properties and methods of an object.\n     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\n     */\n    keys(o: {}): string[];\n\n    /**\n     * Returns true if the values are the same value, false otherwise.\n     * @param value1 The first value.\n     * @param value2 The second value.\n     */\n    is(value1: any, value2: any): boolean;\n\n    /**\n     * Sets the prototype of a specified object o to object proto or null. Returns the object o.\n     * @param o The object to change its prototype.\n     * @param proto The value of the new prototype or null.\n     */\n    setPrototypeOf(o: any, proto: object | null): any;\n}\n\ninterface ReadonlyArray<T> {\n    /**\n     * Returns the value of the first element in the array where predicate is true, and undefined\n     * otherwise.\n     * @param predicate find calls predicate once for each element of the array, in ascending\n     * order, until it finds one where predicate returns true. If such an element is found, find\n     * immediately returns that element value. Otherwise, find returns undefined.\n     * @param thisArg If provided, it will be used as the this value for each invocation of\n     * predicate. If it is not provided, undefined is used instead.\n     */\n    find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;\n    find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;\n\n    /**\n     * Returns the index of the first element in the array where predicate is true, and -1\n     * otherwise.\n     * @param predicate find calls predicate once for each element of the array, in ascending\n     * order, until it finds one where predicate returns true. If such an element is found,\n     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\n     * @param thisArg If provided, it will be used as the this value for each invocation of\n     * predicate. If it is not provided, undefined is used instead.\n     */\n    findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;\n}\n\ninterface RegExp {\n    /**\n     * Returns a string indicating the flags of the regular expression in question. This field is read-only.\n     * The characters in this string are sequenced and concatenated in the following order:\n     *\n     *    - "g" for global\n     *    - "i" for ignoreCase\n     *    - "m" for multiline\n     *    - "u" for unicode\n     *    - "y" for sticky\n     *\n     * If no flags are set, the value is the empty string.\n     */\n    readonly flags: string;\n\n    /**\n     * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\n     * expression. Default is false. Read-only.\n     */\n    readonly sticky: boolean;\n\n    /**\n     * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\n     * expression. Default is false. Read-only.\n     */\n    readonly unicode: boolean;\n}\n\ninterface RegExpConstructor {\n    new (pattern: RegExp | string, flags?: string): RegExp;\n    (pattern: RegExp | string, flags?: string): RegExp;\n}\n\ninterface String {\n    /**\n     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\n     * value of the UTF-16 encoded code point starting at the string element at position pos in\n     * the String resulting from converting this object to a String.\n     * If there is no element at that position, the result is undefined.\n     * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.\n     */\n    codePointAt(pos: number): number | undefined;\n\n    /**\n     * Returns true if searchString appears as a substring of the result of converting this\n     * object to a String, at one or more positions that are\n     * greater than or equal to position; otherwise, returns false.\n     * @param searchString search string\n     * @param position If position is undefined, 0 is assumed, so as to search all of the String.\n     */\n    includes(searchString: string, position?: number): boolean;\n\n    /**\n     * Returns true if the sequence of elements of searchString converted to a String is the\n     * same as the corresponding elements of this object (converted to a String) starting at\n     * endPosition – length(this). Otherwise returns false.\n     */\n    endsWith(searchString: string, endPosition?: number): boolean;\n\n    /**\n     * Returns the String value result of normalizing the string into the normalization form\n     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\n     * is "NFC"\n     */\n    normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;\n\n    /**\n     * Returns the String value result of normalizing the string into the normalization form\n     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\n     * is "NFC"\n     */\n    normalize(form?: string): string;\n\n    /**\n     * Returns a String value that is made from count copies appended together. If count is 0,\n     * the empty string is returned.\n     * @param count number of copies to append\n     */\n    repeat(count: number): string;\n\n    /**\n     * Returns true if the sequence of elements of searchString converted to a String is the\n     * same as the corresponding elements of this object (converted to a String) starting at\n     * position. Otherwise returns false.\n     */\n    startsWith(searchString: string, position?: number): boolean;\n\n    /**\n     * Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n     * @deprecated A legacy feature for browser compatibility\n     * @param name\n     */\n    anchor(name: string): string;\n\n    /**\n     * Returns a `<big>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    big(): string;\n\n    /**\n     * Returns a `<blink>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    blink(): string;\n\n    /**\n     * Returns a `<b>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    bold(): string;\n\n    /**\n     * Returns a `<tt>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    fixed(): string;\n\n    /**\n     * Returns a `<font>` HTML element and sets the color attribute value\n     * @deprecated A legacy feature for browser compatibility\n     */\n    fontcolor(color: string): string;\n\n    /**\n     * Returns a `<font>` HTML element and sets the size attribute value\n     * @deprecated A legacy feature for browser compatibility\n     */\n    fontsize(size: number): string;\n\n    /**\n     * Returns a `<font>` HTML element and sets the size attribute value\n     * @deprecated A legacy feature for browser compatibility\n     */\n    fontsize(size: string): string;\n\n    /**\n     * Returns an `<i>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    italics(): string;\n\n    /**\n     * Returns an `<a>` HTML element and sets the href attribute value\n     * @deprecated A legacy feature for browser compatibility\n     */\n    link(url: string): string;\n\n    /**\n     * Returns a `<small>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    small(): string;\n\n    /**\n     * Returns a `<strike>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    strike(): string;\n\n    /**\n     * Returns a `<sub>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    sub(): string;\n\n    /**\n     * Returns a `<sup>` HTML element\n     * @deprecated A legacy feature for browser compatibility\n     */\n    sup(): string;\n}\n\ninterface StringConstructor {\n    /**\n     * Return the String value whose elements are, in order, the elements in the List elements.\n     * If length is 0, the empty string is returned.\n     */\n    fromCodePoint(...codePoints: number[]): string;\n\n    /**\n     * String.raw is usually used as a tag function of a Tagged Template String. When called as\n     * such, the first argument will be a well formed template call site object and the rest\n     * parameter will contain the substitution values. It can also be called directly, for example,\n     * to interleave strings and values from your own tag function, and in this case the only thing\n     * it needs from the first argument is the raw property.\n     * @param template A well-formed template string call site representation.\n     * @param substitutions A set of substitution values.\n     */\n    raw(template: { raw: readonly string[] | ArrayLike<string>}, ...substitutions: any[]): string;\n}\n';