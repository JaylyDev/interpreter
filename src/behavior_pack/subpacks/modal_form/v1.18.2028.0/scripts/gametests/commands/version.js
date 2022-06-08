// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.18.20.23\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from "mojang-minecraft";
import { players, whitelist } from "scripts/credentials/access.js";
import { addon_prefix as prefix } from "scripts/credentials/access.js";
import * as message from 'scripts/gametests/commands/message.js';

class version {
  static gametest (type) { // type: ( 'string' | 'array' | 'object' )
    const version = [ 1, 19, 0, 21 ];
    if (type == 'string') {
      return `${version[0]}.${version[1]}.${version[2]}.${version[3]}`;
    } else if (type == 'array') {
      return [version[0], version[1], version[2], version[3]];
    } else if (type == 'object') {
      return {
        "major": version[0],
        "minor": version[1],
        "patch": version[2],
        "revision": version[3]
      };
    } else return undefined;
  };

  static module (type) { // type: ( 'string' | 'array' | 'object' )
    const version = [ 19, 10, 161 ];
    if (type == 'string') {
      return `${version[0]}.${version[1]}.${version[2]}`;
    } else if (type == 'array') {
      return [version[0], version[1], version[2]];
    } else if (type == 'object') {
      return {
        "major": version[0],
        "minor": version[1],
        "patch": version[2]
      };
    } else return undefined;
  };
}

world.events.beforeChat.subscribe(data => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (data.message == `${prefix}version` && hasPermission == true) {
    data.cancel = true;
  
    /**
       * @returns
       * GameTest Framework version and Add-on GameTest Package version
       * @example
       * ```
       *    #version gametest
       *    #version
       * ```
       */
    const a = data.message;
    const cmd = a.split(" ");
    if (cmd[1] == "gametest") {
      message.client(playerName, `GameTest Framework version: ${version.gametest('string')}`);
    } else if (cmd[1] == "module") {
      message.client(playerName, `Add-on GameTest module version: ${version.module('string')}`);
    } else {
      message.client(playerName, `GameTest Framework version: ${version.gametest('string')}`);
      message.client(playerName, `Add-on GameTest module version: ${version.module('string')}`);
    }
  }
});