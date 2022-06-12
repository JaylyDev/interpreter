// JavaScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.4 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.4.tgz>
//               @types/mojang-gametest@0.1.4 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
// Created by: https://github.com/JaylyDev

import { players, whitelist, addon_prefix as prefix } from "scripts/credentials/access.js";
import { client } from './commands/message.js';
import * as Minecraft from "Minecraft";
import * as GameTest from "GameTest";
// import * as UI from "Minecraft"ui";
import { viewObj } from 'scripts/viewObj.js';
import { md5 } from 'scripts/blueimp-md5/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import { Base64 } from "scripts/base64.js";

const world = Minecraft.world ?? Minecraft.World;

world.events.beforeChat.subscribe((data) => {
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

    client(playerName, `${data.message}`);
    try {
      const ctx = {
        Minecraft: Minecraft,   // mojang-minecraft     https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
        GameTest: GameTest,     // mojang-gametest      https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
        viewObj: viewObj,
        md5: md5,
        sha256: sha256,
        Base64: Base64
      }
      const callback = (new Function(`{${Object.keys(ctx).join(",")}}`, `return (function () { ${data.message.substring(1)} });`))(ctx); callback();
    } catch (error) {
      client(playerName, `§c${String(error)}`);
    };
  }
});
