export const lib_es2017_string_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ninterface String {\n    /**\n     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\n     * The padding is applied from the start (left) of the current string.\n     *\n     * @param maxLength The length of the resulting string once the current string has been padded.\n     *        If this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n     *\n     * @param fillString The string to pad the current string with.\n     *        If this string is too long, it will be truncated and the left-most part will be applied.\n     *        The default value for this parameter is " " (U+0020).\n     */\n    padStart(maxLength: number, fillString?: string): string;\n\n    /**\n     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\n     * The padding is applied from the end (right) of the current string.\n     *\n     * @param maxLength The length of the resulting string once the current string has been padded.\n     *        If this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n     *\n     * @param fillString The string to pad the current string with.\n     *        If this string is too long, it will be truncated and the left-most part will be applied.\n     *        The default value for this parameter is " " (U+0020).\n     */\n    padEnd(maxLength: number, fillString?: string): string;\n}\n';