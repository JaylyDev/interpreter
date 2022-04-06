export const lib_scripthost_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\n\n\n/////////////////////////////\n/// Windows Script Host APIS\n/////////////////////////////\n\n\ninterface ActiveXObject {\n    new (s: string): any;\n}\ndeclare var ActiveXObject: ActiveXObject;\n\ninterface ITextWriter {\n    Write(s: string): void;\n    WriteLine(s: string): void;\n    Close(): void;\n}\n\ninterface TextStreamBase {\n    /**\n     * The column number of the current character position in an input stream.\n     */\n    Column: number;\n\n    /**\n     * The current line number in an input stream.\n     */\n    Line: number;\n\n    /**\n     * Closes a text stream.\n     * It is not necessary to close standard streams; they close automatically when the process ends. If\n     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.\n     */\n    Close(): void;\n}\n\ninterface TextStreamWriter extends TextStreamBase {\n    /**\n     * Sends a string to an output stream.\n     */\n    Write(s: string): void;\n\n    /**\n     * Sends a specified number of blank lines (newline characters) to an output stream.\n     */\n    WriteBlankLines(intLines: number): void;\n\n    /**\n     * Sends a string followed by a newline character to an output stream.\n     */\n    WriteLine(s: string): void;\n}\n\ninterface TextStreamReader extends TextStreamBase {\n    /**\n     * Returns a specified number of characters from an input stream, starting at the current pointer position.\n     * Does not return until the ENTER key is pressed.\n     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n     */\n    Read(characters: number): string;\n\n    /**\n     * Returns all characters from an input stream.\n     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n     */\n    ReadAll(): string;\n\n    /**\n     * Returns an entire line from an input stream.\n     * Although this method extracts the newline character, it does not add it to the returned string.\n     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n     */\n    ReadLine(): string;\n\n    /**\n     * Skips a specified number of characters when reading from an input text stream.\n     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)\n     */\n    Skip(characters: number): void;\n\n    /**\n     * Skips the next line when reading from an input text stream.\n     * Can only be used on a stream in reading mode, not writing or appending mode.\n     */\n    SkipLine(): void;\n\n    /**\n     * Indicates whether the stream pointer position is at the end of a line.\n     */\n    AtEndOfLine: boolean;\n\n    /**\n     * Indicates whether the stream pointer position is at the end of a stream.\n     */\n    AtEndOfStream: boolean;\n}\n\ndeclare var WScript: {\n    /**\n     * Outputs text to either a message box (under WScript.exe) or the command console window followed by\n     * a newline (under CScript.exe).\n     */\n    Echo(s: any): void;\n\n    /**\n     * Exposes the write-only error output stream for the current script.\n     * Can be accessed only while using CScript.exe.\n     */\n    StdErr: TextStreamWriter;\n\n    /**\n     * Exposes the write-only output stream for the current script.\n     * Can be accessed only while using CScript.exe.\n     */\n    StdOut: TextStreamWriter;\n    Arguments: { length: number; Item(n: number): string; };\n\n    /**\n     *  The full path of the currently running script.\n     */\n    ScriptFullName: string;\n\n    /**\n     * Forces the script to stop immediately, with an optional exit code.\n     */\n    Quit(exitCode?: number): number;\n\n    /**\n     * The Windows Script Host build version number.\n     */\n    BuildVersion: number;\n\n    /**\n     * Fully qualified path of the host executable.\n     */\n    FullName: string;\n\n    /**\n     * Gets/sets the script mode - interactive(true) or batch(false).\n     */\n    Interactive: boolean;\n\n    /**\n     * The name of the host executable (WScript.exe or CScript.exe).\n     */\n    Name: string;\n\n    /**\n     * Path of the directory containing the host executable.\n     */\n    Path: string;\n\n    /**\n     * The filename of the currently running script.\n     */\n    ScriptName: string;\n\n    /**\n     * Exposes the read-only input stream for the current script.\n     * Can be accessed only while using CScript.exe.\n     */\n    StdIn: TextStreamReader;\n\n    /**\n     * Windows Script Host version\n     */\n    Version: string;\n\n    /**\n     * Connects a COM object\'s event sources to functions named with a given prefix, in the form prefix_event.\n     */\n    ConnectObject(objEventSource: any, strPrefix: string): void;\n\n    /**\n     * Creates a COM object.\n     * @param strProgiID\n     * @param strPrefix Function names in the form prefix_event will be bound to this object\'s COM events.\n     */\n    CreateObject(strProgID: string, strPrefix?: string): any;\n\n    /**\n     * Disconnects a COM object from its event sources.\n     */\n    DisconnectObject(obj: any): void;\n\n    /**\n     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.\n     * @param strPathname Fully qualified path to the file containing the object persisted to disk.\n     *                       For objects in memory, pass a zero-length string.\n     * @param strProgID\n     * @param strPrefix Function names in the form prefix_event will be bound to this object\'s COM events.\n     */\n    GetObject(strPathname: string, strProgID?: string, strPrefix?: string): any;\n\n    /**\n     * Suspends script execution for a specified length of time, then continues execution.\n     * @param intTime Interval (in milliseconds) to suspend script execution.\n     */\n    Sleep(intTime: number): void;\n};\n\n/**\n * WSH is an alias for WScript under Windows Script Host\n */\ndeclare var WSH: typeof WScript;\n\n/**\n * Represents an Automation SAFEARRAY\n */\ndeclare class SafeArray<T = any> {\n    private constructor();\n    private SafeArray_typekey: SafeArray<T>;\n}\n\n/**\n * Allows enumerating over a COM collection, which may not have indexed item access.\n */\ninterface Enumerator<T = any> {\n    /**\n     * Returns true if the current item is the last one in the collection, or the collection is empty,\n     * or the current item is undefined.\n     */\n    atEnd(): boolean;\n\n    /**\n     * Returns the current item in the collection\n     */\n    item(): T;\n\n    /**\n     * Resets the current item in the collection to the first item. If there are no items in the collection,\n     * the current item is set to undefined.\n     */\n    moveFirst(): void;\n\n    /**\n     * Moves the current item to the next item in the collection. If the enumerator is at the end of\n     * the collection or the collection is empty, the current item is set to undefined.\n     */\n    moveNext(): void;\n}\n\ninterface EnumeratorConstructor {\n    new <T = any>(safearray: SafeArray<T>): Enumerator<T>;\n    new <T = any>(collection: { Item(index: any): T }): Enumerator<T>;\n    new <T = any>(collection: any): Enumerator<T>;\n}\n\ndeclare var Enumerator: EnumeratorConstructor;\n\n/**\n * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.\n */\ninterface VBArray<T = any> {\n    /**\n     * Returns the number of dimensions (1-based).\n     */\n    dimensions(): number;\n\n    /**\n     * Takes an index for each dimension in the array, and returns the item at the corresponding location.\n     */\n    getItem(dimension1Index: number, ...dimensionNIndexes: number[]): T;\n\n    /**\n     * Returns the smallest available index for a given dimension.\n     * @param dimension 1-based dimension (defaults to 1)\n     */\n    lbound(dimension?: number): number;\n\n    /**\n     * Returns the largest available index for a given dimension.\n     * @param dimension 1-based dimension (defaults to 1)\n     */\n    ubound(dimension?: number): number;\n\n    /**\n     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,\n     * each successive dimension is appended to the end of the array.\n     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]\n     */\n    toArray(): T[];\n}\n\ninterface VBArrayConstructor {\n    new <T = any>(safeArray: SafeArray<T>): VBArray<T>;\n}\n\ndeclare var VBArray: VBArrayConstructor;\n\n/**\n * Automation date (VT_DATE)\n */\ndeclare class VarDate {\n    private constructor();\n    private VarDate_typekey: VarDate;\n}\n\ninterface DateConstructor {\n    new (vd: VarDate): Date;\n}\n\ninterface Date {\n    getVarDate: () => VarDate;\n}\n';