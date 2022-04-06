/**
*
*  Base64 encode / decode (Modified)
*  http://www.webtoolkit.info/javascript-base64.html
**/
export const base64_d_ts = `declare namespace Base64 {
    const _keyStr: string;
    export function encode(input: string): string;
    export function decode(input: string): string;
}`