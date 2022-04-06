export const lib_esnext_string_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ninterface String {\n    /**\n     * Replace all instances of a substring in a string, using a regular expression or search string.\n     * @param searchValue A string to search for.\n     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n     */\n    replaceAll(searchValue: string | RegExp, replaceValue: string): string;\n\n    /**\n     * Replace all instances of a substring in a string, using a regular expression or search string.\n     * @param searchValue A string to search for.\n     * @param replacer A function that returns the replacement text.\n     */\n    replaceAll(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;\n}\n';