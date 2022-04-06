// JavaScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.1 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.1.tgz>
//               @types/mojang-gametest@0.1.1 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.1.tgz>
// Created by: https://github.com/JaylyDev

import { World } from "mojang-minecraft";
import { players, whitelist } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import { viewObj } from 'scripts/viewObj.js';
import { md5 } from 'scripts/blueimp-md5/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import * as mojangminecraft from "scripts/@types/mojang-minecraft/index.js";
import * as mojanggametest from "scripts/@types/mojang-gametest/index.js";

let prefix = "$";

function getIndex (param) {
  if (param == "mojang-minecraft") {
    return mojangminecraft;
  } else if (param == "mojang-gametest") {
    return mojanggametest;
  } else return undefined;
};

World.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (data.message.substring(0, 1) == prefix && hasPermission == true) {
    /**
     * This script is only available to players with authorization
     * Players are not supposed to execute this file
     */
    data.cancel = true;

    client(playerName, `$${data.message.substring(1)}`);
    try {
      const callback = (new Function("Minecraft", "GameTest", "viewObj", "md5", "sha256", "getIndex", `return (function () { ${data.message.substring(1)} });`))(Minecraft, GameTest, viewObj, md5, sha256, getIndex);
      callback();
    } catch (error) {
      client(playerName, `§c${String(error)}`);
    };
  }
});
