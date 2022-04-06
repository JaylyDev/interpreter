export const md5_d_ts="/**\n * Calculates MD5 value for a given string.\n * If a key is provided, calculates the HMAC-MD5 value.\n * Returns a Hex encoded string unless the raw argument is given.\n *\n * @param {string} string Input string\n * @param {string} [key] HMAC key\n * @param {boolean} [raw] Raw output switch\n * @returns {string} MD5 output\n */\ndeclare function md5(string: string, key?: string, raw?: boolean): string;\n";