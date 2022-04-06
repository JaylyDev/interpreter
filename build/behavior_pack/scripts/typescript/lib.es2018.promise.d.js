export const lib_es2018_promise_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\n/**\n * Represents the completion of an asynchronous operation\n */\ninterface Promise<T> {\n    /**\n     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\n     * resolved value cannot be modified from the callback.\n     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).\n     * @returns A Promise for the completion of the callback.\n     */\n    finally(onfinally?: (() => void) | undefined | null): Promise<T>\n}\n';