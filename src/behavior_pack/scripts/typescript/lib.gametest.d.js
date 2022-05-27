export const lib_gametest_d_ts = `
/*! *****************************************************************************
Copyright (c) Jayly <https://github.com/jaylydev>. All rights reserved.

Licensed under the GNU General Public License v3.0, you may not use
this file except in compliance with the License. You may obtain a copy of the
License at https://github.com/JaylyDev/interpreter/blob/main/LICENSE

License is conditioned on making available complete source code of licensed
works and modifications. Copyright and license notices must be preserved. 
Contributors provide an express grant of patent rights.
***************************************************************************** */



/// <reference no-default-lib="true"/>


/// <reference lib="dom" />

declare function __date_clock(): number;
declare function print(...data: any[]): void;

/////////////////////////////
/// TypeScript APIs (in this add-on)
/////////////////////////////

declare interface TypeScript {
  Services: {
    TypeScriptServicesFactory (): void
  }
}

declare var toolsVersion: string
`