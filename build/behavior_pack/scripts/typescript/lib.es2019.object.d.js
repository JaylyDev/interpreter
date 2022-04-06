export const lib_es2019_object_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\n/// <reference lib="es2015.iterable" />\n\ninterface ObjectConstructor {\n    /**\n     * Returns an object created by key-value entries for properties and methods\n     * @param entries An iterable object that contains key-value entries for properties and methods.\n     */\n    fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T };\n\n    /**\n     * Returns an object created by key-value entries for properties and methods\n     * @param entries An iterable object that contains key-value entries for properties and methods.\n     */\n    fromEntries(entries: Iterable<readonly any[]>): any;\n}\n';